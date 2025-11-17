"use client";

import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useState, use } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const { id } = use(params);

  const product = products.find((p) => p.id === id);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Product Image */}

          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full object-cover rounded-lg"
            priority
          />

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {product.name}
            </h1>

            {product.subtitle && (
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                {product.subtitle}
              </h2>
            )}

            <p className="text-4xl font-bold text-primary mb-6">
              {product.price.toLocaleString("sr-RS")} RSD
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
              <Button onClick={handleAddToCart} size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Dodaj u korpu
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="tel:+381">
                  <Phone className="mr-2 h-5 w-5" />
                  Pozovi
                </a>
              </Button>
            </div>

            {/* Usage Info */}
            {product.usage && (
              <Card className="mt-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3 text-lg">Upotreba</h3>
                  <p className="text-muted-foreground">{product.usage}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Lekovito djelovanje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Full Description */}
        {product.fullDescription && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Detaljan opis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                {product.fullDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground mb-4 whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Slični proizvodi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
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
                        {relatedProduct.price.toLocaleString("sr-RS")} RSD
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
