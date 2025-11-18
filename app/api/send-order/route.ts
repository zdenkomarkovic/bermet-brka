import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerInfo, cart, totalPrice } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create email content
    let emailContent = `
      <h2>Nova Narudžbina - Bermet Brka</h2>

      <h3>Podaci kupca:</h3>
      <p><strong>Ime i prezime:</strong> ${customerInfo.name}</p>
      <p><strong>Telefon:</strong> ${customerInfo.phone}</p>
      <p><strong>Adresa:</strong> ${customerInfo.address}</p>
      ${customerInfo.note ? `<p><strong>Napomena:</strong> ${customerInfo.note}</p>` : ''}

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

    cart.forEach((item: any) => {
      emailContent += `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.quantity}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${item.price.toLocaleString('sr-RS')} RSD</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${(item.price * item.quantity).toLocaleString('sr-RS')} RSD</td>
          </tr>
      `;
    });

    emailContent += `
        </tbody>
      </table>

      <h3 style="margin-top: 20px;">Ukupna cena: ${totalPrice.toLocaleString('sr-RS')} RSD</h3>

      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">Ovu narudžbinu je poslao kupac sa vašeg sajta.</p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nova narudžbina od ${customerInfo.name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, message: 'Email uspešno poslat!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Greška pri slanju emaila' },
      { status: 500 }
    );
  }
}
