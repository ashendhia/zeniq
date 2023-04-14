import { useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import sidiImage from '/public/Invest/sidiIm.jpg'
import aircraft from '/public/Invest/aircraft.png'
import tdrone from '/public/Invest/tdrone.png'
import sidi from '/public/Invest/sidi.png'
import tupanPic from '/public/Invest/tupan.png'
import regardless from '/public/Invest/regardless.jpg'

const Invest = () => {

    // ? Animations

    const [ytb, setYtb] = useState(false);

    const { ref: hero, inView: heroVisible } = useInView({ triggerOnce: true })
    const { ref: tdroneR, inView: tdroneVisible } = useInView({ triggerOnce: true })
    const { ref: sidiIm, inView: sidiImVisible } = useInView({ triggerOnce: true })
    const { ref: sidiToken, inView: sidiVisible } = useInView({ triggerOnce: true })
    const { ref: tupan, inView: tupanVisible } = useInView({ triggerOnce: true })
    const { ref: reg, inView: regVisible } = useInView({ triggerOnce: true })

    const viewPort = (window.innerWidth <= (414))

    const drone = [
        "La vitesse de croisière estimée pour le Tupan 1000 est de 850 km/h",
        "charge maximale de 600 kg",
        "Distance de 1,200 km"
    ]

    const real = [
        "Tokénisation immobilière d'Autriche",
        "Facilement et rapidement transférable via la blockchain",
        "Frais d'entrée bas",
        "participation aux bénéfices"
    ]

    const tupanP = [
        "Économie basée sur la régénération durable",
        "Issu d'une cultivation similaire à la cultivation naturelle qui va de la graine au fruit",
        "Avantages apportés par la Blockchain ZENIQ",
        "Lié au véritable écosystème de l'Amazonie"
    ]

    return (
        <main>
            <header ref={hero} class="smInvest md:mdInvest">
                <div className={` top-[34.05797101449276vw] mx-auto relative col items-center text-center md:text-start md:items-start gap-[0.5256vw] md:absolute md:top-[14.25755584756899vw] md:left-[18.725361366622863vw] z-[1]`} >
                    <h3 class={`smallTitle hiddenDown ${heroVisible ? 'showY' : ''} `} >
                        Aide à créer le monde de
                    </h3>
                    <h1 class={`bigTitle hiddenDown ${heroVisible ? 'showY delay-200' : ''}`}>
                        DEMAIN
                    </h1>
                    <p class={`heroDescription hiddenDown ${heroVisible ? 'showY delay-300' : ''}`}>
                        Investissez dans les projets qui se construisent autour de l'écosystème fourni par ZENIQ SAFIR.
                    </p>
                </div>
                <Image class={`mt-[45vw] mx-auto relative md:mt-0 md:absolute md:top-[9.132720105124836vw] md:left-[50.85413929040736vw] aircraft ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${heroVisible && viewPort ? 'showY' : ''} ${heroVisible ? 'md:showX' : ''}`} src={aircraft} alt="aircraft" />
                <svg class="absolute left-0 bottom-0 w-full z-0 " viewBox="0 0 1522 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M749.5 115.75C273 115.75 0 0 0 0V115.75V231.5H1522V115.75V0C1522 0 1226 115.75 749.5 115.75Z" fill="white" />
                </svg>
            </header>
            <div class="invest" >
                <section id="Latest" class="w-full col gap-[7vw] md:gap-[5.256241787122208vw] ">
                    <h2 class="title text-center">
                        Dernièrement sur ZENIQ SAFIR
                    </h2>
                    {
                        ytb ?
                            <iframe class="latest" src="https://www.youtube.com/embed/HcFNAwxVc1g?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> :
                            <div style={{ backgroundImage: `url('https://img.youtube.com/vi/HcFNAwxVc1g/maxresdefault.jpg')` }} class="latest cursor-pointer" onClick={() => setYtb(!ytb)}>
                                <svg class="play" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.0782 48.5017C37.3405 48.5017 48.0917 37.7504 48.0917 24.4881C48.0917 11.2258 37.3405 0.474609 24.0782 0.474609C10.8159 0.474609 0.0646973 11.2258 0.0646973 24.4881C0.0646973 37.7504 10.8159 48.5017 24.0782 48.5017Z" fill="#D9D9D9" fill-opacity="0.7" />
                                    <path d="M17.9709 34.4686V14.5076C17.9718 14.4255 17.9946 14.3452 18.0368 14.2749C18.079 14.2045 18.1392 14.1467 18.2112 14.1074C18.2832 14.068 18.3644 14.0486 18.4464 14.051C18.5284 14.0534 18.6082 14.0776 18.6778 14.1212L34.3884 24.1017C34.4525 24.1437 34.5052 24.201 34.5417 24.2684C34.5782 24.3359 34.5973 24.4114 34.5973 24.4881C34.5973 24.5648 34.5782 24.6402 34.5417 24.7077C34.5052 24.7752 34.4525 24.8325 34.3884 24.8745L18.6778 34.855C18.6082 34.8985 18.5284 34.9227 18.4464 34.9252C18.3644 34.9276 18.2832 34.9081 18.2112 34.8688C18.1392 34.8294 18.079 34.7716 18.0368 34.7013C17.9946 34.6309 17.9718 34.5506 17.9709 34.4686Z" fill="white" fill-opacity="0.95" />
                                </svg>
                            </div>
                    }
                    <div ref={tdroneR} id="Tdrone" class={`col items-center mt-[13.043478260869565vw] md:items-start md:section md:mt-[4.270696452036794vw] `}>
                        <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${tdroneVisible && viewPort ? 'showY' : ''} ${tdroneVisible ? 'md:showX' : ''} `}>
                            <h2 class="title">
                                TDRONE
                            </h2>
                            <p class="paragraph text-start mt-[7.246376811594203vw] md:mt-[2.3653088042049935vw]">
                                Tupan Aircraft est une start-up hybride-électrique à décollage et atterrissage verticaux électriques (VTOL) et à décollage et atterrissage verticaux électriques (eVTOL) fondée par un groupe d'ingénieurs brésiliens possédant des années d'expérience dans la conception de systèmes de propulsion, les essais en vol, l'aérodynamique et le vol autonome.
                                Et aujourd'hui, vous pouvez investir dans ce dernier prometteur en achetant le Masternode TDRONE pour frapper le Token.
                            </p>
                            <ul class=" mt-[11.594202898550725vw] md:mt-[3.5479632063074904vw] ul">
                                {drone.map((key, i) => {
                                    return (
                                        <li key={i} class="li">
                                            <svg class="done" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 0C14.4399 0 10.9598 1.05568 7.99974 3.03355C5.03966 5.01141 2.73255 7.82263 1.37018 11.1117C0.00779915 14.4008 -0.348661 18.02 0.345873 21.5116C1.04041 25.0033 2.75474 28.2106 5.27209 30.7279C7.78943 33.2453 10.9967 34.9596 14.4884 35.6541C17.98 36.3487 21.5992 35.9922 24.8883 34.6298C28.1774 33.2675 30.9886 30.9604 32.9665 28.0003C34.9443 25.0402 36 21.5601 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0V0ZM17.28 25.5L9.00001 19.185L11.745 15.63L16.71 19.5L23.475 11.88L26.835 14.88L17.28 25.5Z" fill="#2F2695" />
                                            </svg>
                                            <p class="blackParagraph">
                                                {key}
                                            </p>
                                        </li>)
                                }
                                )}
                            </ul>
                        </div>
                        <div class="mt-[13.043478260869565vw]">
                            <Image class={`drone ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${tdroneVisible && viewPort ? 'showY' : ''} ${tdroneVisible ? 'md:showX' : ''}`} src={tdrone} alt="zencoin" />
                        </div>
                    </div>
                </section>
                <section ref={tupan} id="Tupan Token" class="col flex-col-reverse items-center md:section">
                    <div class="mt-[13.043478260869565vw] md:mt-[0.657030223390276vw]" >
                        <Image class={`siditupan ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${tupanVisible && viewPort ? 'showY' : ''} ${tupanVisible ? 'md:showX' : ''}`} src={tupanPic} alt="tupan" />
                    </div>
                    <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${tupanVisible && viewPort ? 'showY' : ''} ${tupanVisible ? 'md:showX' : ''} `}>
                        <h2 class="title">
                            Tupan Token
                        </h2>
                        <p class="paragraph text-start mt-[10.38647342995169vw] md:mt-[2.3653088042049935vw]">
                            TCT ou Tupan Community Token est la base du projet Tupan basé sur la blockchain ZENIQ, pour construire un monde économique meilleur grâce à des actions positives envers notre environnement.
                        </p>
                        <ul class="ul mt-[13.043478260869565vw] md:mt-[3.5479632063074904vw]">
                            {tupanP.map((key, i) => {
                                return (
                                    <li key={i} class="li">
                                        <svg class="done" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 0C14.4399 0 10.9598 1.05568 7.99974 3.03355C5.03966 5.01141 2.73255 7.82263 1.37018 11.1117C0.00779915 14.4008 -0.348661 18.02 0.345873 21.5116C1.04041 25.0033 2.75474 28.2106 5.27209 30.7279C7.78943 33.2453 10.9967 34.9596 14.4884 35.6541C17.98 36.3487 21.5992 35.9922 24.8883 34.6298C28.1774 33.2675 30.9886 30.9604 32.9665 28.0003C34.9443 25.0402 36 21.5601 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0V0ZM17.28 25.5L9.00001 19.185L11.745 15.63L16.71 19.5L23.475 11.88L26.835 14.88L17.28 25.5Z" fill="#2F2695" />
                                        </svg>
                                        <p class="blackParagraph">
                                            {key}
                                        </p>
                                    </li>)
                            }

                            )}
                        </ul>
                        <p class="paragraph text-start mt-[10.38647342995169vw] md:mt-[2.3653088042049935vw]">
                            Pour plus d'information visitez <a href='https://www.tupan.io' target='_blank' rel="noreferrer"><strong>tupan.io </strong></a>
                        </p>
                    </div>
                </section>
                <section id="Sidi" class="w-full col md:gap-[8.21287779237845vw] ">
                    <div ref={sidiIm} style={{ backgroundImage: `url(${sidiImage.src})` }} class="sidiIm" >
                        <svg class="absolute w-full top-0 z-[1]" viewBox="1 0 1300 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 0H1302V71.456C781.93 71.456 114.162 97.44 0.5 203V0Z" fill="white" />
                        </svg>
                        <div class="absolute w-[50%] h-full right-0 bg-[rgba(223,223,223,0.51)]">
                            <div class=" ml-[4vw] mt-[25vw] md:ml-[5.781865965834428vw] md:mt-[20vw] md:w-[18.068331143232587vw]">
                                <h3 class={`smallTitle text-newBlack ml-[1.2vw] md:ml-[0.657030223390276vw] hiddenDown ${sidiImVisible ? 'showY' : ''} `} >
                                    L'immobilier
                                </h3>
                                <h1 class={` mt-[2vw] md:mt-0 oxanium text-[11vw] leading-[13vw] text-white md:bigTitle hiddenDown ${sidiImVisible ? 'showY delay-200' : ''}`}>
                                    Tokenisé
                                </h1>
                            </div>
                        </div>
                        <svg class="absolute w-full bottom-0 z-[1]" viewBox="1 0 1300 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1299.5 239H0.499987V154.872C518.07 154.872 1185.84 124.28 1302 2.53722e-06V239Z" fill="white" />
                        </svg>

                    </div>
                    <div ref={sidiToken} id="Sidi Token" class="mt-[13.043478260869565vw] md:mt-0 col items-center md:row md:gap-[9.85545335085414vw]">
                        <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${sidiVisible && viewPort ? 'showY' : ''} ${sidiVisible ? 'md:showX' : ''} `}>
                            <h2 class="title">
                                SIDI TOKEN
                            </h2>
                            <p class="paragraph text-start mt-[10.38647342995169vw] md:mt-[2.3653088042049935vw]">
                                Le jeton SIDI est un jeton immobilier qui est associé à un droit de participation de substance pour SIDO Immobilien GmbH. basé sur la Blockchain ZENIQ. Les propriétaires de jetons participent aux bénéfices de SIDO Immobilien GmbH par le biais du droit de participation.
                            </p>
                            <ul class="ul mt-[13.043478260869565vw] md:mt-[3.5479632063074904vw]">
                                {real.map((key, i) => {
                                    return (
                                        <li key={i} class="li">
                                            <svg class="done" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 0C14.4399 0 10.9598 1.05568 7.99974 3.03355C5.03966 5.01141 2.73255 7.82263 1.37018 11.1117C0.00779915 14.4008 -0.348661 18.02 0.345873 21.5116C1.04041 25.0033 2.75474 28.2106 5.27209 30.7279C7.78943 33.2453 10.9967 34.9596 14.4884 35.6541C17.98 36.3487 21.5992 35.9922 24.8883 34.6298C28.1774 33.2675 30.9886 30.9604 32.9665 28.0003C34.9443 25.0402 36 21.5601 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0V0ZM17.28 25.5L9.00001 19.185L11.745 15.63L16.71 19.5L23.475 11.88L26.835 14.88L17.28 25.5Z" fill="#2F2695" />
                                            </svg>
                                            <p class="blackParagraph">
                                                {key}
                                            </p>
                                        </li>)
                                }

                                )}
                            </ul>
                            <p class="paragraph text-start mt-[10.38647342995169vw] md:mt-[2.3653088042049935vw]">
                                Pour plus d'information visitez <a href='https://sido-immobilien.at/' target='_blank' rel="noreferrer"><strong>sido-immobilien.at</strong></a>
                            </p>
                        </div>
                        <div class=" mt-[13.043478260869565vw] md:mt-0 ">
                            <Image class={`siditupan ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${sidiVisible && viewPort ? 'showY' : ''} ${sidiVisible ? 'md:showX' : ''}`} src={sidi} alt="sidi" />
                        </div>
                    </div>
                </section>
                <section ref={reg} id="Regardless" class="col items-center md:section">
                    <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${regVisible && viewPort ? 'showY' : ''} ${regVisible ? 'md:showX' : ''} `}>
                        <h2 class="title">
                            Regardless
                        </h2>
                        <p class="paragraph text-start mt-[10.38647342995169vw] md:mt-[2.3653088042049935vw]">
                            Nous vous présentons le projet innovant de tokenisation cinématographique : REGARDLESS. Il s'agit de la tokenisation du film "Regardless", qui sera diffusé et tokenisé sur la smartchain ZENIQ grâce à la technologie révolutionnaire ZENIQ. C'est un honneur de tokeniser tout un film.
                            <br />
                            Alors ne perdez pas de temps et commencez à frapper le jeton Indépendamment.
                        </p>
                    </div>
                    <div class="mt-[13.043478260869565vw] md:mt-0" >
                        <Image class={`reg ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${regVisible && viewPort ? 'showY' : ''} ${regVisible ? 'md:showX' : ''}`} src={regardless} alt="exc" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Invest