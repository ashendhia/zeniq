import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useInView } from 'react-intersection-observer'

import home from '/public/Home/home.png'
import coin from '/public/Home/coin.png'
import tokenization from '/public/Home/tokenisation ZENIQ.png'
import hub from '/public/Home/hub.svg'

const HomeFR = () => {

    // ? Animations

    const { ref: about, inView: aboutIsVisible } = useInView({ triggerOnce: true })
    const { ref: bulletPoints, inView: pointsAreVisible } = useInView({ triggerOnce: true })
    const { ref: zenSuccess, inView: successPointsAreVisible } = useInView({ triggerOnce: true })
    const { ref: zHub, inView: zHubVisible } = useInView({ triggerOnce: true })
    const { ref: bitcoin, inView: bitZenVisible } = useInView({ triggerOnce: true })
    const { ref: me, inView: meVisible } = useInView({ triggerOnce: true })
    const { ref: social, inView: socialVisible } = useInView({ triggerOnce: true })

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('/public/Sources', false, /\.(png|jpe?g|svg)$/));

    const [showButton, setShowButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [left, setLeft] = useState(0)
    const sources = useRef(null)
    const pages = [
        "https://www.arabianbusiness.com/technology/466301-uae-gets-new-blockchain-tokenisation-platform",
        "https://www.emaratalyoum.com/business/local/2021-07-25-1.1517526",
        "https://cryptonewsbtc.org/2021/07/19/zeniq-launches-groundbreaking-blockchain-tokenization-platform-in-dubai/",
        "https://cryptovoize.com/zeniq-launches-blockchain-tokenization-platform-in-dubai/",
        "https://www.pressreader.com/bahrain/gulf-today/20210719/281857236552641",
        "https://logisticsgulf.com/2021/07/zeniq-launches-groundbreaking-blockchain-tokenization-platform-in-dubai/",
        "https://issuu.com/meafinance/docs/mea-finance-aug-2021/56",
        "https://www.unlock-bc.com/news/2021-07-25/uae-based-zeniq-founder-wants-to-build-a-blockchain-financial-platform-for-uae-government/",
        "https://www.arabianbusiness.com/technology/466301-uae-gets-new-blockchain-tokenisation-platform",
        "https://www.emaratalyoum.com/business/local/2021-07-25-1.1517526",
        "https://cryptonewsbtc.org/2021/07/19/zeniq-launches-groundbreaking-blockchain-tokenization-platform-in-dubai/",
        "https://cryptovoize.com/zeniq-launches-blockchain-tokenization-platform-in-dubai/",
        "https://www.pressreader.com/bahrain/gulf-today/20210719/281857236552641"
    ]
    const keys = [
        "Partenariat de Son Altesse Sheikh Saeed bin Hasher Al Maktoum.",
        "Des partenariats avec des entreprises internationales telles que : Avinoc et Tupan.",
        "ZENIQ COIN est déjà coté sur CoinMarketCap, Uniswap et PANCAKESWAP, et bientôt sur Binance.",
        "Juste derrière la Solana Blockchain, ZENIQ Blockchain arrive deuxième avec une vitesse de transaction de 50 000 T/S, tout en étant entièrement décentralisée.",
        "Un écosystème numérique robuste et intégré."
    ]

    const mdLeft = 17.01704;
    const smLeft = 44.92995169082125;

    let currentLeft;

    if (window.innerWidth <= 768) {
        currentLeft = smLeft;
    }

    else {
        currentLeft = mdLeft
    }
    const handleScroll = () => {
        if (currentLeft === smLeft) {
            if (window.pageYOffset > 896 && window.pageYOffset < 5000) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        } else {
            if (window.pageYOffset > 770 && window.pageYOffset < 5200) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === 8) {
                setCurrentIndex(1)
                setLeft(17.01704)
                sources.current.style.transition = `all 0s`
                sources.current.style.transform = `translate(0vw)`
                setTimeout(() => {
                    sources.current.style.transform = `translate(-17.01704vw)`;
                    sources.current.style.transition = `all 2s`
                }, 0)

            }
            else {
                setLeft(prev => prev + 17.01704)
                sources.current.style.transform = `translate(-${left + 17.01704}vw)`;
                setCurrentIndex(nextIndex => nextIndex + 1)
            }

        }, 4000);

        return () => clearInterval(interval);
    });

    useEffect(() => {

        const script = document.createElement('script')
        script.src = "https://files.coinmarketcap.com/static/widget/currency.js"
        script.async = true
        document.body.appendChild(script)

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main>
            <header class="smBg md:mdBg ">
                <div className="top-[34.05797101449276vw] mx-auto relative md:absolute md:top-[16.688vw] md:left-[7.2273vw] col items-center text-center md:text-start md:items-start gap-[0.5256vw] " >
                    <h3 class="ml-[0.2628vw] smallTitle" >
                        Tokéniser le
                    </h3>
                    <h1 class="bigTitle">
                        FUTUR
                    </h1>
                    <p class="heroDescription">
                        On construit un écosystème financier moderne en utilisant la blockchain ZENIQ.
                    </p>
                    <a href="https://safir.com/backoffice/ref/p2khytgzn2" target="_blank" class="joinBtn" rel="noreferrer" >
                        Rejoignez-nous
                    </a>
                </div>
                <Image class={` mt-[53vw] mx-auto md:mt-0 relative md:absolute md:top-[7.687253613666228vw] md:left-[44.021024967148485vw] homePic `} src={home} alt="home" />
                <div class="absolute left-0 bottom-0 w-full">
                    <svg viewBox="0 0 1522 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1052.5 145.5C678 197 0 164 0 164V289H1522V0C1522 0 1427 93.9997 1052.5 145.5Z" fill="white" />
                    </svg>
                </div>
            </header>
            <div class="home" >
                <a href="https://safir.com/backoffice/ref/p2khytgzn2" target="_blank" class={` joinBtn fixed duration-[400ms] m-0 ${showButton ? 'opacity-100 h-auto ' : 'duration-[400ms] opacity-0 invisible'} bottom-4 right-[29.468599033816425vw] md:right-8 `} rel="noreferrer" >
                    Rejoignez-nous
                </a>
                <section id="Trusted By" class="col items-center ">
                    <h2 class="title text-center">
                        Approuvé Par
                    </h2>
                    <div class="trusted">
                        <ul class="srcUl" ref={sources} >
                            {pages.map((link, i) => {
                                if (window.innerWidth <= 768) {
                                    if (i >= currentIndex && i <= currentIndex + 1) {
                                        return <a href={link} class="srcImg" target="_blank" rel="noreferrer"> <Image key={i} src={images[`${i + 1}.png`]} alt="My Image" /> </a>
                                    }
                                    return <a href={link} class="srcImg" target="_blank" rel="noreferrer"> <Image key={i} src={images[`${i + 1}.png`]} alt="My Image" /> </a>
                                } else {
                                    if (i >= currentIndex && i <= currentIndex + 4) {
                                        return <a href={link} class="srcImg" target="_blank" rel="noreferrer"> <Image key={i} src={images[`${i + 1}.png`]} alt="My Image" /> </a>
                                    }
                                    return <a href={link} class="srcImg" target="_blank" rel="noreferrer"> <Image key={i} src={images[`${i + 1}.png`]} alt="My Image" /> </a>
                                }
                            })
                            }
                        </ul>
                    </div>
                </section>
                <section id="About Zeniq" class="md:col items-center ">
                    <div ref={about} id="About" class="col gap-[14.000000000000002vw] md:row md:gap-[6.5703vw] items-center">
                        <Image class={`aboutImg ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenLeft ${(aboutIsVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${aboutIsVisible ? 'md:showX' : ''} `} src={coin} />
                        <div class={`col gap-[9vw] md:gap-[2.2339vw] ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenRight ${(aboutIsVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${aboutIsVisible ? 'md:showX' : ''}`} >
                            <h2 class="title">
                                ZENIQ SAFIR
                            </h2>
                            <div class="col gap-[5.797101449275362vw] md:gap-[1.5768725361366622vw] ">
                                <p class="paragraph">
                                    ZENIQ, basée au Centre financier international de Dubaï (DIFC), est pionnière sur le marché mondial de la gestion d'actifs numériques 100 % sécurisée et conviviale pour les utilisateurs, les investisseurs et les innovateurs.
                                </p>
                                <p class="paragraph">
                                    ZENIQ vise à devenir un portail pour les investissements numériques dans quelques années et sera l'un des meilleurs échanges au monde avec des échanges décentralisés par sa blockchain puissante et rapide.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div ref={bulletPoints} id="Bullet Points" class={`bulletList `}>
                        <div class={`bulletPoint hiddenDown ${pointsAreVisible ? 'showY' : ''}`} >
                            <svg class="bulletIcon" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65.8866 0.122864H33.5736L20.6528 46.6441H33.5999L22.5914 86.2883H26.4694L63.9451 39.7651H44.9602L65.8866 0.122864Z" fill="#2F2695" />
                            </svg>
                            <div class="col w-[63.18115942028986vw] md:w-auto items-center" >
                                <h3 class="bulletTitle" >
                                    Energie-Tech
                                </h3>
                                <p class="bulletText" >
                                    Des produits innovants qui vous facilitent la vie
                                </p>
                            </div>
                        </div>
                        <div class={`bulletPoint hiddenDown ${pointsAreVisible ? 'showY delay-200' : ''}`} >
                            <svg class="bulletIcon" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M86.516 33.8658V53.7502H53.3755V86.8907H33.4911V53.7502H0.350586V33.8658H33.4911V0.725281H53.3755V33.8658H86.516Z" fill="#2F2695" />
                            </svg>

                            <div class="col w-[63.18115942028986vw] md:w-auto items-center" >
                                <h3 class="bulletTitle" >
                                    Santé-Tech
                                </h3>
                                <p class="bulletText" >
                                    Comme la santé devrait être "l'état normal"
                                </p>
                            </div>
                        </div>
                        <div class={`bulletPoint hiddenDown ${pointsAreVisible ? 'showY delay-[400ms]' : ''}`} >
                            <svg class="bulletIcon" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M60.645 47.7965C59.5054 47.7999 58.4138 48.2556 57.61 49.0634C56.8062 49.8713 56.356 50.9652 56.3583 52.1048C56.3583 54.4829 58.2755 56.413 60.645 56.413H60.6881C63.0576 56.413 64.9748 54.4829 64.9748 52.1048C64.9748 49.7266 63.0576 47.7965 60.6881 47.7965H60.645Z" fill="#2F2695" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.5965 0.405273H62.7774C70.9201 0.405273 77.8995 6.68673 77.8995 14.9672V18.9438C82.9746 21.2487 86.516 26.3669 86.516 32.2865V71.9226C86.516 79.9877 79.933 86.5707 71.8679 86.5707H14.9987C11.1162 86.5627 7.39506 85.0169 4.64973 82.2716C1.9044 79.5262 0.35856 75.8051 0.350591 71.9226V15.4842C0.347873 12.6617 1.45408 9.95114 3.43085 7.93649C5.40763 5.92183 8.09675 4.76439 10.9188 4.71355L62.5965 0.405273ZM69.2829 14.9672V17.6384H11.1213C10.8381 17.6395 10.5574 17.5846 10.2956 17.4767C10.0337 17.3689 9.79578 17.2102 9.59552 17.01C9.39527 16.8097 9.23664 16.5718 9.12879 16.3099C9.02093 16.0481 8.96599 15.7674 8.96713 15.4842C8.96713 14.2865 9.92357 13.3301 11.1213 13.3301H11.3022L62.9369 9.02182C66.685 9.09937 69.2829 11.917 69.2829 14.9672ZM82.2077 39.1797H55.1259C51.046 39.1797 47.7416 42.2644 47.7416 46.073V58.1361C47.7416 61.9446 51.0503 65.0294 55.1259 65.0294H82.2077V39.1797Z" fill="#2F2695" />
                            </svg>
                            <div class="col w-[63.18115942028986vw] md:w-auto items-center" >
                                <h3 class="bulletTitle" >
                                    Blockchain-Tech
                                </h3>
                                <p class="bulletText" >
                                    La blockchain va changer durablement nos vies
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={zenSuccess} id="Zeniq Success" class="col">
                    <h2 class="title text-center">
                        Principaux points du succès de ZENIQ
                    </h2>
                    <div class={`successBulletPoints`}>
                        <ul class={`col success text text-start ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenRight ${(successPointsAreVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${successPointsAreVisible ? 'md:showX' : ''} `}>
                            {keys.map((text, i) => {
                                return <li class={`list-disc`} key={i}>{text}</li>
                            })
                            }
                        </ul>
                        <Image class={`token ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenLeft ${(successPointsAreVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${successPointsAreVisible ? 'md:showX' : ''}`} src={tokenization} alt="tokenization" />
                    </div>
                </section>
                <section id="Zeniq Hub" class="col gap-[19.32367149758454vw] md:gap-0">
                    <div>
                        <h2 class="title text-center">
                            ZENIQ Hub
                        </h2>
                        <div ref={zHub} class="col md:row gap-[15.458937198067632vw] mt-[9.66183574879227vw] md:gap-[3.81077vw] md:mt-[4.20499vw]" >
                            <Image class={`hub ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenLeft ${(zHubVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${zHubVisible ? 'md:showX' : ''}`} src={hub} alt="hub" />
                            <div class={`md:pt-[1.5168vw ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenRight ${(zHubVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${zHubVisible ? 'md:showX' : ''}`} >
                                <p class="paragraph text-start">
                                    Le ZENIQ Hub est le portefeuille matériel de la nouvelle génération qui protège les actifs numériques de l'utilisateur grâce à son composant de sécurité intégré. Les actifs numériques sont stockés en toute sécurité et sont accessibles à tout moment via l'application mobile ZENIQ.
                                </p>
                                <p class="paragraph text-start font-bold mt-[15.458937198067632vw] md:mt-[3.81077vw]">
                                    Mais le plus important, c'est votre clé d'accès !
                                    <br /><br />
                                    Pour faire partie d'une révolution à venir dans la gestion d'actifs et la finance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="md:mt-[6.5703vw] col items-center " >
                        <h2 class="title text-center">
                            Revenu passif et progressif
                        </h2>
                        <p class="paragraph mt-[9.66183574879227vw] w-full md:w-[45.992vw] md:mt-[2.6281vw] text-center">
                            Chaque jour, vos HUB vous rapporteront des pièces ZENIQ (entre 2 et 4 par HUB), mais vous pouvez en obtenir bien plus.
                        </p>
                    </div>
                    <div class="mt-[6.5703vw] col items-center " >
                        <h2 class="title font-normal text-center">
                            Suivre le cours du token
                        </h2>
                        <div className="coinMarketCap">
                            <div class="coinmarketcap-currency-widget" data-currencyid="23027" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="false" data-volume="true" data-statsticker="true" data-stats="USD"></div>
                        </div>
                    </div>
                    <div ref={bitcoin} class="flex-none mt-[13.9290407vw] md:pl-[3.35085vw] col" >
                        <h2 class={`title text-start font-normal hiddenDown ${bitZenVisible ? 'showY' : ''}`}>
                            Vous avez loupé le Bitcoin ...
                        </h2>
                        <h2 class={`text-start mt-[21.980676328502415vw] md:mt-[13.9290407vw] title font-normal hiddenDown ${bitZenVisible ? 'showY delay-200' : ''}`}>
                            Ne faites pas de même avec ZENIQ.
                        </h2>
                    </div>
                </section>
                <section ref={me} id="About Me" class="col items-center mt-[4.40210249vw]">
                    <h2 class="title text-center">
                        A propos de moi
                    </h2>
                    <div class="col flex-col-reverse md:row gap-[6.5703vw] mt-[9.66183574879227vw] md:mt-[3.67936925vw] " >
                        <div class={`col ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenRight ${(meVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${meVisible ? 'md:showX' : ''} pt-[10.628019323671497vw] md:pt-[2.89093298292vw]`} >
                            <h3 class={`bulletTitle text-center md:text-start font-medium`} >
                                Salut ! Je suis Zaid Fatma
                            </h3>
                            <p class="text w-full md:w-[42.772667vw] mt-[7.729468599033816vw] md:mt-[2.3653088042049935vw] ">
                                Originaire de l'Algérie, exactement de Tiaret, où j'ai grandi jusqu'à la fin de 1999, cette année-là j'ai quitté l'Algérie pour aller m'installer en France, ville de Toulouse.
                                <br /><br />
                                Jusqu'à présent Employée de l'Etat dans les écoles préparatoires Pour les enfants de 3 à 6 ans, tout en étant investisseur et marketeur pour la société UAE.
                                Notre objectif aujourd'hui est de faire sortir les gens de leur mode de vie difficile vers une nouvelle percée dans l'écosystème numérique et technologique fourni par ZENIQ SAFIR.
                            </p>
                        </div>
                        <div class={`w-full ${(currentLeft === smLeft) ? 'hiddenDown' : ''} md:hiddenLeft ${(meVisible && (currentLeft === smLeft)) ? 'showY' : ''} ${meVisible ? 'md:showX' : ''} md:w-[31.60315374vw] aspect-square bg-[url('../../public/Home/zaid.jpeg')] bg-cover border-newBlack border-[0.19710906vw] rounded-[1.314060446vw]`}>
                        </div>
                    </div>
                </section>
                <section ref={social} id="Contact" class="col items-center md:gap-[6.57030223390276vw] gap-[15.458937198067632vw]">
                    <h2 class={` title text-center`}>
                        Contacte Moi
                    </h2>
                    <div class={`row md:gap-[13.14060446780552vw] flex-wrap gap-[15.458937198067632vw] md:h-auto h-[42.7536231884058vw] w-[42.51207729468599vw] md:w-auto justify-between`}>
                        <a href='https://web.facebook.com/profile.php?id=100090736983622' target='_blank' rel="noreferrer" id="facebook">
                            <svg class={`social hiddenRight ${socialVisible ? 'showX' : ''}`} viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.1395 28.2245C56.1395 12.7605 43.6035 0.224487 28.1395 0.224487C12.6755 0.224487 0.139526 12.7605 0.139526 28.2245C0.139526 42.2001 10.3787 53.7839 23.7645 55.8844V36.3184H16.6551V28.2245H23.7645V22.0558C23.7645 15.0383 27.9447 11.162 34.3406 11.162C37.404 11.162 40.6084 11.7089 40.6084 11.7089V18.5995H37.0776C33.5993 18.5995 32.5145 20.7579 32.5145 22.9722V28.2245H40.2801L39.0388 36.3184H32.5145V55.8844C45.9004 53.7839 56.1395 42.2001 56.1395 28.2245Z" fill="#2F353E" />
                            </svg>
                        </a>
                        <a href='https://www.instagram.com/zeniq2077' target='_blank' rel="noreferrer" id="instagram">
                            <svg class={`social hiddenRight ${socialVisible ? 'showX' : ''} delay-200`} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.974 0.111816C44.1824 0.111816 55.8074 11.7369 55.8074 25.9453V29.9815C55.8074 44.19 44.1823 55.815 29.974 55.815H25.9377C11.7293 55.815 0.104248 44.19 0.104248 29.9815V25.9453C0.104248 11.7369 11.7293 0.111816 25.9377 0.111816H29.974ZM28.4637 14.1123L28.1042 14.1118C25.1113 14.1118 22.1184 14.2107 22.1184 14.2107C17.747 14.2107 14.2032 17.7545 14.2032 22.126C14.2032 22.126 14.1123 24.6959 14.1047 27.4543L14.1042 27.815C14.1042 30.9035 14.2032 34.0977 14.2032 34.0977C14.2032 38.4691 17.747 42.0129 22.1184 42.0129C22.1184 42.0129 24.9167 42.1118 27.8075 42.1118C30.896 42.1118 34.1891 42.0129 34.1891 42.0129C38.5605 42.0129 42.0053 38.5681 42.0053 34.1967C42.0053 34.1967 42.1042 31.0385 42.1042 28.0129L42.1024 27.3029C42.089 24.5884 42.0053 22.027 42.0053 22.027C42.0053 17.6555 38.5605 14.2107 34.189 14.2107C34.189 14.2107 31.3396 14.1196 28.4637 14.1123ZM28.1042 16.6318C30.5585 16.6318 33.7052 16.7129 33.7052 16.7129C37.2899 16.7129 39.5031 18.9261 39.5031 22.5107C39.5031 22.5107 39.5842 25.6038 39.5842 28.0306C39.5842 30.5115 39.5031 33.7127 39.5031 33.7127C39.5031 37.2973 37.2899 39.5105 33.7052 39.5105C33.7052 39.5105 30.9224 39.5787 28.5079 39.5901L27.8609 39.5917C25.4904 39.5917 22.6022 39.5105 22.6022 39.5105C19.0176 39.5105 16.7054 37.1983 16.7054 33.6138C16.7054 33.6138 16.6242 30.4009 16.6242 27.8684C16.6242 25.4979 16.7054 22.5107 16.7054 22.5107C16.7054 18.9261 19.0177 16.7129 22.6022 16.7129C22.6022 16.7129 25.65 16.6318 28.1042 16.6318ZM28.1042 20.9402C24.1434 20.9402 20.9326 24.151 20.9326 28.1117C20.9326 32.0725 24.1434 35.2833 28.1042 35.2833C32.065 35.2833 35.2758 32.0725 35.2758 28.1117C35.2758 24.151 32.065 20.9402 28.1042 20.9402ZM28.1042 23.445C30.6815 23.445 32.7709 25.5344 32.7709 28.1117C32.7709 30.6891 30.6815 32.7784 28.1042 32.7784C25.5269 32.7784 23.4375 30.6891 23.4375 28.1117C23.4375 25.5344 25.5268 23.445 28.1042 23.445ZM35.6189 18.95C34.6619 18.95 33.8861 19.7297 33.8861 20.6914C33.8861 21.6532 34.6619 22.4328 35.6189 22.4328C36.5759 22.4328 37.3517 21.6532 37.3517 20.6914C37.3517 19.7296 36.5759 18.95 35.6189 18.95Z" fill="#2F353E" />
                            </svg>
                        </a>
                        <a href="https://wa.me/33771240382?text=Salut%20J'aimerais%20en%20savoir%20plus%20à propos%20de%20ZENIQ%20et%20ZENIQ%20COIN" target='_blank' rel="noreferrer" id="whatsapp" >
                            <svg class={`social hiddenRight ${socialVisible ? 'showX' : ''} delay-[400ms]`} viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.98 9.06135C42.7625 3.80944 35.66 0.864759 28.2572 0.884498C12.8874 0.884498 0.37884 13.3918 0.373493 28.7654C0.366929 33.6583 1.6508 38.4663 4.09558 42.7047L0.139526 57.1545L14.9209 53.2773C19.0088 55.5048 23.5899 56.6718 28.2452 56.6718H28.2572C43.6242 56.6718 56.134 44.1632 56.1394 28.7896C56.1633 21.3877 53.2252 14.2839 47.98 9.06135ZM40.9689 34.5985C40.2724 34.2496 36.8471 32.5652 36.208 32.3258C35.569 32.0865 35.1051 31.9768 34.6412 32.6747C34.1773 33.3727 32.8417 34.9409 32.4352 35.4062C32.0288 35.8713 31.6224 35.9288 30.9256 35.58C30.2291 35.2311 27.9844 34.4956 25.3226 32.1227C23.2516 30.2748 21.8464 27.9941 21.4453 27.2961C21.0442 26.5982 21.4025 26.2265 21.7515 25.8735C22.0643 25.5621 22.448 25.0606 22.7956 24.653C23.1433 24.2452 23.2609 23.9564 23.4921 23.4912C23.7236 23.0259 23.6084 22.6195 23.4346 22.2705C23.2609 21.9216 21.8665 18.4923 21.2862 17.0978C20.7207 15.7394 20.1471 15.9226 19.7193 15.8945C19.3182 15.8745 18.8476 15.8705 18.3824 15.8705C17.6684 15.8891 16.9947 16.2051 16.524 16.7422C15.8862 17.4401 14.0867 19.1246 14.0867 22.5539C14.0867 25.9833 16.5828 29.2962 16.9304 29.7615C17.278 30.2268 21.8437 37.2632 28.8294 40.282C30.1268 40.8416 31.4526 41.3325 32.8016 41.7527C34.47 42.2874 35.9888 42.2086 37.1893 42.0295C38.5263 41.8289 41.3113 40.3435 41.8927 38.7163C42.4743 37.0894 42.4731 35.6935 42.294 35.4034C42.1148 35.1133 41.6654 34.9529 40.9689 34.6039V34.5985Z" fill="#2F353E" />
                            </svg>
                        </a>
                        <a id="telegram" href="https://t.me/+33771240382?text=Salut%20J'aimerais%20en%20savoir%20plus%20à propos%20de%20ZENIQ%20et%20ZENIQ%20COIN" >
                            <svg class={`social hiddenRight ${socialVisible ? 'showX' : ''} delay-[600ms] `} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8606 28.0195C56.8606 43.4833 44.3244 56.0195 28.8606 56.0195C13.3966 56.0195 0.860596 43.4833 0.860596 28.0195C0.860596 12.5554 13.3966 0.0194092 28.8606 0.0194092C44.3244 0.0194092 56.8606 12.5554 56.8606 28.0195ZM29.8638 20.6903C27.1406 21.823 21.6976 24.1675 13.535 27.7238C12.2095 28.251 11.5152 28.7668 11.452 29.2708C11.3451 30.1231 12.4122 30.4585 13.8653 30.9155C14.063 30.9777 14.2678 31.0421 14.4778 31.1101C15.9074 31.5749 17.8305 32.1187 18.8302 32.1402C19.7371 32.1598 20.7493 31.786 21.8667 31.0185C29.4934 25.8704 33.4302 23.2684 33.6772 23.2121C33.8516 23.1726 34.0932 23.1228 34.257 23.2684C34.4208 23.414 34.4046 23.6895 34.3872 23.7634C34.2817 24.2142 30.0929 28.1085 27.9251 30.1237C27.2495 30.752 26.7701 31.1975 26.6721 31.2994C26.4526 31.5273 26.2289 31.7429 26.0138 31.9501C24.6858 33.2305 23.6896 34.1907 26.069 35.7587C27.2125 36.5121 28.1273 37.1351 29.0401 37.7567C30.0369 38.4357 31.0312 39.1128 32.3178 39.9562C32.6454 40.1709 32.9584 40.3941 33.2633 40.6114C34.4234 41.4385 35.4655 42.1816 36.7532 42.0629C37.5014 41.9943 38.2742 41.2906 38.6668 39.1923C39.5944 34.2335 41.4178 23.489 41.8392 19.0617C41.8761 18.6738 41.8296 18.1774 41.7924 17.9595C41.7549 17.7415 41.677 17.431 41.3937 17.2012C41.0582 16.9289 40.5405 16.8715 40.3087 16.8754C39.2556 16.8942 37.6397 17.456 29.8638 20.6903Z" fill="#2F353E" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomeFR