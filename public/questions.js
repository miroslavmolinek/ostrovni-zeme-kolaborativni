personas = [
    {   name : 'Matěj',
        obrazekUrl : '',
        text : 'Jsi mladý předseda politické strany, která je v parlamentu v opozici a otevřeně se hlásíš ke své homosexualitě. Pocházíš z bohatší rodiny, která na jihu ostrova podniká v zemědělství a potravinářství. '},
    {   name : 'Nina', 
        obrazekUrl : '',
        text : 'Jsi mladá žena, která aktivně ve veřejném prostoru hájí práva žen. Pracuješ v organizaci, která pomáhá ženám zažívající domácí násilí. Většinu rodiny máš v zahraničí, žiješ v hlavním městě ostrova a užíváš si všech jeho možností.'},
    {   name : 'Kristián', 
        obrazekUrl : '',
        text : 'Jsi 50letý muž. Dvanáct let jsi žil na ulici, kam ses dostal po vyhazovu z práce a těžkém rozvodu. Kvůli drobným krádežím jsi byl i ve vězení. Nyní jsi členem organizace, která se snaží vyřešit otázku bezdomovectví na ostrově.'},
    {   name : 'Andrea', 
        obrazekUrl : '',
        text : 'Jsi žena, hrdá Romka a patříš k chudším lidem na ostrově. Se svým životem jsi spokojená, dokud tvá rodina, především prarodiče, je v pořádku'}
]



