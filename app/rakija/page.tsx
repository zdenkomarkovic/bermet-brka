"use client";

import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, Wine, Award, Grape, Sparkles, Phone } from "lucide-react";
import { toast } from "sonner";

export default function RakijaPage() {
  const { addToCart } = useCart();

  // Filter only Rakija products
  const rakijaProducts = products.filter(
    (product) => product.category === "Rakija"
  );

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(product);
    toast.success(`${product.name} dodat u korpu!`);
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Wine className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Rakija
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Tradicionalna srpska rakija - rađena sa strašću i predanjem
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Od voćnih do travarskih - prava domaća rakija od Brke
          </p>
        </div>

        {/* Products Grid */}
        {rakijaProducts.length > 0 ? (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rakijaProducts.map((product) => (
                <Card
                  key={product.id}
                  className="flex flex-col hover:shadow-lg transition-shadow"
                >
                  <Link href={`/proizvodi/${product.id}`}>
                    <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover h-64 hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 text-xs font-semibold">
                        {product.category}
                      </span>
                      <Wine className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <Link href={`/proizvodi/${product.id}`}>
                      <CardTitle className="hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </CardTitle>
                    </Link>
                    {product.subtitle && (
                      <CardDescription className="line-clamp-2">
                        {product.subtitle}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {product.description}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {product.price.toLocaleString("sr-RS")} RSD
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Dodaj u korpu
                    </Button>
                    <div className="flex items-center w-full gap-2">
                      <div className="flex-1 h-px bg-border" />
                      <span className="text-xs text-muted-foreground font-medium px-2">
                        ILI
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+381606338605">
                        <Phone className="mr-2 h-4 w-4" />
                        Nazovi i poruči
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Wine className="h-24 w-24 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
              Uskoro nove rakije!
            </h3>
            <p className="text-muted-foreground">
              Radimo na dopuni asortimana rakija. Pozovite nas za više informacija.
            </p>
            <Button variant="default" className="mt-6" asChild>
              <a href="tel:+381606338605">
                <Phone className="mr-2 h-4 w-4" />
                Pozovi +38160 633 8605
              </a>
            </Button>
          </div>
        )}

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Grape className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Voćne rakije</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Od šljive, kajsije, dunje - tradicionalne voćne rakije
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Travarske rakije</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Lekovite travarske rakije sa dodatkom prirodnih biljaka
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Domaća proizvodnja</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sve rakije su ručno pravljene po tradicionalnim receptima
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Rakija */}
        <Card className="mb-12 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">O Rakiji</CardTitle>
            <CardDescription>
              Duh srpske tradicije u svakoj kapi
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Rakija je više od pića - to je tradicija, kultura i deo srpskog identiteta.
              Svaka kap naše rakije nosi u sebi priču o tradiciji, strpljenju i majstorstvu.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">
                Brkin zanat:
              </strong>{" "}
              Nenad Ratković &quot;Brka&quot; pravi rakiju po tradiciji svojih predaka.
              Svaka šarža je jedinstvena, rađena sa pažnjom i ljubavlju prema zanatstvu.
            </p>
            <p className="text-muted-foreground">
              Koristimo samo najkvalitetnije domaće voće i lekovito bilje,
              bez veštačkih aroma i dodataka. Svaka flaša je garancija kvaliteta i autentičnosti.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                100% prirodno
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Domaća proizvodnja
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Ručna izrada
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Tradicionalni recepti
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Bez aditiva
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
