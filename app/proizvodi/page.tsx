'use client';

import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

export default function ProizvodiPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} dodat u korpu!`);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Naši Proizvodi i Usluge
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pregledajte našu ponudu profesionalnih šlep usluga. Sve usluge su dostupne 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/proizvodi/${product.id}`}>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <CardHeader className="flex-1">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <Link href={`/proizvodi/${product.id}`}>
                  <CardTitle className="hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </Link>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-2xl font-bold text-primary">
                  {product.price.toLocaleString('sr-RS')} RSD
                </p>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1"
                  variant="default"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Dodaj u korpu
                </Button>
                <Link href={`/proizvodi/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Detalji
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
