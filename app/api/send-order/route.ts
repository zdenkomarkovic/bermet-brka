import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory request tracking (for production use Redis/database)
const requestTracker = new Map<string, number[]>();

function isSpam(ip: string): boolean {
  const now = Date.now();
  const requests = requestTracker.get(ip) || [];

  // Remove requests older than 1 hour
  const recentRequests = requests.filter(time => now - time < 3600000);

  // Block if more than 5 requests in last hour
  if (recentRequests.length >= 5) {
    return true;
  }

  recentRequests.push(now);
  requestTracker.set(ip, recentRequests);

  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for spam protection
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check for spam
    if (isSpam(ip)) {
      return NextResponse.json(
        { success: false, message: 'Previše zahteva. Pokušajte kasnije.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { customerInfo, cart, totalPrice } = body;

    // Validate required fields
    if (!customerInfo?.name || !customerInfo?.email || !customerInfo?.phone || !customerInfo?.address) {
      return NextResponse.json(
        { success: false, message: 'Nedostaju obavezna polja' },
        { status: 400 }
      );
    }

    // Validate cart
    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Korpa je prazna' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      return NextResponse.json(
        { success: false, message: 'Neispravna email adresa' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create email content for shop owner
    let shopOwnerEmail = `
      <h2>Nova Narudžbina - Bermet Brka</h2>

      <h3>Podaci kupca:</h3>
      <p><strong>Ime i prezime:</strong> ${customerInfo.name}</p>
      <p><strong>Email:</strong> ${customerInfo.email}</p>
      <p><strong>Telefon:</strong> ${customerInfo.phone}</p>
      <p><strong>Adresa:</strong> ${customerInfo.address}</p>
      ${
        customerInfo.note
          ? `<p><strong>Napomena:</strong> ${customerInfo.note}</p>`
          : ""
      }

      <h3>Naručeni proizvodi:</h3>
      <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Proizvod</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Količina</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cena</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Ukupno</th>
          </tr>
        </thead>
        <tbody>
    `;

    // Build product table rows
    let productRows = "";
    cart.forEach((item: { name: string; quantity: number; price: number }) => {
      productRows += `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${
              item.quantity
            }</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${item.price.toLocaleString(
              "sr-RS"
            )} RSD</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${(
              item.price * item.quantity
            ).toLocaleString("sr-RS")} RSD</td>
          </tr>
      `;
    });

    shopOwnerEmail += productRows;
    shopOwnerEmail += `
        </tbody>
      </table>

      <h3 style="margin-top: 20px;">Ukupna cena: ${totalPrice.toLocaleString(
        "sr-RS"
      )} RSD</h3>

      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">Ovu narudžbinu je poslao kupac sa vašeg sajta.</p>
    `;

    // Create confirmation email for customer
    const customerEmail = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <h2 style="color: #7c2d12;">Hvala na narudžbini!</h2>

        <p>Poštovani/a ${customerInfo.name},</p>

        <p>Primili smo vašu narudžbinu i uskoro ćemo vas kontaktirati na broj telefona <strong>${
          customerInfo.phone
        }</strong> radi potvrde.</p>

        <h3 style="color: #7c2d12;">Detalji narudžbine:</h3>

        <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
          <thead>
            <tr style="background-color: #f3f4f6;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Proizvod</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Količina</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cena</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Ukupno</th>
            </tr>
          </thead>
          <tbody>
            ${productRows}
          </tbody>
        </table>

        <h3 style="margin-top: 20px; color: #7c2d12;">Ukupna cena: ${totalPrice.toLocaleString(
          "sr-RS"
        )} RSD</h3>

        <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-left: 4px solid #f59e0b;">
          <p style="margin: 0;"><strong>Adresa dostave:</strong> ${
            customerInfo.address
          }</p>
          ${
            customerInfo.note
              ? `<p style="margin: 10px 0 0 0;"><strong>Vaša napomena:</strong> ${customerInfo.note}</p>`
              : ""
          }
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

        <p style="color: #666; font-size: 14px;">
          Bermet Brka - Vinarija Aleks<br>
          Čuvar tradicije bermeta i lekovitog bilja<br>
      
        </p>

        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Ovo je automatska poruka. Ukoliko imate pitanja, kontaktirajte nas na telefon.
        </p>
      </div>
    `;

    // Send email to shop owner
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nova narudžbina od ${customerInfo.name}`,
      html: shopOwnerEmail,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: customerInfo.email,
      subject: "Potvrda narudžbine - Bermet Brka",
      html: customerEmail,
    });

    return NextResponse.json({
      success: true,
      message: "Emailovi uspešno poslati!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Greška pri slanju emaila" },
      { status: 500 }
    );
  }
}
