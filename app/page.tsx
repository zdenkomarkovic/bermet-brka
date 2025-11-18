import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wine, Leaf, Award, Heart, ShoppingBag, User } from "lucide-react";
import Image from "@/node_modules/next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative grid md:grid-cols-2 h-[100dvh] bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-20">
        <div className="relative min-h-[40dvh]">
          {" "}
          <Image
            src={"/hero.jpg"}
            fill
            alt="bermet brka"
            className="object-cover object-top"
          />
        </div>
        <div className=" flex flex-col justify-center mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Wine className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-7xl font-extrabold text-primary pt-5">
                Bermet Brka
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 md:mb-4 max-w-3xl mx-auto">
              Vinarija Aleks - Čuvar tradicije bermeta i lekovitog bilja
            </p>
            <p className="text-lg text-muted-foreground mb-2 md:mb-8 max-w-2xl mx-auto">
              Nenad Ratković &quot;Brka&quot; - najprepoznatljivija ličnost
              srpske vinske scene i majstor bermeta
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/proizvodi">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Pogledaj proizvode
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Kontaktirajte nas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O nama sekcija */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <User className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold text-foreground">O nama</h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Nenad Ratković</strong>,
                  poznatiji kao{" "}
                  <strong className="text-foreground">&quot;Brka&quot;</strong>{" "}
                  ili{" "}
                  <strong className="text-foreground">
                    &quot;Aleks Bermet&quot;
                  </strong>
                  , najprepoznatljivija je ličnost na srpskoj vinskoj sceni. Sa
                  72 godine, ovaj najfotografisaniji čovek među srpskim vinarima
                  odmah se prepoznaje po tradicionalnoj nošnji iz Srema - crnom
                  šeširu i prsluku, nakrobanoj beloj košulji i širokim belim
                  pantalonama.
                </p>
                <p>
                  <strong className="text-foreground">
                    Vinarija &quot;Aleks&quot;
                  </strong>{" "}
                  je porodična kompanija na srpskoj koja je na vinskoj sceni od
                  1990. godine.
                </p>
                <p>
                  Zaštitni znak Vinarije Aleks je{" "}
                  <strong className="text-foreground">
                    &quot;Bermet Aleks&quot;
                  </strong>
                  , a žig je zaštićen na domaćem i međunarodnom tržištu.
                  Osvojili smo brojne nagrade za naš Bermet, a 2008. godine
                  Vinarija Aleks je dobila titulu{" "}
                  <strong className="text-foreground">
                    Kraljevskog opskrbljivača
                  </strong>{" "}
                  od strane Kraljevskog dvora Karađorđević u Beogradu.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Od 1990.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Više od 30 godina tradicije u proizvodnji bermeta
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Wine className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">
                    Kraljevski opskrbljivač
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Priznanje Kraljevskog dvora Karađorđević (2008)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Leaf className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">30+ biljaka</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Preko 30 mirisnih gorkih trava i začina u crvenom bermetu
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Afrodizijak</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tradicionalno lekovit za dušu i unutrašnje organe
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O Bermetu */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Wine className="h-10 w-10 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Šta je Bermet?
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tradicionalno desertno aromatično vino koje se vekovima proizvodi
              u ovom kraju
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Istorija
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Sremski Karlovci vekovima su poznati po kvalitetnim vinima i
                  čuvenom bermetu. Karlovački bermet je služen na kraljevskim
                  dvorovima, brodovima, pa čak i na čuvenom oceanu liner
                  Titaniku.
                </p>
                <p className="text-muted-foreground font-semibold">
                  U Srbiji 19. veka robu su plaćali sušenom šljivom, ali u
                  Karlovcima – bermetom!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-primary" />
                  Proizvodnja
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Bermet je posebno likerno vino, povezano sa vermutom, ali
                  proizvedeno na drugačiji način - aromatizovano slatkim vinom i
                  obogaćeno sa više od 20 mirisnih gorkih trava i začina.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Beli bermet: 15 biljaka</li>
                  <li>Crveni bermet: 30 biljaka</li>
                  <li>Svaka biljka se namače u alkoholu 20 dana</li>
                  <li>Nijedna aromatična biljka ne sme da dominira</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Lekovitost
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Bermet je bio na početku korišćen kao lek. I danas se smatra
                  lekovitim za dušu i unutrašnje organe.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Afrodizijak za žene</li>
                  <li>Lekovit za dušu</li>
                  <li>Pomaže unutrašnjim organima</li>
                  <li>Tradicionalni prirodni lek</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lekovito bilje */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Leaf className="h-10 w-10 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Lekovito bilje i tinkture
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pored bermeta, nudimo i širok asortiman lekovitih tinktura i
              preparata od prirodnog bilja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Naša tradicija</CardTitle>
                <CardDescription>
                  Decenijsko iskustvo u pripremi lekovitog bilja
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Kao što bermet kombinuje vino sa lekovitim biljem, tako smo i
                  proširili našu ponudu sa različitim tinkturama i kapima koje
                  pomažu kod različitih zdravstvenih problema.
                </p>
                <p>
                  Svaka tinktura se priprema po tradicionalnom receptu, sa
                  pažljivo odabranim biljem koje se namače u alkoholu minimum 20
                  dana kako bi se izvukle sve lekovite materije.
                </p>
                <p className="font-semibold text-foreground">
                  U našoj ponudi: tinkture crnog oraha, čagi gljive, koprive,
                  sikavice, gloga, cimeta, đumbira i mnogih drugih lekovitih
                  biljaka.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Naši proizvodi</CardTitle>
                <CardDescription>
                  Od tradicionalnog bermeta do modernih tinktura
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Wine className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Bermet</strong> - Beli
                      i crveni, tradicionalno desertno vino
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Tinkture</strong> - Od
                      crnog oraha, čagi, koprive, sikavice, gloga i drugih
                      biljaka
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Kapi</strong> - Zeleni
                      orah, za zdrave vene, i druge specijalizovane mešavine
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Specijalne formule
                      </strong>{" "}
                      - Za cirkulaciju, holesterol, menopauzu i drugo
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/proizvodi">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Pogledaj sve proizvode
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
