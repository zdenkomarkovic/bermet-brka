'use client';

import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, ArrowLeft, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${product.name} (x${quantity}) dodat u korpu!`);
    setQuantity(1);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/proizvodi">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Nazad na proizvode
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <p className="text-4xl font-bold text-primary mb-6">
              {product.price.toLocaleString('sr-RS')} RSD
            </p>

            <div className="prose prose-lg mb-8">
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Količina</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-2xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Dodaj u korpu
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                asChild
              >
                <a href="tel:+381">
                  <Phone className="mr-2 h-5 w-5" />
                  Pozovi
                </a>
              </Button>
            </div>

            {/* Additional Info */}
            <Card className="mt-8">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Informacije o usluzi</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Dostupno 24/7</li>
                  <li>✓ Profesionalna oprema</li>
                  <li>✓ Iskusno osoblje</li>
                  <li>✓ Osiguranje vozila</li>
                  <li>✓ Brz odziv</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Slične usluge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/proizvodi/${relatedProduct.id}`}>
                    <div className="relative h-48 w-full bg-muted">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-2xl font-bold text-primary">
                        {relatedProduct.price.toLocaleString('sr-RS')} RSD
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
