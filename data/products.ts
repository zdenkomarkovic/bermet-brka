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
  {
    id: '7',
    name: 'Tinktura sremuša',
    price: 1500,
    description: 'Sremuš (medveđi luk) deluje antioksidativno i čisti organizam. Snižava nivoa triglicerida i holesterola u krvi, snižava povišeni krvni pritisak, poboljšava cirkulaciju i blagotvorno deluje na rad srca.',
    image: '/BRKIN SREMUS0.030 ML.jpg',
    category: 'Tinkture',
    subtitle: 'Tinktura sremuša (medveđi luk)',
    usage: 'Piti 20 kapi 3 puta dnevno pre jela, uz čašu vode. Zapremina boce je 30 ml.',
    benefits: [
      'Deluje antioksidativno',
      'Čisti organizam',
      'Snižava nivo triglicerida u krvi',
      'Snižava nivo holesterola u krvi',
      'Snižava povišeni krvni pritisak',
      'Poboljšava cirkulaciju',
      'Blagotvorno deluje na rad srca',
      'Jača kardiovaskularni sistem'
    ],
    fullDescription: `Tinktura sremuša (medveđi luk)

Zapremina boce je 30 ml.

Sremuš, poznat i kao medveđi luk, koristi se vekovima u narodnoj medicini zbog svojih izuzetnih lekovitih svojstava.

Dejstvo

Deluje antioksidativno i čisti organizam.

Snižava nivoa triglicerida i holesterola u krvi.

Snižava povišeni krvni pritisak.

Poboljšava cirkulaciju.

Blagotvorno deluje na rad srca.

Način upotrebe

Piti 20 kapi 3 puta dnevno pre jela, uz čašu vode.

NAPOMENA: Tinktura sremuša je prirodni dodatak ishrani i treba je koristiti u okviru zdrave ishrane i životnog stila.`
  },
  {
    id: '8',
    name: 'Tinktura sremuša 100ml',
    price: 2500,
    description: 'Sremuš (medveđi luk) deluje antioksidativno i čisti organizam. Snižava nivoa triglicerida i holesterola u krvi, snižava povišeni krvni pritisak, poboljšava cirkulaciju i blagotvorno deluje na rad srca.',
    image: '/BRKIN SREMUS  0.100 ML.jpg',
    category: 'Tinkture',
    subtitle: 'Tinktura sremuša (medveđi luk)',
    usage: 'Piti 20 kapi 3 puta dnevno, pre jela, uz čašu vode. Zapremina boce je 100 ml.',
    benefits: [
      'Deluje antioksidativno',
      'Čisti organizam',
      'Snižava nivo triglicerida u krvi',
      'Snižava nivo holesterola u krvi',
      'Snižava povišeni krvni pritisak',
      'Poboljšava cirkulaciju',
      'Blagotvorno deluje na rad srca',
      'Jača kardiovaskularni sistem'
    ],
    fullDescription: `Tinktura sremuša (medveđi luk)

Zapremina boce je 100 ml.

Sremuš, poznat i kao medveđi luk, koristi se vekovima u narodnoj medicini zbog svojih izuzetnih lekovitih svojstava.

Dejstvo

Deluje antioksidativno i čisti organizam.

Snižavanje nivoa triglicerida i holesterola u krvi.

Snižavanje povišenog krvnog pritiska.

Poboljšanje cirkulacije.

Blagotvorno dejstvo na rad srca.

Način upotrebe

Piti 20 kapi 3 puta dnevno, pre jela, uz čašu vode.

Način čuvanja

Na hladnom i tamnom mestu, van domašaja dece.

NAPOMENA: Preparat ne bi trebalo da koriste deca do 14 godina, trudnice i osobe koje su preosetljive na neki od sastojaka.`
  },
  {
    id: '9',
    name: 'Tinktura - mlečika',
    price: 1500,
    description: 'Mala mlečika (Epilobium parviflorum) je prirodni citostatik i jedno od najjačih prirodnih sredstava za prostatu. Koristi se za lečenje prostate, naročito kod benignih tumora, bešike, mokraćnih i polnih organa.',
    image: '/BRKINA MLECIKA ZA PROSTATU.jpg',
    category: 'Tinkture',
    subtitle: 'Epilobium parviflorum',
    usage: '3 puta dnevno po 20 kapi rastvoriti u mlaku vodu, čaj ili mleko. Boca je zapremine 100 ml.',
    benefits: [
      'Prirodni citostatik',
      'Jedno od najjačih prirodnih sredstava za prostatu',
      'Antiurolitik',
      'Pomaže kod benignih tumora prostate',
      'Pomaže kod oboljenja bešike',
      'Pomaže kod oboljenja mokraćnih organa',
      'Pomaže kod oboljenja polnih organa',
      'Sadrži lecitine i flavonoide'
    ],
    fullDescription: `Mala mlečika - Epilobium parviflorum

Boca je zapremine 100 ml.

PRIRODNI CITOSTATIK i jedno od najjačih prirodnih sredstava za PROSTATU!

Lekovito delovanje

Antiurolitik i citostatik.

Narodna medicina

Koristi se za lečenje prostate, naročito kod benignih tumora, bešike, mokraćnih i polnih organa. Biljku je popularisala Marija Treben za lečenje mokraćnih i rasplodnih organa.

Hemijski sastav

Lecitini (hanaerol, β-sitosterin), flavonoidi, tanini, triterpenske kiseline i dr. Nedovoljno je proučena.

Upotreba tinkture

3 puta dnevno po 20 kapi rastvoriti u mlaku vodu, čaj ili mleko.

UPOZORENJE: Zbog nedostatka raspoloživih naučnih dokaza, tinktura male mlečike se ne preporučuje u trudnoći i tokom dojenja.`
  },
  {
    id: '10',
    name: 'Tinktura - ruzmarin',
    price: 1500,
    description: 'Ruzmarin poboljšava cirkulaciju, normalizuje krvni pritisak i umiruje srce. Pospešuje mokrenje, poboljšava pamćenje i koristi se kod živčanih bolova, slabosti srca i opšte telesne slabosti.',
    image: '/BRKIN RUZMARIN  100.jpg',
    category: 'Tinkture',
    subtitle: 'Poboljšava cirkulaciju, normalizuje pritisak/tlak, umiruje srce',
    usage: 'Uzima se 5-10 kapi dnevno na kocki šećera. Boca je zapremine 100 ml.',
    benefits: [
      'Poboljšava cirkulaciju',
      'Normalizuje krvni pritisak',
      'Umiruje srce',
      'Pospešuje mokrenje',
      'Koristi se kod vodene bolesti',
      'Pomaže kod reume i gihta',
      'Pomaže kod upale zglobova',
      'Poboljšava pamćenje',
      'Koristi se kod živčanih bolova',
      'Pomaže kod slabosti srca',
      'Pomaže kod opšte telesne slabosti',
      'Pojačava koren kose i poboljšava rast',
      'Uklanja bradavice (prema iskustvima korisnika)'
    ],
    fullDescription: `TINKTURA RUZMARINA

Boca je zapremine 100 ml.

Dejstvo

Poboljšava cirkulaciju, normalizuje pritisak/tlak, umiruje srce.

Pospešuje mokrenje. Koristi se kod vodene bolesti, reume, gihta i upale zglobova.

Poboljšava pamćenje.

Koristi se kod živčanih bolova, slabosti srca i opšte telesne slabosti.

Dodatna upotreba

Utrljavanjem u teme glave pojačava koren kose i poboljšava rast, neki se zaklinju da su uklonili bradavice ovom tinkturom.

Način upotrebe

Uzima se 5-10 kapi dnevno na kocki šećera.

NAPOMENA: Tinktura ruzmarina je prirodni dodatak ishrani i treba je koristiti u okviru zdrave ishrane i životnog stila.`
  },
  {
    id: '11',
    name: 'Tinktura - maslačak',
    price: 1500,
    description: 'Maslačak se koristi kod visokog krvnog pritiska, "trovanja krvi", reumatoidnog artritisa, plućnih tegoba, žutice, bolesti bubrega i kožnih tegoba. Odlično deluje na čišćenje jetre, žuči i bubrega.',
    image: '/BRKIN MASLACAK.jpg',
    category: 'Tinkture',
    subtitle: 'Delovi biljke koji se koriste',
    usage: '3 puta 15 kapi dnevno. Boca je zapremine 100 ml.',
    benefits: [
      'Pomaže kod visokog krvnog pritiska',
      'Čisti krv',
      'Pomaže kod reumatoidnog artritisa',
      'Pomaže kod plućnih tegoba',
      'Pomaže kod žutice',
      'Pomaže kod bolesti bubrega',
      'Pomaže kod kožnih tegoba',
      'Čišćenje jetre',
      'Poboljšava rad žuči',
      'Poboljšava rad bubrega',
      'Deluje na organe za izlučivanje'
    ],
    fullDescription: `Tinktura od Maslačka

Boca je zapremine 100 ml.

Delovi biljke koji se koriste

Prema evropskoj regulativi, ljekoviti su i korijen (taraxaci radix) i list (taraxaci folium). U modernoj fitoterapiji preferira se upotreba korijena, no učinkovitost se postiže i s listovima i s korijenom.

Tinktura od Maslačka preporuča se kod niza bolesti:

• Od visokoga krvnog tlaka
• "Trovanja krvi"
• Reumatoidnog artritisa
• Plućnih tegoba
• Žutice
• Bolesti bubrega
• Kožnih tegoba
• Čišćenje jetre

Čini se da su "naši stari" dobro uvidjeli njegovo općenito dobro djelovanje na organe za izlučivanje, jetru, žuč i bubrege, stoga je djelovanje na te sustave posljedično olakšavalo tegobe zbog drugih bolesti.

Upotreba

3 puta 15 kapi dnevno.

Kontraindikacije

Ni list, ni korijen ne smiju se piti kod opstrukcije (začepljenja) žučnih vodova. Oprez je potreban kod žučnih kamenaca, jer koleretično djelovanje maslačka može pokrenuti "uspavane" žučne kamence.

Ako pijete lijekove kardiotonične glikozide (digitalis), savjetujte se s fitoterapeutom – farmaceutom ili liječnikom.

Kod nasljednih sindroma povišenog bilirubina (Gilbertov, Crigler-Najjarov, Dubin Johnsonov sindrom) treba biti oprezan i koristiti dvostruko manju dozu od preporučene.

U slučaju boli, mučnine i drugih simptoma, treba prestati piti pripravke maslačka.

Maslačak trebaju izbjegavati osobe alergične na cijelu obitelj Asteraceae, kojoj maslačak i pripada.

NAPOMENA: Konsultujte se sa stručnjakom pre upotrebe, posebno ako imate zdravstvene probleme ili uzimate lekove.`
  },
  {
    id: '12',
    name: 'Tinktura - cimet',
    price: 1500,
    description: 'Cimet (Cinnamomum zeylanicum) povećava aktivnost inzulina i snižava nivo šećera u krvi. Smanjuje loš kolesterol i trigliceride, pojačava aktivnost mozga, pročišćava krv i pomaže kod dijabetesa tipa 2.',
    image: '/Cinnamonessentialoil2.jpg',
    category: 'Tinkture',
    subtitle: '(Cinnamomum zeylanicum)',
    usage: '3 x 20 kapi na dan. Tinktura cimeta, zapremine 30 ml.',
    benefits: [
      'Povećava aktivnost inzulina',
      'Snižava nivo šećera u krvi',
      'Snižava nivo lošeg kolesterola',
      'Snižava nivo triglicerida u krvi',
      'Pojačava aktivnost mozga',
      'Pomaže u uklanjanju nervne napetosti',
      'Pomaže kod gubitka pamćenja',
      'Pročišćava krv',
      'Poboljšava cirkulaciju krvi',
      'Smanjuje šanse za srčani udar',
      'Antifungalno, antibakterijsko, antivirusno i antiseptičko',
      'Pomaže u uništavanju mikroba u žučnom mehuru',
      'Zaustavlja krvarenje i olakšava ozdravljenje',
      'Deluje protuupalno',
      'Ublažava bolove i ukočenost mišića i zglobova',
      'Preporučuje se za artritis',
      'Pomaže kod glavobolje zbog hladnoće',
      'Kontroliše šećer u krvi kod dijabetesa tipa 2',
      'Pruža zaštitu od bolesti srca',
      'Pomaže kod koronarne arterije',
      'Poboljšava zdravlje debelog crijeva',
      'Uklanja loš zadah',
      'Pomaže kod probavnih smetnji',
      'Pomaže kod prehlade, gripe i upale grla',
      'Pomaže kod menstrualnih grčeva',
      'Prirodni diuretik',
      'Afrodizijak'
    ],
    fullDescription: `Tinktura od Cimeta (Cinnamomum zeylanicum)

Tinktura cimeta, zapremine 30 ml.

Lekoviti se cimet dobiva samo iz vrste Cinnamomum zeylanicum Nees, koja potiče sa Šri Lanke (cejlonski cimet).

Dejstvo na dijabetes

Potvrđeno je da Cimet dosta povećava aktivnost inzulina, tako da redovno uzimanje tinkture od cimeta može bitno smanjiti nivo šećera u krvi. Osim toga, ova biljka snižava i nivo lošeg kolesterola i triglicerida u krvi.

Mozak i nervni sistem

Cimet pojačava aktivnost mozga.

Pomaže u uklanjanju nervne napetosti i gubitka pamćenja.

Cirkulacija i srce

Pročišćava krv – uklanja nečistoće iz krvi.

Pomaže u cirkulaciji krvi – redovita konzumacija cimeta značajno smanjuje šanse za dobivanje srčanog udara.

Pruža zaštitu od bolesti srca.

Malo cimeta u hrani pomaže onima koji pate od koronarne arterije krvne žile koje opskrbljuju srce krvlju, bolesti i visokog krvnog tlaka.

Antimikrobna svojstva

Zbog antifungalnog, antibakterijskog, antivirusnog i antiseptičkog svojstva, cimet brani od vanjskih i unutarnjih bolesti.

Pomaže u uništavanju mikroba i bakterija u žučnom mjehuru.

Ozdravljenje

Cimet pomaže u zaustavljanju krvarenja i olakšava proces ozdravljenja.

Cimet deluje i protuupalno.

Mišići i zglobovi

Pomaže u uklanjanju ukočenosti mišića.

Ublažava bolove i ukočenost mišića i zglobova.

Preporučuje se za artritis.

Također pomaže u uklanjanju glavobolje koja se javlja zbog hladnoće.

Dijabetes

Cimet ima mogućnost kontrole šećera u krvi.

Dijabetičarima može koristiti da uzimaju manje inzulina.

Posebno koristan za pacijente koji boluju od dijabetesa tipa 2.

Probava

Također poboljšava zdravlje debelog crijeva.

Cimet se koristi u žvakaćim gumama, jer je dobar osvježivač i uklanja loš zadah.

On također pomaže probavi – vrlo je učinkovit za probavne smetnje.

Pomaže kod prehlade, gripe, upale grla i zagušenja.

Ostale koristi

Cimet je učinkovit u pružanju olakšanja od menstrualnih grčeva i nelagode.

Cimet je prirodni diuretik i pomaže u sekreciji i otpuštanju mokraće.

Također je afrodizijak jer se veruje da budi seksualnu želju.

Upotreba

3 x 20 kapi na dan.

NAPOMENA: Konzultujte se sa stručnjakom pre upotrebe, posebno ako imate dijabetes i koristite insulin ili druge lekove.`
  },
  {
    id: '13',
    name: 'Tinktura - đumbir',
    price: 600,
    description: 'Tinktura od đumbira veoma je korisna kod prehlada, posebno kod virusnih infekcija. Zahvaljujući tinkturi od đumbira upalni procesi u organizmu brzo nestaju. Ova tinktura je odlično prirodno sredstvo za glavobolju, zubobolju, bolove u zglobovima i kod osteohondroza.',
    image: '/ginger.jpg',
    category: 'Tinkture',
    subtitle: 'Vrlo je dobra za lečenje upale grla, krajnika, angine',
    usage: 'Tinkturu možete koristiti 3 puta dnevno po 20 kapi, kašikica meda i limun. Na taj način ćete obradovati organizam.',
    benefits: [
      'Korisna kod prehlada i virusnih infekcija',
      'Brzo smanjuje upalne procese u organizmu',
      'Pomaže kod glavobolje',
      'Pomaže kod zubobolje',
      'Ublažava bolove u zglobovima',
      'Pomaže kod osteohondroza',
      'Lečenje upale grla, krajnika, angine',
      'Poboljšava vid',
      'Povećava seksualnu aktivnost kod žena i muškaraca',
      'Pomaže u mršavljenju',
      'Smanjuje apetit',
      'Tonizira organizam',
      'Čisti organizam od toksina',
      'Čisti krv',
      'Poboljšava varenje',
      'Oslobađa suvišnih masnih naslaga',
      'Čisti jetru',
      'Pomaže kod alkoholizma',
      'Pomaže nakon hemioterapije',
      'Poboljšava ten kože',
      'Vraća sjaj u očima',
      'Poboljšava raspoloženje'
    ],
    fullDescription: `Tinktura od đumbira - drevni prirodni lijek

Tinktura od đumbira veoma je korisna kod prehlada, posebno kod virusnih infekcija. Zahvaljujući tinkturi od đumbira upalni procesi u organizmu brzo nestaju. Ova tinktura je odlično prirodno sredstvo za glavobolju, zubobolju, bolove u zglobovima i kod osteohondroza.

Vrlo je dobra za lečenje upale grla, krajnika, angine. Korisna je za poboljšanje vida, povećava seksualnu aktivnost kod žena i kod muškaraca.

Ali u poslednje vreme tinktura od đumbira najčešće se primenjuje za mršavljenje, jer se pokazala kao vrlo dobro sredstvo u borbi protiv suvišnih kilograma.

Onima koje žele uraditi korekciju svoje težine, preporučuje se ovaj lek koristiti ujutro i popodne, po 1-2 kašikice, za mesec dana. Poslije napraviti pauzu – jedan mesec, pa ponoviti. Tinktura od đumbira smanjuje apetit i tonizira organizam.

Zaista, zašto je đumbir lek za mnoge bolesti? Zar nije dovoljna količina lekovitih korenja, lišća i trava koje imaju u svom jedinstvenom sastavu sve korisne mikroelemente, vitamine, organske kiseline koje mogu smanjivati upale i t.d. Lista korisnih osobina obične kamilice ili limuna ništa nije manja u odnosu na đumbir.

Mnogo se piše o djumbiru, o lečenju đumbirom, dele se različite recepte na internetu, ali niko konkretno ne objašnjava zašto baš on može da izleči mnoge bolesti i u čemu je njegova tajna?

Đumbir poseduje jedinstvenu sposobnost čišćenja organizma od skoro svih vrsta toksina, koji se unose putem hrane, alkohola, hemikalija i zračenja.

1. Toksini su – glavni uzroci mnogih bolesti! Oni truju naš organizam, uzrokuju degeneraciju čelija, sto dovodi do onkoloških oboljenja (raka).

2. Toksini se sakupljaju na zidovima krvnih sudova i postaju uzrok hipertenzije, multiple skleroze, moždanog udara, bolesti srca.

3. Toksini koji se sakupljaju u crevima dovode do gastritisa, kolitisa, čira, pankreatitisa, poremećenog metabolizma, endokrine bolesti, dijabetesa.

3. Soli (i one su takođe toksini) koje se stvaraju u zglobovima, izazivaju artritis i osteoporozu.

Kao što vidite, skoro da ne postoji ni jedna ozbiljna bolest, koja nije izazvana toksinima u organizmu.

ALI, đumbir je taj, koji može „spaliti" svo ovo smeće, očistiti organizam, samim time – dovesti ga do zdravlja na prirodan način, odnosno bez bespotrebne hemioterapije, bez bespotrebnih operacija i bez bespotrebnih strogih procedura.

Povratiti zdravlje, dobro raspoloženje, lep ten koži i sjaj u očima pomoći će vam đumbir. Čisti krv, pospešuje varenje i „spaljuje" svo nepotrebno smeće u organizmu, usput i oslobađa suvišnih masnih naslaga.

Đumbir za čišćenje jetre

Za dugoročno i sistematsko čišćenje jetre (posebno u lečenju alkoholizma i posle posledica hemioterapije), koristi se tinktura sa đumbirom.

Boca je zapremine 100 ml.

Upotreba

Tinkturu možete koristiti 3 puta dnevno po 20 kapi, kašikica meda i limun. Na taj način ćete obradovati organizam.`
  },
  {
    id: '14',
    name: 'Tinktura - kopriva',
    price: 600,
    description: 'Tinktura od koprive poboljšava rad probavnog sustava. Sadrži kalcij, kalij, željezo, fosfor, vitamine C i A i organske kiseline. Kopriva je biljka najbogatija željezom. Snažno utječe na organizam i za nju se s pravom može reći da djeluje na cijeli organizam.',
    image: '/BRKINA KOPRIVA.jpg',
    category: 'Tinkture',
    subtitle: '(Urtica dioica), Boca je zapremine 100 ml',
    usage: 'Piti 3 x dnevno po 15 kapi u deci vode, soka ili čaja.',
    benefits: [
      'Izrazito dobra protiv opadanja kose',
      'Prokrvljuje vlasište kose',
      'Kontrolira lučenje sebuma vlasišta',
      'Ojačava korijen kose',
      'Sprječava opadanje kose',
      'Potiče mladu kosu na rast',
      'Poboljšava rad probavnog sustava',
      'Koristi se kod anemije',
      'Utiče na porast crvenih krvnih zrnaca',
      'Ima diuretski efekat',
      'Pomaže kod bolesti urinarnog sistema',
      'Pomaže kod upale bubrega i mokraćnih kanala',
      'Pomaže kod kamena u bubregu',
      'Pomaže kod uvećane prostate',
      'Omogućava pojačano izlučivanje mokraćne kiseline',
      'Koristi se kod gihta',
      'Pomaže kod krvarenja',
      'Pomaže kod čira na želudcu i duodenumu',
      'Pomaže kod pojačanog menstrualnog krvarenja',
      'Pomaže kod hemoroida',
      'Deluje analgetski (protiv bolova)',
      'Savetuje se kod bolova u kičmi i zglobovima',
      'Ima antibakterijsko dejstvo',
      'Ima antivirusno dejstvo',
      'Koristi se kod različitih upalnih procesa',
      'Jedan od najboljih čuvara funkcije jetre',
      'Pomaže u regulaciji nivoa šećera u krvi',
      'Stabiliše mastocite',
      'Sprečava oslobađanje histamina kod alergijskih reakcija'
    ],
    fullDescription: `TINKTURA OD KOPRIVE (Urtica dioica)

Boca je zapremine 100 ml.

Tinktura izrazito dobra protiv opadanja kose.

Prokrvljuje vlasište kose, kontrolira lučenje sebuma vlasišta, ojačava korijen kose, sprječava opadanje i potiče mladu kosu na rast.

Tinktura od Kopriva poboljšava rad probavnog sustava. Sadrži kalcij, kalij, željezo, fosfor, vitamine C i A i organske kiseline. Također, u koprivi se nalaze i flavonoidi koji dobro djeluju na rad organizma.

Kopriva je biljka najbogatija željezom. Snažno utječe na organizam i za nju se s pravom može reći da djeluje na cijeli organizam.

Sastojci: Alkoholni ekstrakt koprive, Urtica dioica, 70% (v/v). Sastojci u dnevnoj dozi (= 60 kapi): odgovara približno 300 mg biljne droge (nadzemni dio biljke).

Upotreba Tinkture od Koprive: Piti 3 x dnevno po 15 kapi u deci vode, soka ili čaja.

Napomena: Čuvati od dohvata male djece. Preporučene dnevne doze ne smiju se preskočiti. Dodatak prehrani nije nadomjestak ili zamjena uravnotežanoj prehrani.

Koristi se kod anemije i utiče na porast crvenih krvnih zrnaca. Tinktura koprive ima diuretski efekat, pomaže kod bolesti urinarnog sistema (upala bubrega i mokraćnih kanala, kamen u bubregu, uvećana prostata).

Omogućava pojačano izlučivanje mokraćne kiseline, pa se koristi kod gihta.

Zbog visokog sadržaja tanina pomaže kod krvarenja (čir na želudcu i duodenumu, pojačano menstrualno krvarenje, hemoroidi).

Deluje analgetski (protiv bolova) pa se savetuje kod bolova u kičmi i zglobovima.

Zbog antibakterijskog i antivirusnog dejstva koristi se kod različitih upalnih procesa.

Kopriva je jedan od najboljih čuvara funkcije jetre.

Svojim uticajem na gušteraču pomaže u regulaciji nivoa šećera u krvi.

Zahvaljujući prisustvu kvercetina, kopriva stabiliše mastocite (ćelije odgovorne za alergijske simptome) i sprečava oslobađanje histamina kod alergijskih reakcija.`
  },
  {
    id: '15',
    name: 'Tinktura - protiv holesterola',
    price: 1500,
    description: 'Biljne kapi za holesterol i trigliceride i visok nivo masti u krvi. Sadrži artičoku, kantarion, petrovac, neven, nana list, hajdučku travu i koren maslačka. Pomaže kod povećanog nivoa triglicerida koji ukazuje na loše funkcionisanje jetre i pankreasa.',
    image: '/TINKTURA povišenog holesterola_0x90.jpg',
    category: 'Tinkture',
    subtitle: 'TINKTURA protiv povišenog holesterola i triglicerida',
    usage: 'Dnevno, do 3 x po 10 kapi u čaj ili na kašičici meda. Boca je zapremine 100 ml.',
    benefits: [
      'Smanjivanje triglicerida u krvi',
      'Smanjivanje holesterola u krvi',
      'Jačanje krvne slike',
      'Povećanja gvožđa u krvi',
      'Poboljšava funkcionisanje jetre',
      'Poboljšava funkcionisanje pankreasa',
      'Sprečava zapušavanje arterija štetnim naslagama',
      'Smanjuje LDL holesterol',
      'Sprečava nagomilavanje naslaga',
      'Pomaže u prevenciji srčanih oboljenja'
    ],
    fullDescription: `TINKTURA protiv povišenog holesterola i triglicerida

Boca je zapremine 100 ml.

Povećani nivo triglicerida ukazuje na loše funkcionisanje jetre i pankreasa, jer trigliceridi su krvne masti i mogu da imaju veliku ulogu u zapušavanju arterija štetnim naslagama. Lekari mnogo brinu o visokom LDL holesterolu, koji ima tendenciju da se pričvrsti na zidove arterija i napravi naslage.

Holesterol supstanca u krvi nalik na vosak predstavlja glavni uzročnik nagomilavanja naslaga i dobijanja srčanih oboljenja.

Sastav

Artičoka, kantarion, petrovac, neven, nana list, hajdučka trava i koren maslačka.

Biljne kapi za holesterol i trigliceride i visok nivo masti u krvi

Preporučuje se za:

• Smanjivanje triglicerida u krvi
• Smanjivanje holesterola u krvi
• Jačanje krvne slike
• Povećanja gvožđa u krvi

Primena

Dnevno, do 3 x po 10 kapi u čaj ili na kašičici meda.`
  },
  {
    id: '16',
    name: 'Tinktura - sikavica',
    price: 1500,
    description: 'Sikavica biljka (Silybum Marianum) je jedan od najboljih regeneratora jetre kojeg nam je priroda dala. Ona ujedno i štiti ovaj organ. Preporučuje se osobama sklonim alkoholizmu i masnoj hrani, i dokazano pomaže kod mamurluka.',
    image: '/TINKTURA  SIKAVICE.jpg',
    category: 'Tinkture',
    subtitle: 'Silybum Marianum, jedan od najboljih regeneratora jetre',
    usage: '4 do 5 puta dnevno po 20 kapi sa vodom, čajem. Kad koristite Sikavicu nemojte konzumirati alkohol. Boca je zapremine 100 ml.',
    benefits: [
      'Najbolji prirodni regenerator jetre',
      'Štiti jetru',
      'Preporučuje se osobama sklonim alkoholizmu',
      'Preporučuje se osobama sklonim masnoj hrani',
      'Pomaže kod mamurluka',
      'Jača organizam',
      'Regulira probavu',
      'Pomaže kod zatvora',
      'Zaustavlja krvarenja',
      'Jača krvne žile'
    ],
    fullDescription: `SIKAVICA BILJKA JE NAJBOLJI PRIRODNI REGENERATOR JETRE

Sikavica biljka ima latinski naziv Silybum Marianum, jedan je od najboljih regeneratora jetre kojeg nam je priroda dala. Ona ujedno i štiti ovaj organ i teško joj neki drugi preparat može stati na crtu, da se tako izrazimo.

Drugi nazivi koji se koriste na Balkanu za nju su gospin trn, gospina trava, badelj, osljebad, oslobod, beli stričak, šareni čkalj, šarena badeljka i divlja artičoka.

Sikavica se preporučuje osobama sklonim alkoholizmu i masnoj hrani, i dokazano pomaže kod mamurluka.

Ova biljka jača organizam, regulira probavu i pomaže kod zatvora.

Ova biljka zaustavlja krvarenja i jača krvne žile.

Upotreba

4 do 5 puta dnevno po 20 kapi sa vodom, čajem.

Kad koristite Sikavicu nemojte konzumirati alkohol.

Boca je zapremine 100 ml.`
  },
  {
    id: '17',
    name: 'Tinktura za cirkulaciju',
    price: 1500,
    description: 'Tinktura za cirkulaciju poboljšava cirkulaciju i rad srca, otklanja bol, zaustavlja krvarenje, vrlo je efikasna protiv infekcija. Ljuta aleva paprika je neprikosnovena u poboljšavanju protoka i strujenja krvi kroz organizam, u kombinaciji sa belim lukom ima još efektivnije dejstvo.',
    image: '/BRKINA TINKTURA ZA CIRKULACIJU  2 CVET.jpg',
    category: 'Tinkture',
    subtitle: 'Tinktura za cirkulaciju',
    usage: 'Jedna čajna kašičica tri puta dnevno. Kod težih oboljenja 60 kapi 6-8 puta dnevno. Najčešće se pije 60 kapi pet puta na dan. Može se piti sa vodom, sokom ili mlakim čajem. Promuckati pre upotrebe. Boca je zapremine 100 ml.',
    benefits: [
      'Poboljšava cirkulaciju',
      'Poboljšava rad srca',
      'Otklanja bol',
      'Zaustavlja krvarenje',
      'Vrlo efikasna protiv infekcija',
      'Poboljšava protok i strujenje krvi kroz organizam',
      'Sadrži ljutu alevu papriku',
      'Sadrži beli luk za sinergijsko dejstvo',
      'Nema nuspojave i neželjene efekte',
      'Potpuno prirodan ekstrahovano bilje'
    ],
    fullDescription: `Tinktura za cirkulaciju

Poboljšava cirkulaciju i rad srca, otklanja bol, zaustavlja krvarenje, protiv infekcija.

NAČIN UPOTREBE:

Jedna čajna kašičica tri puta dnevno. Kod težih oboljenja 60 kapi 6-8 puta dnevno. Najčešće se pije 60 kapi pet puta na dan - doze mogu da se povećavaju u zavisnosti od konkretnog stanja pacijenta što je relativna stvar koja se razlikuje od slučaja do slučaja, ne postoje nikakve nuspojave i neželjeni efekti jer se radi o potpuno prirodnom ekstrahovano bilju koje i u najvećim količinama ne može da šteti.

Može se piti sa vodom, sokom ili mlakim čajem, promuckati pre upotrebe. Kada je pacijent na postu od prirodnih ceđenih sokova najefikasnije je ukapati je u sok.

Spada u set osnovnih tinktura koje se piju kod svakog zdravstvenog problema, jer treba da pojačamo cirkulaciju i dotok sveže krvi, koja rešava problem na obolelom mestu, snabdevajući je putem prirodnih ceđenih sokova (prirodne infuzije) svim potrebnim mineralima, vitaminima, fitohemikalijama i ostalim vitalnim sastojcima koji se bore protiv bolesti i podižu opšte stanje našeg organizma i samim tim doprinose prirodnom čišćenju i izlečenju.

Poboljšava cirkulaciju i rad srca, otklanja bol, zaustavlja krvarenje, vrlo je efikasna protiv infekcija.

Ljuta aleva paprika je neprikosnovena u poboljšavanju protoka i strujenja krvi kroz organizam, u kombinaciji sa belim lukom ima još efektivnije dejstvo (između ostalog zbog toga se i praktikuje korišćenje set-paketa osnovnih tinktura koje jedna drugu nadopunjuju i ostvaruju jače sinergijsko dejstvo i efekat prilikom lečenja).

ČUVANJE

Na sobnoj temperaturi, na tamnom mestu, van domašaja dece.

Boca je zapremine 100 ml.`
  },
  {
    id: '18',
    name: 'Tinktura za menopauzu',
    price: 1500,
    description: 'Tinktura za menopauzu pomaže u ublažavanju simptoma menopauze i hormonalnoj ravnoteži.',
    image: '/TINKTURA MENOPAUZA.jpg',
    category: 'Tinkture'
  },
  {
    id: '19',
    name: 'Brka za dobar sex',
    price: 1500,
    description: 'Tinktura za dobar seks - prirodno rešenje za poboljšanje seksualne funkcije i vitalnosti.',
    image: '/BRKA ZA DOBAR SEX etiketa.jpg',
    category: 'Tinkture',
    subtitle: 'Tinktura za dobar seks'
  },
  {
    id: '20',
    name: 'Tinktura - glog',
    price: 1500,
    description: 'Glog je najlekovitija biljka na svetu, snažan lek za srce. Uspešno sprečava infarkt, pomaže kod visokog pritiska, zaštićuje od povišenog holesterola i ateroskleroze. Ima široku korist za održavanje zdravlja krvnih sudova, kod slabljenja srčanog mišića i srčane aritmije.',
    image: '/TINKTURA GLOGA.jpg',
    category: 'Tinkture',
    subtitle: 'Najlekovitija biljka na svetu, Boca je zapremine 100 ml.',
    usage: '3 do 4 puta dnevno po 15 kapi. Boca je zapremine 100 ml.',
    benefits: [
      'Snažan lek za srce',
      'Uspešno sprečava infarkt',
      'Pomaže kod visokog pritiska',
      'Zaštita od povišenog holesterola',
      'Zaštita od ateroskleroze',
      'Održavanje zdravlja krvnih sudova',
      'Pomaže kod slabljenja srčanog mišića',
      'Pomaže kod srčane aritmije',
      'Povećava cirkulaciju krvnih sudova',
      'Preporučuje se nakon srčanog udara',
      'Jača smirujući učinak',
      'Pomaže kod umora i manjka energije',
      'Pomaže kod lošeg sna',
      'Pomaže kod teškog disanja',
      'Pomaže kod vrtoglavica',
      'Pomaže kod lupanja srca',
      'Pomaže kod nervoze',
      'Pomaže kod šuma u ušima',
      'Vredan u menopauzi',
      'Pomaže kod mršavljenja',
      'Potstiče izbacivanje viška vode',
      'Pomaže kod celulita i edema',
      'Pomaže kod bolesti zglobova',
      'Jača vezivno tkivo na zglobovima',
      'Antiupalno delovanje',
      'Kod ulcerativnog kolitisa',
      'Kod probavnih problema',
      'Štiti od slobodnih radikala',
      'Sprečava arteriosklerozu'
    ],
    fullDescription: `GLOG: najlekovitija biljka na svetu

Boca je zapremine 100 ml.

Glog je jedna od biljaka s najstarijom tradicijom uzgoja i upotrebe.

Kinezi su nekad od njega radili fermentirano piće, a njegovi ostaci pronađeni su u 9.000 godina starim lončanicama.

Smatra se da je već tada bio značajan u religiji.

Legenda kaže da je od ovog grma napravljena Hristova kruna od trnja.

Uz njega se vežu i mnoga druga verovanja, čak i mitovi poput onog o vampirima.

Glog je nekada rastao samo u Eropi, Aziji i Severnoj Americi te na Mediteranu, dok danas je proširen po čitavom svetu.

Poznat je i pod nazivima bela drača, beli trn, glogić, glogovac, glogovina, oštri trn, trnka, žetica, glagovna glog, gloginja, medvedove hruške.

Snažan lek za srce

Glog sadrži aktivne supstance s antioksidativnim delovanjem. U cvetovima se, uz nešto eteričnog ulja, nalaze lekovite i delotvorne supstance trimetil-amin i glikozid-oksiakantin.

Plodovi sadrže eterično ulje, tanin, saponin, glikozide i fruktozu te u znatnim količinama kalij, natrij, kalcij i soli fosforne kiseline.

Nakon uvrštavanja tinkture svežih plodova gloga u homeopatsku knjigu Wilmara Schwabea, on je postao popularna biljka i predmet mnogih istraživanja.

Ta istraživanja su potvrdila da je glog izuzetno vredan lek za srce.

Naučnici su zaključili da glog, između ostaloga, uspešno sprečava bolest modernog doba - infarkt.

Svi oni koji imaju problem s visokim pritiskom ili se žele zaštititi od povišenog holesterola i od ateroskleroze mogu se lečiti tinkturom gloga.

Ova biljka ima široku korist za održavanje zdravlja krvnih sudova, kod visokog pritiska, slabljenja srčanog mišića i srčane aritmije.

Glog je prihvaćen kao sredstvo za snažan i uspešan tretman ranih faza srčanih bolesti te kao delotvorna terapija kod bolesti koje su uzele maha.

Preporučuje se nakon srčanog udara, budući da povećava cirkulaciju krvnih sudova koje snabdevaju srčani mišić.

Pospešuje aktivnost i bolju snabdevenost srčanog mišića. Svako bi iznad 50 godina trebao povremeno uzimati tinkturu gloga.

Glog je jedna od biljaka s najjačim smirujućim učinkom.

Pomaže kod umora, manjka energije, lošeg sna, teškog disanja, vrtoglavica, lupanja srca, nervoze i šuma u ušima.

Vredan je i u menopauzi.

Može se koristiti kao pomoć kod mršavljenja jer potstiče izbacivanje viška vode iz organizma.

To ga svojstvo čini korisnim i kod celulita, edema i bolesti zglobova.

Glog jača vezivno tkivo na zglobovima, a zbog antiupalnog delovanja savetuje se kod ulcerativnog kolitisa i probavnih problema.

Štiti od delovanja slobodnih radikala i sprečava bolesti krvnih sudova poput arterioskleroze.

Brojne studije o glogu ustanovile su da je on sigurna i dobro podnošljiva biljka.

Međutim, glog se ne preporučuje trudnicama i dojiljama.

Upotreba

3 do 4 puta dnevno po 15 kapi.`
  },
];
