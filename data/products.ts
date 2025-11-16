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
  {
    id: '2',
    name: 'Tinktura - čagi gljiva',
    price: 1500,
    description: 'Čaga je parazitska gljiva koja raste na ruskim brezama. Sadrži preko 200 nutritivnih supstanci uključujući aminokiseline, enzime, minerale, vitamine B1, B2, B5, K, D2, polisaharide, beta glukane i betulinske kiseline.',
    image: '/caga.jpg',
    category: 'Tinkture',
    subtitle: 'Tinktura čagi gljive iz Sibira',
    usage: '3 x dnevno po 20 kapi pre jela. Vodeno - alkoholni rastvor 42%v/v, zapremine 100 ml.',
    benefits: [
      'Moćan antioksidans',
      'Jača imuni sistem',
      'Pomaže kod lečenja raka',
      'Deluje protiv gastritisa i čireva',
      'Pomaže kod tuberkuloze kostiju',
      'Smanjuje upale',
      'Reguliše krvni pritisak',
      'Poboljšava probavu',
      'Detoksikuje organizam',
      'Usporava starenje',
      'Pomaže kod dijabetesa'
    ],
    fullDescription: `O SIBIRSKOJ ČAGI

Čaga je parazitska gljiva, koja raste na ruskim brezama. Nazivaju je parazitom, jer upija sve što je sadržano u korenju, stablu i granama breze i sve te lekovite supstance daje ljudima. Raste na visini između 10-30 metara, što predstavlja izazov za specijalno obučene ljude, koji je sakupljaju. Obično raste u severnim krajevima Sibira u klimatskim zonama gde se temperatura spušta do -40° C. Ima izgled crne ispucale mase, nepravilnog oblika.

Sibirska divlja čaga se „bere" nakon određenog broja godina parazitiranja na drvetu breze, obično oko 25 godine, kada je najlekovitija. Tek tada količina lekovitih supstanci dolazi do visokog nivoa, toliko potrebnog za ugroženo zdravlje svih nas. Kroz taj dugi period „sazrevanja", lekovite supstance iz Čage postale su izuzetno male molekularne strukture, što omogućuje brzu i celovitu apsorbciju u naš organizam. Ova izuzetna medicinska gljiva sadrži preko 200 nutritivnih supstanci.

Sastav

Čaga je bogata: aminokiselinama, enzimima, mineralima u tragovima (bakar, selen, cink, mangan, gvožđe, germanijum), mineralima: magnezijum, kalcijum, kalijum, natrijum, fosforom, vitaminima B1, B2, B5, vitaminom K, vitaminom D2 ili ergosterolom, kojeg druge biljke inače nemaju. Nadalje, ona je moćan izvor više vrsta polisaharida, beta glukana, triterpena (među njima i lanosterol), sterola, saponina, inotodiola, trametenolične kiseline, SOD enzima i njenog glavnog sastojka betulinske kiseline.

Istorija

Svetski poznata ličnost, čuveni ruski disident i nobelovac Aleksandar Solženjicin, čovek koji je od komunističkog idealizma prešao trnovit put ka duhovnosti, uveo je Čagu u zapadni svet kroz svoj roman „Odeljenje za rak", objavljen 1969. godine. U ovom dirljivom autobiografskom delu možemo pročitati mučnu potragu političkih disidenata, obolelih od raka, koji očajnički pokušavaju da pronađu lek.

Lekar, koji im je davao klasičnu medicinsku terapiju u maloj bolnici, slučajno je uočio da seljaci iz obližnjeg sela nikada ne obolevaju od ove teške bolesti, a jedinu razliku u odnosu na druge ljude, pronašao je u tome, što seljani piju čaj od praha Čage, pošto nemaju novca da kupe pravi biljni čaj.

Budući da nije bio siguran u rezultat lečenja, lekar je svojim pacijentima uz redovnu hemoterapiju uveo i čaj od praha Čage, što je Solženjicina izvuklo iz kandži najteže bolesti, iz poslednjeg stadijuma raka i izvelo u novi život, koji je trajao još 55 godina (1918-2008), što je pisac u knjizi detaljno napisao.

Literatura

O ovoj moćnoj gljivi pisali su i Sbitnjeva Evgenija, knjiga pod imenom „Čaga gljiva protiv 100 bolesti", pisac Danilov Nikolaj Ilarionovič „Lekovita Čaga", zatim knjiga o najnovijim naučnim istraživanjima i kliničkim ispitivanjima, pod naslovom „Čaga – gljiva senzacija", čiji je autor najčuvenija doktorka fungi-terapeut Irina Filipova, inače autorka lepeze knjiga o lekovitim gljivama.

Forme preparata

Preparati od Čage danas se proizvode u različitim formama: ekstrakt u kapsulama i u suvom prahu, običnom mlevenom suvom čaju i tinktura. Razlika je u tome, što je čaj obična osušena Čaga, a ekstrakt Čage koncentrat biološki aktivnih supstanci, izvučenih iz tela ploda Čage i ima jačinu nekoliko desetina puta veću u odnosu na običan čaj.

O gljivi

Čaga, parazitska gljiva, sadrži biološki aktivne materije koje lekovito deluju na organizam. Postala je široko poznata nakon što se u romanu „Odeljenje za rak" Aleksandara Solženjicina glavni junak izlečio od raka uz njenu pomoć...

Čaga (Inonotus Obliquus) – gljiva koja raste na brezi - koristi se u narodnoj medicini mnogih istočnoevropskih zemalja, uključujući i Rusiju, za lečenje gastritisa, čireva, tuberkuloze kostiju, raka…`
  },
];
