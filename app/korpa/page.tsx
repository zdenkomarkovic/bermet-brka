'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

export default function KorpaPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} uklonjen iz korpe`);
  };

  const handleClearCart = () => {
    if (window.confirm('Da li ste sigurni da želite da ispraznite korpu?')) {
      clearCart();
      toast.success('Korpa je ispražnjena');
    }
  };

  const handleViberOrder = () => {
    // Validate required fields
    if (!customerInfo.name.trim()) {
      toast.error('Molimo unesite vaše ime');
      return;
    }
    if (!customerInfo.phone.trim()) {
      toast.error('Molimo unesite vaš telefon');
      return;
    }
    if (!customerInfo.address.trim()) {
      toast.error('Molimo unesite vašu adresu');
      return;
    }

    // Create order message
    let message = `🛒 NOVA NARUDŽBINA\n\n`;
    message += `👤 Ime: ${customerInfo.name}\n`;
    message += `📱 Telefon: ${customerInfo.phone}\n`;
    message += `📍 Adresa: ${customerInfo.address}\n`;

    if (customerInfo.note.trim()) {
      message += `📝 Napomena: ${customerInfo.note}\n`;
    }

    message += `\n📦 PROIZVODI:\n`;
    message += `${'─'.repeat(30)}\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Količina: ${item.quantity} x ${item.price.toLocaleString('sr-RS')} RSD\n`;
      message += `   Ukupno: ${(item.price * item.quantity).toLocaleString('sr-RS')} RSD\n\n`;
    });

    message += `${'─'.repeat(30)}\n`;
    message += `💰 UKUPNO: ${getTotalPrice().toLocaleString('sr-RS')} RSD\n`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Phone number to send to
    const phoneNumber = '+381641967267';

    // Create Viber deep link with phone number
    const viberLink = `viber://chat?number=${phoneNumber}&text=${encodedMessage}`;

    // Open Viber
    window.location.href = viberLink;

    toast.success('Otvaranje Viber aplikacije...');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vaša korpa je prazna
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Dodajte proizvode u korpu da biste nastavili sa kupovinom.
            </p>
            <Link href="/proizvodi">
              <Button size="lg">
                Pogledaj proizvode
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Korpa
            </h1>
            <p className="text-muted-foreground">
              Imate {getTotalItems()} {getTotalItems() === 1 ? 'proizvod' : 'proizvoda'} u korpi
            </p>
          </div>
          <Link href="/proizvodi">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Nastavi kupovinu
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <Link href={`/proizvodi/${item.id}`} className="flex-shrink-0">
                      <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/proizvodi/${item.id}`}>
                        <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.category}
                      </p>
                      <p className="text-xl font-bold text-primary mb-4">
                        {item.price.toLocaleString('sr-RS')} RSD
                      </p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Subtotal */}
                        <div className="text-sm text-muted-foreground">
                          Ukupno: <span className="font-semibold text-foreground">
                            {(item.price * item.quantity).toLocaleString('sr-RS')} RSD
                          </span>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive ml-auto"
                          onClick={() => handleRemove(item.id, item.name)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Ukloni
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              className="w-full text-destructive hover:text-destructive"
              onClick={handleClearCart}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Isprazni korpu
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Pregled narudžbine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Broj proizvoda:</span>
                  <span>{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Međuzbir:</span>
                  <span>{getTotalPrice().toLocaleString('sr-RS')} RSD</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Ukupno:</span>
                    <span className="text-primary">
                      {getTotalPrice().toLocaleString('sr-RS')} RSD
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vaši podaci</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ime i prezime *</Label>
                  <Input
                    id="name"
                    placeholder="Unesite vaše ime i prezime"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Unesite vaš broj telefona"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresa *</Label>
                  <Input
                    id="address"
                    placeholder="Unesite vašu adresu"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Napomena (opciono)</Label>
                  <Textarea
                    id="note"
                    placeholder="Dodatne informacije ili napomena..."
                    value={customerInfo.note}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, note: e.target.value })}
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleViberOrder}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Poruči preko Vibera
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Otvoriće se Viber aplikacija sa svim detaljima narudžbine
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