questions=
[
    {   
        questionText:"1.Skupina občanů často kritizuje rozhodnutí právoplatně zvolené Rady ostrova. To zpomaluje a komplikuje výkon vašich rozhodnutí. Tito občané založili politickou skupinu a získávají si na ostrově stále více příznivců.",

        questionOptions: 

        [

            {   optionText:"Ponecháte záležitosti volný vývoj s tím, že skupinu omezíte pouze v případě, že začne vystupovat proti právům jiných lidí.",

                optionLaw:"JE ZARUČNA SVOBODA PROJEVU A POLITICKÉHO SDRUŽOVÁNÍ.",

                optionPersonas: 

                [

                    {   personaName:"predseda", 

                        personaText:"Ve svobodných volbých jste se svým programem oslovili velkou většinu občanů. Tyto zatím poslední volby jste sice nevyhráli, ale ty ses stal předsedou nejsilnějí opoziční strany."

                    },

                    {   personaName:"feministka", 

                        personaText:"Jsi ráda, že existuje více politických stran a že se politici musí za to co dělají zodpovídat voličům. Budeš rozhodně podporovat stranu, které respektují ženy i muže stejně. A to i v politice."

                    },

                    {   personaName:"byvaly bezdomovec", 

                        personaText:"Po nových volbách se ujala vlády strana, která vyslyšela volání vaší organizace a přijala zákony, které pomáhají lidem bez domova začít nový život."

                    },

                    {   personaName:"Romka", 

                        personaText:"O politiku ses nikdy moc nezajímala, ale říkáš si, že je asi dobré, že je povoleno více politických stran a že se politici musí za to co dělají zodpovídat voličům."

                    }

                ]

            },

            {   optionText:"Zakážete činnost této skupiny a uvězníte lidi, kteří nebudou vaše rozhodnutí respektovat.",

                optionLaw:"JSOU ZAKÁZÁNY VŠECHNY POLITICKÉ SKUPINY KROMĚ TÉ VLÁDNOUCÍ.",

                optionPersonas: 

                [

                    {   personaName:"predseda", 

                        personaText:"Omezování jiných stran než té jedné vládnoucí začalo šikanou od úřadů, vyšetřováním financování strany. A nyní jsi obviněn z protistátní činnosti, řada tvých kolegů je ve vězení a tvá strana je zakázána."

                    },

                    {   personaName:"feministka", 

                        personaText:"Vždy ti byla sympatická Demokratická strana ostrova (DSO), která dbala na rovné příležitosti pro ženy i muže. Po zákazu všech stran je nemožné, aby se dostala do parlamentu a něco tím pádem změnila. "

                    }, 

                    {   personaName:"byvaly bezdomovec", 

                        personaText:"Vládnoucí strana omezovala a nakonec zakázala všechny ostatní strany. Řada lidí z opoziční strany, která se s vaší organizací radila, je ve vězení. Není šance, že by změnil život lidí bez domova tak, jak jsi chtěl."

                    },

                    {   personaName:"Romka",

                        personaText:"Ráda bys nějak podpořila stranu, která bojuje za rovná práva Romů, ale to vládní strana není a ostatní strany nemůžou existovat."

                    }

                ]

            },

            {   optionText:"Necháte skupinu formálně fungovat, ale zamezíte její účasti v příštích volbách do Rady ostrova.",

                optionLaw:"FUNGOVÁNÍ JINÝCH POLITICKÝCH SKUPIN JE JEN FORMÁLNÍ. V TĚCHTO SKUPINÁCH SE SMĚJÍ OBČANÉ SDRUŽOVAT, ALE NEMAJÍ ŠANCI REÁLNĚ SE ÚČASTNIT VOLEB.",

                optionPersonas:

                [

                    {   personaName:"predseda",

                        personaText:"Proti vaší vůli a prostestům byl přijat zákon omezující financování naší strany a pak nám bylo znemožněno abychom vůbec kandidovali v příštích volbách. "

                    },

                    {   personaName:"feministka",

                        personaText:"Vždy ti byla sympatická Demokratická strana ostrova (DSO), která dbala na rovné přílěžitosti pro ženy i muže. Teď po nemožnosti jiných stran kandidovat do parlamentu jsou šance na změnu v postavení žen mizivé."

                    },

                    {   personaName:"byvaly bezdomovec",

                        personaText:"Vládnoucí strana omezila opozici a nakonec jim zakázala kandidovat v příštích volbách. S opoziční stranou spolupracovala i tvá organizace. Šance, že vládnoucí strana vyslyší vaše požadavky ohledně lidí bez domova, je prakticky nulová."

                    },

                    {   personaName:"Romka",

                        personaText:"Ráda bys nějak podpořila stranu, která bojuje za rovná práva Romů, ale to vládní strana není a ostatní strany existují jen formálně."

                    }

                ]

            }



        ]

    },
    {   questionText:"2. Z jiného ostrova připlulo asi 500 lidí. Někteří utíkají před diktátorským režimem a válkou. Jiní hledají lepší podmínky pro život. Všechny ale spojují jiné zvyky a přicházejí bez prostředků.",
        questionOptions:
        [
            {   optionText:"Přijmete všechny bez rozlišení, komu opravdu hrozí nebezpečí a dovolíte jim, aby s vámi žili na ostrově.",
                optionLaw:"PŘIJÍMÁTE A MATERIÁLNĚ PODPORUJETE VŠECHNY PŘÍCHOZÍ NA VÁŠ OSTROV.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Trvalo dlouhé roky, než na ostrov přišla zpráva o dalších přeživších. Souhlasil jsi s materiální pomocí všem příchozím lidem bez rozlišování důvodů. Následovali tak další a další lidi, kteří přicházeli s vidinou snadnějšího života. To tě může stát funkci předsedy strany."
                    },
                    {   personaName:"feministka",
                        personaText:"Trvalo dlouhé roky, než na ostrov přišla zpráva o dalších přeživších. Když s nimi přijela loď s migranty k ostrovu, byli mezi nimi i dva tví bratranci. Byla jsi hrdá, že tvá země má zákon, který takto pomáhá potřebným. O bratrance jste se s rodiči postarali."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Dokážeš se vcítit do situace lidí, co opustili svůj domov, protože jsou to taky vlastně bezdomovci. Tvoje organizace pomáhá se zajištěním jejich základních potřeb."
                    },
                    {   personaName:"Romka",
                        personaText:"Máš strach z hromady nově příchozích lidí. Vláda se asi zbláznila nikoho z nich je neprověřit a pustit je sem všechny.  Ve zprávách říkali, že konflikt, ze kterého utíkají je strašně nepřehledný, mohli mezi nimi být teroristé nebo sem přinést nemoci."
                    }          
                ]
            },
            {   optionText:"Odmítnete je všechny s tím, aby pokračovali v cestě.",
                optionLaw:"ODMÍTÁTE VŠECHNY, VČETNĚ TĚCH, KTEŘÍ UTÍKAJÍ Z VÁLKY A HROZÍ JIM PRONÁSLEDOVÁNÍ.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Trvalo dlouhé roky, než na ostrov přišla zpráva o dalších přeživších. Zákony však odmítají všechny migranty. Nesouhlasil si. Navrhl jsi nový zákon, který by umožnil pomoci aspoň těm, kterým hrozí nebezpečí při návratu. Tím strana ztratila část voličů, kteří se cizinců báli."
                    },
                    {   personaName:"feministka",
                        personaText:"Trvalo dlouhé roky, než na ostrov přišla zpráva o dalších přeživších. Když s nimi přijela loď s migranty k ostrovu, byli mezi nimi i dva tví bratranci. Byla jsi zoufalá, když ses dozvěděla, že tvá zěmě odmítá kohokoli vpustit. Od doby, co odpluli o nich nemáš žádnou zprávu."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Dokážeš se vcítit do situace uprchlíků, protože jsou to taky vlastně bezdomovci. Je ti líto, že nemůžeš pomoct lidem v nouzi, protože tobě taky kdysi jeden člověk pomohl, když jsi to nejvíc potřeboval."
                    },
                    {   personaName:"Romka",
                        personaText:"Cítíš úlevu, aspoň jednou se podle tebe vláda zachovala správně a odvážně. Pro cizí lidi na ostrově není místo. Ve zprávách říkali, že konflikt, ze kterého utíkají je strašně nepřehledný, mohli mezi nimi být teroristé nebo sem přinést nemoci."
                    }
                ]    
            }, 
            {   optionText:"Přimete pouze ty běžence, kteří prokáží, že jim v jejich vlasti opravdu hrozí vážné nebezpečí.",
                optionLaw:"POMOC A PŘIJETÍ LIDÍ SE POSUZUJE U KAŽDÉHO ZVLÁŠŤ PODLE ZÁVAŽNOSTI DŮVODŮ JEJICH ÚTĚKU.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Trvalo dlouhé roky, než na ostrov přišla zpráva o dalších přeživších. Někteří se rozhodli přijet do tvé země, zde se jim však dostalo špatného zacházení. V Radě ses snažil prosadit důstojnější zacházení s nimi. Tím strana ztratila část voličů, kteří se cizinců báli."
                    },
                    {   personaName:"feministka",
                        personaText:"Trvalo dlouhé roky, než na ostrov přišla zpráva o dalších přeživších mezi nimi i tví bratranci. Těm v jejich zemi hrozí smrt. Byla jsi šťasná když jsi je viděla na lodi spolu s dalšími migranty. Víš, že nyní jsou v bezpečí, protože platí zákon, který pomáhá pronásledovaným."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Dokážeš se vcítit do situace uprchlíků, protože jsou to taky vlastně bezdomovci. Tvoje organizace pomáhá se zajištěním jejich základních potřeb."
                    },
                    {   personaName:"Romka",
                        personaText:"Jsi sice ráda, že vláda na ostrov pustila nově příchozí lidi a všechny důkladě prověřuje, ale i tak se bojíš.  Ve zprávách říkali, že konflikt, ze kterého utíkají je strašně nepřehledný, mohou mezi nimi být teroristé nebo sem přinést nemoci."
                    }
                ]
            }    
        ]
    },
    {   questionText:"3.Jedna dvacetiletá dívka se u úřadů dovolává pomoci, protože jí rodina zakazuje sňatek, pro který se rozhodla a hrozí jí vyhnáním z domu. Tradice, k níž se její rodina hlásí, přikazuje, že výběr životního partnera závisí na rozhodnutí rodičů.",
        questionOptions:
        [
            {   optionText:"Nebudete dívce pomáhat, protože jde o soukromou záležitost.",
                optionLaw:"ÚŘADY NIJAK NEZASAHUJÍ DO RODINNÉHO ŽIVOTA.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:" Tvá strana hlásí, že rodinný a soukromý život je nedotknutelný. Jsi rád, že zásadově hájíte svobodu. Stát prostě nesmí zasahovat do soukromých záležitostí."
                    },
                    {   personaName:"feministka",
                        personaText:"Všichni tě znají jako aktivistku za práva žen, včetně boje proti nuceným sňatkům. Málokdo ale ví, že jednou z takových dívek byla i tvá matka, donucená vzít si člověka, kterého neznala a který vás obě bil."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Když jsi žil na ulici, seznámil ses s mladou dívkou, kterou rodiče vyhnali z domu a ona přespávala venku. Velmi brzy začala brát drogy a skončila špatně. Máš její proměnu pořád před očima."
                    },
                    {   personaName:"Romka",
                        personaText:"Nechápeš, proč stát nezasahuje do soukromých záležitostí rodin. Když ti bylo 18 let, zamilovala ses, ale rodiče byli striktně proti. Zavřeli tě doma a nakonec ti domluvili sňatek výhodný pro rodinu - celý život jsi kvůli tomu nešťastná."
                    }          
                ]
            },
            {   optionText:"Zakážete tradici týkající se výběru partnerů rodiči a budete postihovat její dodržování.",
                optionLaw:"JSOU ZAKÁZÁNY NUCENÉ SŇATKY A DODRŽOVÁNÍ TRADIC (JAKO JE VÝBĚR PARTNERA RODIČI) JE TRESTÁNO.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"V otázce rozhodování o sňatku vaše strana se neodváží jít proti svým voličům. Drží tedy postoj, že stát prostě nesmí zasahovat do rodinného života."
                    },
                    {   personaName:"feministka",
                        personaText:"Všichni tě znají jako aktivistku za práva žen, včetně boje proti nuceným sňatkům. Málokdo ale ví, že jednou z takových dívek byla i tvá matka, donucená vzít si člověka, kterého neznala a který vás obě bil."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Při své práci málokdy střetáváš mladé dívky. Jseš rád, že stát se stará, umíš si představit, jak by skončila mladá dívka, kdyby ji rodiče vyhodili z domu a žila by na ulici."
                    },
                    {   personaName:"Romka",
                        personaText:"Zasnoubila ses a vzpomínáš, že že si dávno mohla být nešťastně vdaná. Když ti bylo 18 let rodiče ti domluvili sňatek proti tvé vůli. Obrátila ses nakonec na úřady, které se tě zastaly a pomohly, protože nucené sňatky jsou přísně trestány."
                    }
                ]    
           }, 
           {    optionText:" Z veřejných zdrojů dívce zajistíte dočasné bydlení, aby mohla realizovat své rozhodnutí a pokusíte se zprostředkovat dialog s její rodinou.",
                optionLaw:"JSOU RESPEKTOVÁNY KULTURNÍ TRADICE, ALE JE POSKYTOVÁNA PODPORA JEDINCŮM, KTEŘÍ NESOU NEGATIVNÍ NÁSLEDKY JEJICH NEDODRŽENÍ.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:" Tvá strana hlásí, že rodinný a soukromý život je nedotknutelný. Jsi rád, že zásadově hájíte svobodu. Stát prostě nesmí zasahovat do soukromých záležitostí. "
                    },
                    {   personaName:"feministka",
                        personaText:"Všichni tě znají jako aktivistku za práva žen, včetně boje proti nuceným sňatkům. Málokdo ale ví, že jednou z takových dívek byla i tvá matka, donucená vzít si člověka, kterého neznala a který vás obě bil."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Při své práci málokdy střetáváš mladé dívky. Jseš rád, že stát se stará, umíš si představit, jak by skončila mladá dívka, kdyby ji rodiče vyhodili z domu a žila by na ulici."
                    },
                    {   personaName:"Romka",
                        personaText:"Zasnoubila ses a vzpomínáš, že si dávno mohla být nešťastně vdaná. Když ti bylo 18 let rodiče ti domluvili sňatek proti tvé vůli. Obrátila ses nakonec na úřady, které ti zprostředkovali prostředníka a nakonec se ti podařilo s rodiči domluvit. Našli jste cestu, jak komunikovat."
                    }
                ]
            }    
        ]
    },
    {   questionText:"4. Skupina občanů veřejně prezentuje svůj názor, že určité etnické a sexuální menšiny podrývají pořádek a dobrou morálku na ostrově. Tato skupina otevřeně usiluje o omezení některých práv členů menšin.",
        questionOptions:
        [
            {   optionText:"Budete činnost této skupiny ignorovat.",
                optionLaw:"NEVĚNUJE SE POZORNOST PŮSOBENÍ SKUPIN, KTERÉ USILUJÍ O POTLAČENÍ PRÁV PŘÍSLUŠNÍKŮ MENŠIN.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Poslední měsíce dostáváš dopisy, které vyzdvihují tvou homosexualitu a vyhrožují smrtí. Na ulici tě i zmlátili. Policie ale všechny tvé podněty ignoruje. Ze strachu možná z politiky odejdeš. "
                    },
                    {   personaName:"feministka",
                        personaText:"Přijde ti nepřijatelné, že jedno z hnutí v zemi prosazuje, aby určité skupiny žen podstoupily zákrok, aby nemohly mít nikdy děti. Stát ale nemá zákony proti takové činnosti a hnutí stále sílí. "
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Jedna ze skupin prosazuje beztrestné násilí na lidech bez domova, prý že tím pomáhají ostrovu zbavit se přítěže. Tato skupina je čím dál populárnější. Každý den se stane, že někdo zkope bezdomovce, jen tak pro zábavu. Došlo už i k několika případům zabití."
                    },
                    {   personaName:"Romka",
                        personaText:"Jako Romka máš strach, kam povede stále oblíbenější hnutí proti právům menšin. Co když tato skupina nakonec získá skutečnou moc? Co když začne vytvářet koncentráky pro Romy tak? Už teď cítíš nenávist od ostatních lidí kvůli své barvě pleti."
                    }          
                ]
            },
            {   optionText:"Necháte občany hlasovat o schválení návrhu na omezení práv menšin a rozhodnete se podle výsledku hlasování.",
                optionLaw:"O OMEZOVÁNÍ PRÁV PŘÍSLUŠNÍKŮ MENŠIN SE ROZHODUJE VE VŠEOBECNÉM HLASOVÁNÍ.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Ve všeobecném hlasování se rozhodlo o omezení práv všech menšin. V zápětí dostáváš dopisy, které ti pro tvou homosexualitu vyhrožují smrtí. Policie ale všechny tvé podněty ignoruje. Ze strachu o svůj život možná z politiky odejdeš."
                    },
                    {   personaName:"feministka",
                        personaText:"Ve všeobecném hlasování se rozhodlo, že určité skupiny žen podstoupí zákrok, aby nemohly mít nikdy děti. To ti přijde jako zlý sen. Stát ale neměl a nemá zákony proti takovým návrhům zakročit."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Ve všeobecném hlasování se rozhodlo o omezení práv všech menšin, včetně lidí bez domova. Nemohou například volit ve volbách, nemohou požádat o finanční pomoc, jsou to občané druhé kategorie."
                    },
                    {   personaName:"Romka",
                        personaText:"Jako Romka máš strach, kam povede stále oblíbenější hnutí proti právům menšin. Co když tato skupina přesvědčí lidi, aby ve všeobecném hlasování rozhodli o vytvoření koncentráků pro Romy? Máš strach, protože už teď cítíš nenávist od ostatních lidí kvůli své barvě pleti."
                    }
                ]    
            }, 
            {   optionText:"Zakážete činnost této skupiny a budete trestat veřejné prosazování podobných nenávistných a diskriminačních opatření.",
                optionLaw:"PROSAZOVÁNÍ OMEZOVÁNÍ PRÁV PŘÍSLUŠNÍKŮ MENŠIN JE ZAKÁZÁNO A TRESTÁNO.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Jako známý politik, který se netají svou homosexualitou to nemáš lehké, ale víš že když by někdo chtěl tvý práva omezit, policie zasáhne. Jako když zaktla muže, co ti vyhrožoval smrtí."
                    },
                    {   personaName:"feministka",
                        personaText:"Jedno z hnutí začalo prosazovat, aby určité skupiny žen podstoupily zákrok, aby nemohly mít nikdy děti. Zákony ostrova naštěstí dávají úřadům možnost potlačit tyto nezákonné snahy a hnutí zakázaly."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Lidi bez domova jsou také menšina. Naštěstí může tvoje organizace existovat a můžete bojovat za práva lidí bez domova."
                    },
                    {   personaName:"Romka",
                        personaText:"Nestydíš za svůj původ a jinou barvu pleti. Díky zákonu chránící práva všech, tvá práva jsou stejná jako má většinová společnost.Cítíš se bezpečně a důstojně, máš jistotu, že stát tě ochrání."
                    }
                ]
            }    
        ]
    },
    {   questionText:"5. Několik rodin se chce odstěhovat za prací do jiné části ostrova mimo hlavní město. Tak velká vzdálenost by zkomplikovala a prodražila dohled úřadů nad jejich činností.",
        questionOptions:
        [
            {   optionText:"Zakážete lidem z hlavního města volně se stěhovat po ostrově.",
                optionLaw:"JE ZAKÁZÁNO STĚHOVAT SE Z HLAVNÍHO MĚSTA.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Jako strana usilujete o zrušení přežitého zákazu volného pohybu. S bratrem máte navíc na jihu ostrova prosperující zemědelskou výrobu a zákaz vám komplikuje získávání nových pracovníků a rozvoj byznysu."
                    },
                    {   personaName:"feministka",
                        personaText:"Celý život žiješ v hlavním městě, zákaz přestěhování se do jiných částí ostrova se tě nijak nedotýká. Ze své práce ale víš o ženách, které chtěly utéct před násilnými manžely na venkov k příbuzným, ale nemohly."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Když jsi byl bezdomovcem už několik let, chtěl ses přestěhovat na venkov, kde by sis mohl pěstovat vlastní jídlo a začít nový život. To není možné, ve městě bylo velmi těžké najít práci a začít znovu."
                    },
                    {   personaName:"Romka",
                        personaText:"Trápí tě astma a lékař ti dopuručil vyhnout se smogu hlavního města. Chtěla jsi se proto s rodinou přestěhovat na venkov, ale to je zakázáno. "
                    }          
                ]
            },
            {   optionText:"Umožníte volné stěhování obyvatel.",
                optionLaw:"JE ZARUČNA SVOBODA POHYBU A MOŽNOST STĚHOVÁNÍ.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Jelikož jako strana chcete podpořit mladé rodiny v osidlování úrodných regionů na jihu, jsi rád, že máte zákony, které nijak nekomplikují volný pohyb lidí."
                    },
                    {   personaName:"feministka",
                        personaText:"Od malička žiješ v hlavním městě ostrova. Jsi ráda, že se kdykoliv můžeš přestěhovat do jiných částí ostrova, stát ti v tom nezabrání."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Když jsi byl bezdomovcem už několik let, rozhodl ses odstěhovat na venkov, kde jsi začal pěstovat a pak i prodávat zeleninu. Díky tomu ses dostal z ulice a dnes pomáháš dalším lidem bez domova."
                    },
                    {   personaName:"Romka",
                        personaText:"Trápí tě astma a na doporučení lékaře ses odstěhova se svou rodinou  na venkov, bez žádných omezení ze strany státu. Čistý vzduch venkova ti svědčí."
                    }
                ]    
            }, 
            {   optionText:"Povolení ke stěhování bude podmíněno zaplacením vysokého poplatku a bude záviset na rozhodnutí úřadu.",
                optionLaw:"STĚHOVÁNÍ OBYVATEL ZÁVISÍ NA ROZHODNUTÍ ÚŘADŮ A JE PODMÍNĚNO UHRAZENÍM POPLATKU.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Jako strana usilujete o zrušení přežitých poplatků za přestěhování se. S bratrem máte navíc na jihu ostrova prosperující zemědelskou výrobu a poplatky vám komplikují získávání nových pracovníků a rozvoj byznysu."
                    },
                    {   personaName:"feministka",
                        personaText:"Od malička žiješ v hlavním městě ostrova, omezování přestěhování se do jiných částí ostrova se tě nijak nedotýká. Ze své práce ale znáš ženy, které chtěly utéct před násilnými manžely na venkov k příbuzným, ale úředníci jim to zakázali."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Když jsi byl bezdomovcem už několik let, chtěl ses přestěhovat na venkov, kde by sis mohl pěstovat vlastní jídlo a začít nový život. Na to jsi ale neměl peníze. Musel jsi musel zůstat ve městě, kde bylo mnohem náročnější dostat se z ulice."
                    },
                    {   personaName:"Romka",
                        personaText:"Trápí tě astma a lékař ti dopuručil vyhnout se smogu hlavního města. Chtěla si se s rodinou přestěhovat na vekov, o čemž musel rozhodnout úředník. Narazili jste na úředníka, který přiznal, že nesnáší Romy a povolení vám nedal."
                    }
                ]
            }    
        ]
    },
    {   questionText:" 6. V současné Radě ostrova je vznesen názor, že efektivní rozvoj země je možný jen tehdy, budou-li ít volební právo pouze kvalitní voliči. ",
        questionOptions:
        [
            {   optionText:"Poskytnete volební právo všem dospělým lidem, každý hlas bude mít stejnou váhu.",
                optionLaw:"JE UZÁKONĚNO VŠEOBECNÉ A ROVNÉ HLASOVACÍ PRÁVO.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Dobře víš, že většina tvých voličů je mezi vzdělanějšími a zabezpečenějšími muži. Ale všeobecné a rovné hlasovací právo respektuješ a nechceš jej měnit."
                    },
                    {   personaName:"feministka",
                        personaText:"Chodíš ke každým volbám, jsi ráda, že všichni mohou svým hlasem vyjádřit svůj názor na život na ostrově. "
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Volební právo mají i lidi bez domova. Mohl jsi i jako bezdomovec jít k volbám a volit stranu, která chce toto téma řešit. A tím mít naději na lepší budoucnost."
                    },
                    {   personaName:"Romka",
                        personaText:"Jsi romského původu, ale na ostrově existuje všeobecné pracovní právo, takže máš právo volit jako kdokoliv jiný."
                    }          
                ]
            },
            {   optionText:"Volební právo dostanou všichni dospělí pracující muži.",
                optionLaw:"PRÁVO VOLIT MAJÍ POUZE DOSPĚLÍ PRACUJÍCÍ MUŽI.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Věříš, že díky omezení volebního práva v příštích volbách zvítězíš. Většina voličů tvé strany je mezi vzdělanějšími a zabezpečenějšími muži v produktivním věku. "
                    },
                    {   personaName:"feministka",
                        personaText:"Sama jsi vzdělaná a pracuješ. Zákon přiznávající možnost volit jen mužům považuješ za skandální. Snažíš se svou organizací o změnu, ale cítíš, jak narážíte na předsudky."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Jako bezdomovec jsi neměl práci, takže ani volební právo. Nemohl jsi tím pádem volit stranu, která chtěla téma bezdomovectví řešit."
                    },
                    {   personaName:"Romka",
                        personaText:"Jako žena nemáš právo volit, to je diskriminující. Chceš mít právo rozhodovat jako kdykoliv jiný. Cítíš se méněcenně, jednak kvůli původu a také kvůli tomu, že jsi žena."
                    }
                ]    
            }, 
            {   optionText:"Právo volit bude udělovat současná Rada ostrova na základě vlastního rozhodnutí lidem, kteří o to požádají.",
                optionLaw:"O PŘIDĚLENÍ VOLEBNÍHO PRÁVA JEDNOTLIVÝM OBČANŮM ROZHODUJE RADA OSTROVA.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:" S přidělováním volebních práv víš, že jste jako opoziční strana nahraní. Šance, že by se přidělilo volební právo všem tvým voličům je nulová. "
                    },
                    {   personaName:"feministka",
                        personaText:"Sama jsi volební právo dostala již v 19 letech. Ze statistik víš, že Rada ostrova (většinou složená z mužů) často žádosti o právo volit ženám zamítá. "
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Požádal jsi o volební právo, ale nebylo ti uděleno, protože jsi byl bezdomovec. Nemohl jsi tím pádem jít k volbám a volit stranu, která chtěla téma bezdomovectví řešit."
                    },
                    {   personaName:"Romka",
                        personaText:"Jako Romka jsi nedostala volební právo. Rozhodlo se, že Romové jsou příliš nepřizpůsobiví a tak nemají právo volit. Velmi se tě to dotklo, jsi chytrá, chceš mít stejné právo rozhodovat jako kdokoliv jiný."
                    }
                ]
            }    
        ]
    },    
    {   questionText:"7. Určité skupiny obyvatel (staří lidé, děti bez rodičů, nemocní, bezdomovci) trpí hladem a špatnými životními podmínkami. Asi dvacet z nich již následkem toho zemřelo",
        questionOptions:
        [
            { optionText:"Za cenu poměrně velkých výdajů z daní zajistíte těmto ohroženým skupinám základní životní potřeby a budete usilovat o zlepšení jejich situace.",
                optionLaw:"SPOLEČNOST SE STARÁ O POKRYTÍ ZÁKLADNÍCH ŽIVOTNÍCH POTŘEB STARÝCH LIDÍ, SIROTKŮ, NEMOCNÝCH A LIDÍ BEZ DOMOVA.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Na cestě na sjezd strany jsi měl autonehodu a ochrnul jsi. Kvůli terapii nebudeš roky schopen vykonávat žádnou práci. Díky zákonům se o tebe ale stát v tomto období postará."
                    },
                    {   personaName:"feministka",
                        personaText:"Maminka ti před rokem těžce onemocněla. Ve svém věku jsi na to nebyla připravená. Jelikož ale stát v takových situacích aspoň materiálně pomáhá, dá se to vcelku zvládat."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Stát myslí i na lidi s nedostatkem peněz k životu. Na ulici jsi  dostal jednou za čas jídlo zdarma, mohl ses jít zadarmo vyspat do tepla, sociální pracovníci ti pomohli najít práci. To ti pomohlo dostat se z ulice."
                    },
                    {   personaName:"Romka",
                        personaText:"Jsi ráda, že stát se materiálně stará o staré lidi. Sami nemáte peníze navíc, abyste se postarali o tvé prarodiče a zajistili jim spokojený život.  "
                    }          
                ]
            },
            {   optionText:"Nepodniknete v této záležitosti nic.",
                optionLaw:"LIDÉ, KTEŘÍ NEMAJÍ DOSTATEK PROSTŘEDKŮ NA POKRYTÍ ZÁKLADNÍCH ŽIVOTNÍCH POTŘEB NEDOSTÁVAJÍ OD ÚŘADŮ ŽÁDNOU POMOC.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Na cestě na sjezd strany jsi měl autonehodu a ochrnul jsi. Postupuješ léčení. Vše, vč. asistenta si musíš platit z úspor sám. Stát ti nepomůže, až ti dojdou peníze, budeš v háji. "
                    },
                    {   personaName:"feministka",
                        personaText:"Maminka ti před rokem těžce onemocněla. Jelikož ale stát v takových situacích nijak nepomáhá, musíš ses o ni starat sama doma a přivydělávat si druhou prací. Víš, že to nemůžeš zvládat dlouho."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:" Z ulice ses musel dostat sám, spoustu tvých kamarádů na ulici bez pomoci zemřelo. Stát neposkytuje pomoc, neexistuje žádná sociální práce ani finanční podpora. "
                    },
                    {   personaName:"Romka",
                        personaText:"Tvoje rodina počítá každý peníz a často jste se ocitli na pokraji zoufalství, neměli jste ani na jídlo a báli jste se o svůj život. Úřady vám nijak nepomohly, museli jste si pomoct sami."
                    }
                ]    
        }, 
        {    optionText:"Donutíte členy těchto skupin (děti, staré lidi), schopné fyzické práce, aby vydělávali na pokrytí svých životních potřeb, zatímco ostatním zajistíte základní pomoc.",
                optionLaw:" STAŘÍ LIDÉ A DĚTI JSOU NUCENI PRACOVAT A ÚŘADY POSKYUJÍ POMOC POUZE LIDEM FYZICKY NESCHOPNÝM PRÁCE.",
                optionPersonas:
                [
                    {   personaName:"predseda",
                        personaText:"Na cestě na sjezd strany jsi měl autonehodu a neseš si psychické trauma. Necítíš se schopen vykonávat žádnou práci. Stát ti nepomůže, podle něj jsi fyzicky schopen práce. Až ti dojdou peníze, budeš v háji. "
                    },
                    {   personaName:"feministka",
                        personaText:"Maminka ti těžce onemocněla, ještě před měsícem ležela v kómatu. V té době jste dostávali finanční podporu od státu, jenže teď prý už je fyzicky schopná práce a nic nedostává."
                    },
                    {   personaName:"byvaly bezdomovec",
                        personaText:"Byl jsi nucen pracovat manuálně v dole na těžbu uhlí, když jsi byl na ulici. Tuto práci ti přidělili i přesto, že jsi měl vážné zdravotní problémy. Podepsalo se to na tvém zdraví a skončil jsi na vozíku."
                    },
                    {   personaName:"Romka",
                        personaText:"Tví prarodiče jsou na tom špatně, jsou staří, ale pořád musí pracovat, to ovlivňuje jejich zdraví. Kdyby měli nárok na finanční podporu, mohli už být v důchodu a užívat si spokojeného života. "
                    }
                ]
        }    
    ]
    },
]