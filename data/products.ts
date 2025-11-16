import { Product } from '@/contexts/CartContext';

export interface ProductDetails extends Product {
  subtitle?: string;
  fullDescription?: string;
  usage?: string;
  benefits?: string[];
}

export const products: ProductDetails[] = [
  {
    id: '1',
    name: 'Tinktura - crni orah',
    price: 1500,
    description: 'Crni orah (lat. Juglans nigra) vrsta je cvjetajućeg drveta iz porodice oraha, koja je poreklom iz Severne Amerike. Crni orah obiluje jodom i mineralima, sadrži linoleičnu kiselinu i vitamin C.',
    image: '/TINKTURA CRNOG ORAHA.jpg',
    category: 'Tinkture',
    subtitle: 'Crni orah - čudesno blago u ljusci',
    usage: '6 do 10 kapi crnog oraha ujutru',
    benefits: [
      'Ubija parazite',
      'Deluje protiv gljivica i bakterija',
      'Ima anti-tumorska svojstva',
      'Poboljšava probavu',
      'Štiti jetru',
      'Leči bradavice i hemoroide',
      'Poboljšava rad štitnjače',
      'Pomaže kod alergija, psorijaze i artritisa',
      'Štiti zdravlje srca i krvnih žila',
      'Poboljšava pamćenje i koncentraciju',
      'Deluje protiv herpes virusa'
    ],
    fullDescription: `Crni orah - čudesno blago u ljusci

Crni orah (lat. Juglans nigra) vrsta je cvjetajućeg drveta iz porodice oraha, koja je poreklom iz Severne Amerike.

Plodovi su veći od običnog oraha, a ljuska mu je tvrđa te ga je teže čistiti.

Crni orah veoma je tražen i skupocen zbog kvalitetnog drva. To je pravo crno blago te se smatra da onaj ko poseduje njegovu šumu ima bogatstvo.

Prednost njegove sadnje je u tome što raste brže nego obični orah, koji je kod nas zastupljeniji.

Osim kao sirovina, ovaj orah je još vredniji kao lek.

Sastav i ljekovitost crnog oraha

Crni orah obiluje jodom i mineralima. Sadrži linoleičnu kiselinu i vitamin C u obliku askorbinske kiseline.

Alkaloidi, prisutni u crnom orahu, imaju anti-tumorna svojstva. Kožica ploda sadrži tanin i kinon, prirodne hemikalije koje ubijaju parazite.

Crni orah sadrži i juglon.

Sastojci juglona deluju protiv štetnih parazita pa ga zato mnogi stručnjaci preporučuju za bezopasno čišćenje organizma od parazita.

Crni orah – jedan od sastojaka antiparazitnog programa

Lekovito delovanje crnog oraha potvrđuju svedočanstva na hiljade korisnika.

On je esencijalni deo antiparazitnog programa Hulde Clark, koja je otkrila da se uz svaku bolest veže određeni parazit.

Crni orah, zajedno s pelinom i klinčićem, ubija preko sto vrsta parazita.

Crni orah i pelin uništavaju odrasle parazite i njihove mlade, a klinčić jajašca parazita.

Hulda Clark je izdvojila nekoliko koraka presudnih za ozdravljenje:

• Očistite organizam od parazita
• Uklonite otrove iz organizma
• Rešite se žučnih kamenaca čišćenjem jetre
• Uklonite bubrežne kamence čišćenjem bubrega

Bez obzira koliko je organizam zdrav i čist od toksina, u njemu se mogu nalaziti paraziti.

Prisutnost parazita i njihovo širenje u organizmu s vremenom mogu uzrokovati mnoge zdravstvene probleme.

Zbog toga dr.Clark preporučuje čišćenje od parazita čak i zdravim osobama, barem jedanput godišnje.

Uništava uzrok cista i tumora

Doktor John R. Cristopher tvrdio je da se u ženskom organizmu u kojemu ima dovoljno kalija neće stvarati ciste i tumori.

Po njemu uzimanje hrane bogate kalijem u kombinaciji s trodnevnim čišćenjem i izbacivanjem sluzavih namirnica može ukloniti njihov uzrok.

Za brži rezultat preporučuje šest do deset kapi tinkture crnog oraha dnevno, jer je bogata ovim mineralom, a djeluje i kod zloćudnih tumora.

Ubija kandidu

Istraživanja su potvrdila da crni orah ubija kandidu i druge gljivice, jer one ne mogu opstati u alkalnom okruženju koje crni orah stvara.

On veći učinak od mnogih klasičnih antigljivičnih lekova, poput cink undekilenata i selenovog sulfida.

Liječi srce

Uzimanje crnih oraha pozitivno utiče na krvne žile, smanjuje upale i začepljenja arterija te poboljšava tok krvi kroz telo.

Zbog obilja omega-3 kiselina, pomaže i kod alergija, psorijaze, artritisa, osteoporoze i visokog krvnog pritiska.

Visok deo joda u crnom orahu utiče pravilno funkcionisanje štitnjače i ubija bakterije.

NAPOMENA: Osobe koje boluju na jetru ili bubrege trebaju pažljivo koristiti crni orah. Trudnice i dojilje trebaju ga izbjegavati.`
  },
];
