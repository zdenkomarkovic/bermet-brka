'use client';

import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Wine, Award, Heart, Leaf } from 'lucide-react';
import { toast } from 'sonner';

export default function BermetPage() {
  const { addToCart } = useCart();

  // Filter only Bermet products
  const bermetProducts = products.filter(product => product.category === 'Bermet');

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} dodat u korpu!`);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Wine className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Bermet
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Tradicionalno desertno aromatično vino iz Sremskih Karlovaca
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baron Bermet Aleks - Zaštitni znak Vinarije Aleks od 1990. godine
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Kraljevski opskrbljivač</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Priznanje Kraljevskog dvora Karađorđević iz 2008. godine
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Leaf className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">15-30 lekovitih biljaka</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Beli bermet: 15 biljaka | Crveni bermet: 30 biljaka
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Istorijsko nasledstvo</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Služeno na austrijskom dvoru i čuvenom Titaniku
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Bermet */}
        <Card className="mb-12 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">O Bermetu</CardTitle>
            <CardDescription>Vekovima stara tradicija Sremskih Karlovaca</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Bermet je tradicionalno desertno aromatično vino koje se vekovima proizvodi u Sremskim Karlovcima.
              Sličan je italijanskom vermutu, ali se proizvodi drugačije - kroz mačeraciju lekovitih biljaka i začina.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Istorijska zanimljivost:</strong> U Srbiji 19. veka robu su plaćali sušenom šljivom,
              ali u Karlovcima – bermetom! Karlovački bermet je služen na kraljevskim dvorovima, brodovima,
              pa čak i na čuvenom oceanu liner Titaniku.
            </p>
            <p className="text-muted-foreground">
              Bermet je bio na početku korišćen kao lek. I danas se smatra lekovitim za dušu i unutrašnje organe,
              te afrodizijak za žene.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Desertno vino</Badge>
              <Badge variant="secondary">17% alkohola</Badge>
              <Badge variant="secondary">Sremski Karlovci</Badge>
              <Badge variant="secondary">Fruška Gora</Badge>
              <Badge variant="secondary">Zaštićen trademark</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Naša Bermet vina</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Dostupna u malim (0.187l) i standardnim bocama (0.75l)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bermetProducts.map((product) => (
              <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <Link href={`/proizvodi/${product.id}`}>
                  <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
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
                    {product.price.toLocaleString('sr-RS')} RSD
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Dodaj u korpu
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/proizvodi/${product.id}`}>
                      Detalji
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Probajte čuveni Brkin Bermet
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Više od 30 godina tradicije, kraljevsko priznanje, i neponovljiv ukus koji je osvajao svet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontakt">
                Kontaktirajte nas
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/proizvodi">
                Svi proizvodi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
