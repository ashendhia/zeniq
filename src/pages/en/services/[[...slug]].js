import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import services from '/public/Services/services.png'
import zencoin from '/public/Services/zencoin.png'
import zenpay from '/public/Services/pay.png'
import zenexc from '/public/Services/exchange.png'
import app from '/public/Services/app.png'
import appstore from '/public/Services/appstore.png'

const Services = () => {

    // ? Animations

    const { ref: hero, inView: heroVisible } = useInView({ triggerOnce: true })
    const { ref: zenCoin, inView: zenCoinVisible } = useInView({ triggerOnce: true })
    const { ref: zenPay, inView: zenPayVisible } = useInView({ triggerOnce: true })
    const { ref: zenExc, inView: zenExcVisible } = useInView({ triggerOnce: true })
    const { ref: nomoApp, inView: nomoAppVisible } = useInView({ triggerOnce: true })

    const viewPort = (window.innerWidth <= (414))


    const zen = [
        "ZENIQ Coin is token-enabled with no pre-mining",
        "Issued through mining (1%) and minting (99%) on the ZENIQ Hub only",
        "POS Crypto Payment Services.",
        "To be used for tokenization where token owners can participate in partial ownership of physical assets like real estate, art, precious metals, etc."
    ]

    const pay = [
        "Crypto technology for ecommerce.",
        "API for Crypto ATMs.",
        "POS Crypto Payment Services.",
        "Payment service provider API (similar to Paypal/ Bitpay)."
    ]

    const nomo = [
        "User-friendly: Track, trade cryptocurrencies in real time within the wallet with ease.",
        "Decentralised: Non-custodial multi-asset app with no KYC requirements.",
        "POS payment with Crypto and fiat.",
        "A user’s own secure wallet on the smartphone.",
        "Secure: Connected to ZENIQ Hub, which protects user’s digital assets with its built-in security component."
    ]

    return (
        <main>
            <header ref={hero} class="smSv md:mdSv ">
                <div className={` top-[34.05797101449276vw] mx-auto relative col items-center text-center md:text-start md:items-start gap-[0.5256vw] md:absolute md:top-[14.25755584756899vw] md:left-[47.89750328515112vw]`} >
                    <h3 class={`smallTitle hiddenDown ${heroVisible ? 'showY' : ''} `} >
                        Ecosystem beyond
                    </h3>
                    <h1 class={`bigTitle hiddenDown ${heroVisible ? 'showY delay-200' : ''}`}>
                        Reality
                    </h1>
                    <p class={`heroDescription hiddenDown ${heroVisible ? 'showY delay-300' : ''}`}>
                        Discover the different services that ZENIQ SAFIR provides to its users and customers.
                    </p>
                </div>
                <Image class={` mt-[35vw] mx-auto relative md:mt-0 md:absolute md:top-[7.1616294349540075vw] md:left-[17.082785808147175vw] servicesPic `} src={services} alt="services" />
                <div class="absolute left-0 bottom-0 w-full">
                    <svg viewBox="0 0 1522 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M749.5 115.75C273 115.75 0 0 0 0V115.75V231.5H1522V115.75V0C1522 0 1226 115.75 749.5 115.75Z" fill="white" />
                    </svg>
                </div>
            </header>
            <div class="services" >
                <section ref={zenCoin} id="Zeniq Coin" class={`col items-center md:items-start flex-col-reverse md:section `}>
                    <div class="mt-[13.043478260869565vw] md:mt-[5.256241787122208vw] md:ml-[6.57030223390276vw]">
                        <Image class={`coin ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${zenCoinVisible && viewPort ? 'showY' : ''} ${zenCoinVisible ? 'md:showX' : ''}`} src={zencoin} alt="zencoin" />
                    </div>
                    <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${zenCoinVisible && viewPort ? 'showY' : ''} ${zenCoinVisible ? 'md:showX' : ''} `}>
                        <h2 class="title">
                            ZENIQ Coin
                        </h2>
                        <p class="boldParagraph mt-[7.246376811594203vw] md:mt-[2.3653088042049935vw]">
                            ZENIQ Coin is the native token and lifeblood of the financial ecosystem created with the ZENIQ blockchain.
                        </p>
                        <ul class=" mt-[11.594202898550725vw] md:mt-[3.5479632063074904vw] ul">
                            {zen.map((key, i) => {
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
                </section>
                <section ref={zenPay} id="Zeniq Pay" class="col items-center md:section">
                    <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${zenPayVisible && viewPort ? 'showY' : ''} ${zenPayVisible ? 'md:showX' : ''} `}>
                        <h2 class="title">
                            ZENIQ Pay
                        </h2>
                        <p class="paragraph text-start mt-[10.38647342995169vw] md:mt-[2.3653088042049935vw]">
                            With our unique blockchain ecosystem and partners to integrate fiat payments we develop solutions that simplifies and streamlines online and POS payments. ZENIQ Pay is an all in one crypto technology solution for your project, whether it is a marketplace, a wallet, a payment service, an ATM Service or an online shop. Integrate ZENIQ Pay to boost your project with a reliable versatile solution.                        </p>
                        <ul class="ul mt-[13.043478260869565vw] md:mt-[3.5479632063074904vw]">
                            {pay.map((key, i) => {
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
                    <div class=" mt-[15.458937198067632vw] md:mt-[9.132720105124836vw] md:ml-[6.57030223390276vw]">
                        <Image class={`pay ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${zenPayVisible && viewPort ? 'showY' : ''} ${zenPayVisible ? 'md:showX' : ''}`} src={zenpay} alt="pay" />
                    </div>
                </section>
                <section ref={zenExc} id="Zeniq Exchange" class="col flex-col-reverse items-center md:section">
                    <div class="mt-[13.043478260869565vw] md:mt-0" >
                        <Image class={`exc ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${zenExcVisible && viewPort ? 'showY' : ''} ${zenExcVisible ? 'md:showX' : ''}`} src={zenexc} alt="exc" />
                    </div>
                    <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${zenExcVisible && viewPort ? 'showY' : ''} ${zenExcVisible ? 'md:showX' : ''} `}>
                        <h2 class="title">
                            ZENIQ Exchange
                        </h2>
                        <p class="paragraph text-start mt-[10.38647342995169vw] md:mt-[2.3653088042049935vw]">
                            As a decentralized exchange the main focus of the ZENIQ Exchange is on security, privacy and an easy to use hardware for customers. ZENIQ empowers their community to trade across any crypto assets safely and simply. ZENIQ offers a fast and secure way to manage and trade all categories of crypto assets by using advantages of a decentralized exchange. On the other hand ZENIQ is eliminating the disadvantages of current centralized solutions on the market using its own decentralized blockchain.                        </p>
                    </div>
                </section>
                <section ref={nomoApp} id="Nomo" class="col items-center md:section">
                    <div class={`col ${viewPort ? 'hiddenDown' : ''} md:hiddenRight ${nomoAppVisible && viewPort ? 'showY' : ''} ${nomoAppVisible ? 'md:showX' : ''} `}>
                        <div class="row items-start gap-[1.2077294685990339vw] md:gap-[0.5256241787122208vw]">
                            <h2 class="title">
                                Nomo
                            </h2>
                            <p class="mt-[4.272946859903382vw] md:mt-[2.3653088042049935vw] oxanium font-medium text-newBlack text-[2.1739130434782608vw] md:text-[1.1826544021024967vw] ">
                                powered by ZENIQ
                            </p>
                        </div>
                        <p class="boldParagraph text-start w-full md:w-[43.823915900131404vw] mt-[5.314009661835748vw] md:mt-[1.8396846254927726vw]">
                            The blockchain wallet preferred and trusted by over 100,000 users.
                        </p>
                        <p class="paragraph text-start w-full md:w-[43.823915900131404vw] mt-[4.3478260869565215vw] md:mt-[1.5768725361366622vw]">
                            Nomo powered by ZENIQ is a versatile, multi-asset wallet that is equipped with features like built-in swaps, NFT storage, crypto transactions in real time, among others. The app is connected to ZENIQ HUB and each transaction is triggered in the ZENIQ App and implemented in the ZENIQ HUB.                        </p>
                        <ul class="ul mt-[8.695652173913043vw] md:mt-[3.5479632063074904vw] ">
                            {nomo.map((key, i) => {
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
                        <div class="row mt-[7.004830917874397vw] gap-[3.864734299516908vw] md:mt-[3.679369250985545vw] md:gap-[1.1826544021024967vw]">
                            <Image class="appStore" src={appstore} />
                            <a href="https://play.google.com/store/apps/details?id=com.zeniq.app" target="_blank" rel="noreferrer">
                                <svg class="playStore" viewBox="0 0 217.62 64.05">
                                    <defs>
                                        <linearGradient id="linear-gradient" x1="0.808" y1="0.5" x2="-1.573" y2="0.5" gradientUnits="objectBoundingBox">
                                            <stop offset="0" stop-color="#f7df14" />
                                            <stop offset="0.194" stop-color="#f1cf18" />
                                            <stop offset="0.547" stop-color="#e7b31a" />
                                            <stop offset="0.828" stop-color="#e1a01b" />
                                            <stop offset="1" stop-color="#df991b" />
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-2" x1="0.863" y1="0.178" x2="-0.501" y2="1.948" gradientUnits="objectBoundingBox">
                                            <stop offset="0" stop-color="#c83b3f" />
                                            <stop offset="1" stop-color="#ab1864" />
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-3" x1="-0.507" y1="-0.956" x2="0.606" y2="0.489" gradientUnits="objectBoundingBox">
                                            <stop offset="0" stop-color="#5a9769" />
                                            <stop offset="0.317" stop-color="#70a567" />
                                            <stop offset="0.74" stop-color="#87b463" />
                                            <stop offset="1" stop-color="#90ba61" />
                                        </linearGradient>
                                    </defs>
                                    <g id="playstore" transform="translate(-1.35 -3.45)">
                                        <g id="Gruppe_21555" data-name="Gruppe 21555">
                                            <path id="Pfad_7490" data-name="Pfad 7490" d="M210.78,66.69H9.54a7.381,7.381,0,0,1-7.38-7.38V11.64A7.381,7.381,0,0,1,9.54,4.26H210.78a7.381,7.381,0,0,1,7.38,7.38V59.31A7.375,7.375,0,0,1,210.78,66.69Z" />
                                            <path id="Pfad_7491" data-name="Pfad 7491" d="M210.78,67.5H9.54a8.194,8.194,0,0,1-8.19-8.19V11.64A8.194,8.194,0,0,1,9.54,3.45H210.78a8.194,8.194,0,0,1,8.19,8.19V59.31A8.2,8.2,0,0,1,210.78,67.5ZM9.54,5.06a6.583,6.583,0,0,0-6.57,6.58V59.31a6.581,6.581,0,0,0,6.57,6.57H210.78a6.581,6.581,0,0,0,6.57-6.57V11.64a6.583,6.583,0,0,0-6.57-6.58H9.54Z" fill="#b1b1b0" />
                                        </g>
                                        <g id="Gruppe_21557" data-name="Gruppe 21557">
                                            <path id="Pfad_7492" data-name="Pfad 7492" d="M111.13,38.48A6.84,6.84,0,1,0,118,45.32,6.75,6.75,0,0,0,111.13,38.48Zm0,10.98a4.161,4.161,0,1,1,3.86-4.15A3.96,3.96,0,0,1,111.13,49.46ZM96.15,38.48a6.84,6.84,0,1,0,6.87,6.84A6.75,6.75,0,0,0,96.15,38.48Zm0,10.98a4.161,4.161,0,1,1,3.86-4.15A3.96,3.96,0,0,1,96.15,49.46ZM78.33,40.58v2.9h6.94a6.065,6.065,0,0,1-1.58,3.65,7.1,7.1,0,0,1-5.36,2.12,7.721,7.721,0,0,1,0-15.44,7.4,7.4,0,0,1,5.23,2.07l2.05-2.05a10.12,10.12,0,0,0-7.28-2.93,10.621,10.621,0,1,0,0,21.24,9.717,9.717,0,0,0,7.41-2.98,9.576,9.576,0,0,0,2.51-6.79,8.889,8.889,0,0,0-.16-1.81H78.33Zm72.87,2.25a6.36,6.36,0,0,0-5.86-4.35,6.5,6.5,0,0,0-6.45,6.84,6.69,6.69,0,0,0,6.79,6.84,6.8,6.8,0,0,0,5.7-3.03l-2.33-1.55a3.91,3.91,0,0,1-3.37,1.89,3.486,3.486,0,0,1-3.32-2.07l9.15-3.78Zm-9.32,2.28a3.755,3.755,0,0,1,3.58-3.99A2.663,2.663,0,0,1,148,42.57Zm-7.44,6.63h3.01V31.64h-3.01Zm-4.92-11.73h-.1a4.746,4.746,0,0,0-3.6-1.53,6.846,6.846,0,0,0,0,13.68,4.686,4.686,0,0,0,3.6-1.55h.1v.98c0,2.62-1.4,4.02-3.65,4.02a3.789,3.789,0,0,1-3.45-2.44l-2.62,1.09a6.524,6.524,0,0,0,6.06,4.04c3.52,0,6.5-2.07,6.5-7.13V38.89h-2.85v1.12Zm-3.45,9.45a4.16,4.16,0,0,1,0-8.29c2.05,0,3.65,1.76,3.65,4.17A3.815,3.815,0,0,1,126.07,49.46Zm39.21-17.82h-7.19V51.75h3V44.13h4.19a6.255,6.255,0,1,0,0-12.49Zm.08,9.69h-4.27V34.44h4.27a3.446,3.446,0,1,1,0,6.89Zm18.55-2.89a5.633,5.633,0,0,0-5.35,3.08l2.66,1.11a2.844,2.844,0,0,1,2.74-1.47,2.9,2.9,0,0,1,3.16,2.59v.21a6.635,6.635,0,0,0-3.13-.78c-2.87,0-5.79,1.58-5.79,4.53,0,2.69,2.35,4.42,4.99,4.42a4.239,4.239,0,0,0,3.83-1.97h.1v1.55h2.9V44C190.01,40.43,187.35,38.44,183.91,38.44Zm-.36,11.02c-.98,0-2.35-.49-2.35-1.71,0-1.55,1.71-2.15,3.18-2.15a5.312,5.312,0,0,1,2.74.67A3.647,3.647,0,0,1,183.55,49.46Zm17.02-10.58-3.44,8.72h-.1l-3.57-8.72h-3.23l5.35,12.18-3.05,6.78h3.13l8.25-18.96ZM173.54,51.74h3V31.64h-3Z" fill="#fff" />
                                            <g id="Gruppe_21556" data-name="Gruppe 21556">
                                                <path id="Pfad_7493" data-name="Pfad 7493" d="M18.32,15.63a3.194,3.194,0,0,0-.74,2.26V53.43a3.259,3.259,0,0,0,.74,2.26l.12.12L38.35,35.9v-.47L18.44,15.52Z" fill="#8fc8f1" />
                                                <path id="Pfad_7494" data-name="Pfad 7494" d="M44.99,42.53l-6.64-6.64v-.47l6.64-6.64.15.09L53,33.34c2.25,1.28,2.25,3.36,0,4.64l-7.86,4.47Z" fill="url(#linear-gradient)" />
                                                <path id="Pfad_7495" data-name="Pfad 7495" d="M45.14,42.45l-6.79-6.79L18.32,55.69c.74.78,1.96.88,3.34.1L45.14,42.45" fill="url(#linear-gradient-2)" />
                                                <path id="Pfad_7496" data-name="Pfad 7496" d="M45.14,28.87,21.66,15.53c-1.38-.78-2.6-.69-3.34.1L38.35,35.66Z" fill="url(#linear-gradient-3)" />
                                            </g>
                                        </g>
                                        <g id="Gruppe_21558" data-name="Gruppe 21558">
                                            <path id="Pfad_7497" data-name="Pfad 7497" d="M75.28,16.77A3.405,3.405,0,0,0,73,15.89a3.632,3.632,0,0,0,0,7.26,2.744,2.744,0,0,0,3.02-2.55H73.33V19.49h4.15c0,3.32-1.77,4.89-4.48,4.89a4.856,4.856,0,0,1,0-9.71,4.664,4.664,0,0,1,3.2,1.25Z" fill="#fff" />
                                            <path id="Pfad_7498" data-name="Pfad 7498" d="M84.83,14.78v1.19H80.5v3.02h3.78v1.2H80.5v2.86h4.46v1.19H79.22V14.78h5.61Z" fill="#fff" />
                                            <path id="Pfad_7499" data-name="Pfad 7499" d="M93.11,14.78v1.21H90.24v8.25H88.95V15.99H86.08V14.78Z" fill="#fff" />
                                            <path id="Pfad_7500" data-name="Pfad 7500" d="M99.23,14.78v9.46H97.95V14.78Z" fill="#fff" />
                                            <path id="Pfad_7501" data-name="Pfad 7501" d="M107.94,14.78v1.21h-2.87v8.25h-1.29V15.99h-2.87V14.78Z" fill="#fff" />
                                            <path id="Pfad_7502" data-name="Pfad 7502" d="M116.95,14.67a4.856,4.856,0,1,1-4.78,4.86A4.8,4.8,0,0,1,116.95,14.67Zm0,8.47a3.622,3.622,0,1,0-3.5-3.61A3.533,3.533,0,0,0,116.95,23.14Z" fill="#fff" />
                                            <path id="Pfad_7503" data-name="Pfad 7503" d="M129.31,24.24,125,17.11v7.13h-1.28V14.78h1.26l4.27,7.07V14.78h1.28v9.46h-1.22Z" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="mt-[21.73913043478261vw] md:mt-[6.57030223390276vw] md:mr-[10.3311432325887vw]">
                        <Image class={`app ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${nomoAppVisible && viewPort ? 'showY' : ''} ${nomoAppVisible ? 'md:showX' : ''} `} src={app} alt="nomo" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Services