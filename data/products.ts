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
  {
    id: '3',
    name: 'Kapi - zeleni orah',
    price: 1500,
    description: 'Mladi zeleni orah sadrži belančevine, 65% ulja, fosfor, kalijum, magnezijum, vitamin B, gvožđe i veliku količinu C vitamina. Koristi se za čišćenje krvi, detoksikaciju organizma, čišćenje parazita i jačanje imuniteta.',
    image: '/BRKIN ZELENI ORAH. mala.jpg',
    category: 'Kapi',
    subtitle: 'Alkoholno - vodeni ekstrakt mladog zelenog oraha',
    usage: 'Deca do 6 godina - 2 x 15 kapi. Deca od 6 do 12 godina - 2 x 20 kapi. Deca starija od 12 godina i odrasli - 3 x 20 kapi. Kapi se mogu piti sa malo vode, čaja ili prirodnog soka. Boca je zapremine 100 ml.',
    benefits: [
      'Čišćenje krvi',
      'Detoksikacija organizma',
      'Čišćenje parazita',
      'Jačanje otpornosti organizma',
      'Bogat vitaminom C',
      'Sadrži fosfor, kalijum i magnezijum',
      'Prirodan izvor gvožđa',
      'Bezbedno za trudnice i dojilje'
    ],
    fullDescription: `Kapi od Zelenog oraha

Sastav: Alkoholno - vodeni ekstrakt mladog zelenog oraha

Mladi zeleni orah sadrži belančevine, 65% ulja, fosfor, kalijum, magnezijum, vitamin B, gvožđe i veliku količinu C vitamina.

Dugo se koristi u različitim oblicima (sirupi, kapi, tinkture)

Organske kapi od Zelenog oraha

• Čišćenja krvi
• Detoksikacije organizma
• Čišćenje parazita
• Jačanje otpornosti organizma

Način upotrebe:

Deca do 6 godina - 2 x 15 kapi
Deca od 6 do 12 godina - 2 x 20 kapi
Deca starija od 12 godina i odrasli - 3 x 20 kapi

Kapi se mogu piti sa malo vode, čaja ili prirodnog soka.

Kontraindikacije nisu poznate. Kapi mogu piti trudnice i dojilje.

NAPOMENA: Kapi od zelenog oraha su prirodni dodaci ishrani i ne mogu se koristiti kao zamjena za ishranu.

Boca je zapremine 100 ml.`
  },
  {
    id: '4',
    name: 'Kapi za zdrave vene',
    price: 1500,
    description: 'Brkine kapi za zdrave vene sadrže mešavinu tinktura lekovitih biljaka koje povoljno deluju na zid venskih krvnih sudova čineći ih elastičnijim, smanjuju otok, umanjuju bol i osećaj teških nogu.',
    image: '/BRKA ZA ZDRAVE VENE,.jpg',
    category: 'Kapi',
    subtitle: 'Brkine kapi za zdrave vene',
    usage: '3 puta na dan popiti pola kašičice ili 25 kapi tinkture. Pakovanje: 100ml',
    benefits: [
      'Povoljno deluje na zid venskih krvnih sudova',
      'Čini vene elastičnijim',
      'Smanjuje otok',
      'Umanjuje bol',
      'Smanjuje osećaj teških nogu',
      'Pomaže kod proširenih vena na nogama',
      'Pomaže kod hemoroida',
      'Pomaže kod tromboflebitisa'
    ],
    fullDescription: `BRKINE KAPI ZA ZDRAVE VENE

PAKOVANJE: 100ml

DEJSTVO:

Brkine kapi za zdrave vene, sadrže mešavinu tinktura lekovitih biljaka koje povoljno deluju na zid venskih krvnih sudova čineći ih elastičnijim, smanjuju otok, umanjuju bol i osečaj teških nogu.

Brkine kapi za zdrave vene preporučuju se osobama sa proširenim venama i hemoroidima.

SASTAV:

• Tinktura biljke Petasites hybridus (đavolji šešir ili pomor kantarion)
• Tinktura biljke Linaria vulgaris (linalist)
• Tinktura biljke Melilotus officinalis (žuti kokotac)
• Tinktura semena biljke Aesculus hippocastanum (divlji kesten)
• Tinktura biljke Melilotus albus (bela slatka detelina)
• Tinktura biljke Geranium robertianum (zdravac)
• Tinktura cvasti biljke Celendula officinalis (neven)
• Tinktura korena biljke Symphytum officinale (crni gavez)
• Tinktura biljke Achilea millefolium (hajdučka trava)

INDIKACIJE:

Brkine kapi za zdrave vene preporučuju se kod:
• Proširenih vena na nogama
• Hemoroida
• Otoka
• Tromboflebitisa
• Osećaja bola i težine u nogama

DOZIRANJE I NAČIN PRIPREME:

3 puta na dan popiti pola kašičice ili 25 kapi tinkture.

KONTRAINDIKACIJE:

Osetljivost na neku od biljnih tinktura.

NAČIN ČUVANJA:

Na sobnoj temperaturi, suvom i tamnom mestu, van domašaja dece.

NEŽELJENA DEJSTVA:

Retka pojava alergije i stomačnih problema.`
  },
  {
    id: '5',
    name: 'Tinktura karanfilića',
    price: 1500,
    description: 'Karanfilić sadrži eugenol, cariofilen i tanin, koje imaju jaka antimikrobna dejstva. Uništava parazite i njihova jajašca, mikroskopske protozoe, bakterije, viruse i gljivice. Jedina biljka sposobna da uništi jajašca parazita.',
    image: '/TINKTURA karanfilica.jpg',
    category: 'Tinkture',
    subtitle: '(Syzygium aromaticus)',
    usage: 'Preporučen unos je od 15 do 25 kapi, 3 puta dnevno sa vodom, pre jela. Zapremina boce je 100 ml.',
    benefits: [
      'Uništava parazite i njihova jajašca',
      'Jaka antimikrobna dejstva',
      'Uništava mikroskopske protozoe',
      'Leči malariju, tuberkulozu, koleru i šugu',
      'Deluje protiv bakterija, virusa i gljivica',
      'Uništava Candidu',
      'Uništava pseudomonas aeruginosa',
      'Uništava stafilokoke i streptokoke',
      'Pomaže kod mučnine i bolova u stomaku',
      'Pospešuje probavu',
      'Smanjuje holesterol i trigliceride',
      'Snažan antiseptik i analgetik'
    ],
    fullDescription: `Tinktura KARANFILIĆA (KLINČIĆA) - (Syzygium aromaticus)

Zapremina boce je 100 ml.

Karanfilić sadrži eugenol, cariofilen i tanin, koje imaju jaka antimikrobna dejstva. Navedeno uništava parazite i njihova jajašca. Eugonal je najjača do sad poznata supstanca koja uništava sve mikroskopske protozoe.

Karanfilić vrlo uspešno leči malariju, tuberkulozu, koleru, šugu i druge bolesti uzrokovane parazitima, bakterijama, virusima i gljivicama, uključujući i Candidu. Karanfilić uništava pseudomonas aeruginosa i sve vrste stafilokoka i streptokoka.

Važno je napomenuti kako je karanfilić jedina biljka koja je sposobna da uništi jajašca parazita. Ako jajašca nisu uništena, paraziti će se iz njih izleći i ponovno proširiti po celom telu.

Pomaže kod mučnine i bolova u stomaku, u borbi protiv parazita, posebno u kombinaciji sa tinkturama od pelina i crnog oraha. Pospešuje probavu i smanjuje holesterol i trigliceride. Karanfilić je snažan antiseptik i analgetik. Sadrži i tanine, smolu, sluz i veliki procenat flavonoida.

Čišćenje od parazita

Čišćenje od parazita naročito se preporučuje kod astme, alergija i raka, a preventivno se preporučuje svima jer je skoro svaki čovek zaražen nekom vrstom parazita. Čišćenje tela od parazita bi trebalo obavljati minimum jedan put godišnje, preporuka je dva puta, ali ne češće od 4 meseca.

Preporučen unos:

Od 15 do 25 kapi, 3 puta dnevno sa vodom, pre jela.

Sastav:

Vodeno-etanolni ekstrakt karanfilića.

NAPOMENA: Trudnicama, dojiljama i deci ispod 12 godina se ne savetuje uzimanje tinkture.`
  },
  {
    id: '6',
    name: 'Tinktura - divlji kesten',
    price: 1500,
    description: 'Divlji kesten je vrlo dobar prirodni lek za terapiju proširenih vena i hemoroida. Sadrži escin koji blagotvorno deluje na stabilizaciju zidova venskih krvnih sudova i smanjenje otoka i bola. Za spoljnu upotrebu.',
    image: '/BRKIN DIVLJI KESTEN za spoljnu upotrebu.jpg',
    category: 'Tinkture',
    subtitle: 'Divlji kesten za proširene vene',
    usage: 'Tinkturu koristiti svakodnevno. Blago utrljavati na obolela mesta. Utrljati u kožu svako veče pre spavanja, tokom deset dana. SAMO ZA SPOLJNU UPOTREBU. Zapremina boce je 100 ml.',
    benefits: [
      'Smanjuje simptome kod oboljenja vena',
      'Pomaže kod proširenih vena',
      'Umanjuje bol i umor',
      'Smanjuje otok nogu i edem',
      'Stabilizuje zidove venskih krvnih sudova',
      'Umanjuje upalne procese',
      'Povećava čvrstinu krvnih sudova',
      'Pojačava otpor venskih kapilara',
      'Smanjuje opterećenje venskih krvnih sudova',
      'Oslobađa osećaja težine u nogama',
      'Umanjuje bolove i grčeve',
      'Pomaže kod hemoroida'
    ],
    fullDescription: `Divlji kesten za proširene vene

Zapremina boce je 100 ml.

Divlji kesten je vrlo dobar prirodni lek za terapiju proširenih vena i hemoroida. Ova biljka utiče na smanjenje simptoma kod oboljenja vena, kao što su: proširene vene, bol, umor, otok nogu, edem.

Dejstvo

Sastojak divljeg kestena, escin, blagotvorno deluje na stabilizaciju zidova venskih krvnih sudova i samim tim smanjenja otoka i bola.

Divlji kesten umanjuje upalne procese, povećava čvrstinu krvnih sudova, pojačava otpor venskih kapilara i umanjuje propustljivost za tečnost, na taj način smanjuje se opterećenje venskih krvnih sudova i otok.

Divlji kesten oslobađa osećaja težine u nogama, umanjuje bolove i grčeve.

Način upotrebe

Tinkturu koristiti svakodnevno. Blago utrljavati na obolela mesta.

Tinkturu utrljati u kožu svako veče pre spavanja, tokom deset dana.

NAPOMENA: SAMO ZA SPOLJNU UPOTREBU. Ne gutati.

Zdravi i veseli bili!`
  },
];
