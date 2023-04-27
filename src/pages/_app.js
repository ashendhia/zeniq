import { useState, useEffect, useRef } from "react"
import Link from 'next/link';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  let top;

  // ? State Variables

  let lg;
  let lgRt;
  let nav;
  let foot;

  const navBarTable = {
    en: {
      home: "Home",
      project: "Project",
      invest: "Invest",
      services: "Services",
      faq: "FAQ",
      contact: "Contact"
    },
    fr: {
      home: "Accueil",
      project: "Projet",
      invest: "Investir",
      services: "Services",
      faq: "FAQ",
      contact: "Contact"
    },
    ar: {
      home: "الرئيسية",
      project: "المشروع",
      invest: "استثمر",
      services: "الخدمات",
      faq: "التعليمات",
      contact: "التواصل"

    }
  }
  const footerTable = {
    en: {
      started: {
        start: "Ready to get started?",
        join: "Join us"
      },
      about: {
        title: "About",
        story: "My Story",
        project: "ZENIQ SAFIR",
        zhub: "ZENIQ Hub"
      },
      discover: {
        title: "Discover",
        zcoin: "ZENIQ Coin",
        tdrone: "TDRONE",
        tupan: "TUPAN",
        sidi: "SIDI TOKEN",
        reg: "REGARDLESS",
        zpay: "ZENIQ Pay",
        zexc: "ZENIQ Exchange",
        nomo: "Nomo"
      },
      help: {
        title: "Help",
        doc: "Documentation",
        faq: "FAQs",
        contact: "Contact"
      }
    },
    fr: {
      started: {
        start: "Prêt à commencer?",
        join: "Rejoignez-nous"
      },
      about: {
        title: "A propos",
        story: "Bio",
        project: "ZENIQ SAFIR",
        zhub: "ZENIQ Hub"
      },
      discover: {
        title: "Découvrir",
        zcoin: "ZENIQ Coin",
        tdrone: "TDRONE",
        tupan: "TUPAN",
        sidi: "SIDI TOKEN",
        reg: "REGARDLESS",
        zpay: "ZENIQ Pay",
        zexc: "ZENIQ Exchange",
        nomo: "Nomo"
      },
      help: {
        title: "Aide",
        doc: "Documentation",
        faq: "FAQs",
        contact: "Contact"
      }
    },
    ar: {
      started: {
        start: "هل أنت مستعد؟",
        join: "انظم الٱن"
      },
      about: {
        title: "عامة",
        story: "نبذة عني",
        project: "زينيك سفير",
        zhub: "ZENIQ Hub"
      },
      discover: {
        title: "اكتشف",
        zcoin: "عملة زينيك",
        tdrone: "TDRONE",
        tupan: "TUPAN",
        sidi: "SIDI TOKEN",
        reg: "REGARDLESS",
        zpay: "ZENIQ Pay",
        zexc: "ZENIQ Exchange",
        nomo: "Nomo"
      },
      help: {
        title: "التعليمات",
        doc: "الملفات",
        faq: "أسئلة و أجوبة",
        contact: "التواصل"
      }

    }

  }

  const [rotate, setRotate] = useState(180)
  const [viewPort, setViewPort] = useState(1522)
  const [lang, setLang] = useState("")
  const [langRoute, setLangRoute] = useState("")
  const [currentRoute, setCurrentRoute] = useState("")
  const [navBar, setNavBar] = useState(null)
  const [footer, setFooter] = useState(null)
  const [isFixed, setIsFixed] = useState(false);
  const ref = useRef(null);


  const [navOptions, setNavOptions] = useState(false)
  const [langList, setLangList] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  // ? Use Effect to initialize the State Variables

  useEffect(() => {

    if (window.location.pathname.substring(0, 3) === "/fr") {
      lg = "FRANÇAIS"
      lgRt = "/fr"
      nav = navBarTable.fr
      foot = footerTable.fr
    }
    else if (window.location.pathname.substring(0, 3) === "/ar") {
      lg = "العربية"
      lgRt = "/ar"
      nav = navBarTable.ar
      foot = footerTable.ar

    }
    else {
      lg = "ENGLISH"
      lgRt = "/en"
      nav = navBarTable.en
      foot = footerTable.en
    }

    setLang(lg)
    setLangRoute(lgRt)
    setNavBar(nav)
    setFooter(foot)
    setCurrentRoute(window.location.pathname)

    window.innerWidth >= 768 ? setViewPort(1522) : setViewPort(414);

    window.innerWidth >= 768 ? setNavOptions(true) : setNavOptions(false);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  if (footer === null) return null

  // ? Language Button Component

  const LanguageButton = ({ langList, setLangList }) => {
    if (langList === false) {
      return (
        <button class="" id="language" style={{ display: navOptions ? 'flex' : 'none' }} onClick={() => setLangList(!langList)} >
          <div class={` row items-center mt-[9.66183574879227vw] md:mr-[1.1826544021024967vw] ${isFixed ? 'md:mt-[1.445466491458607vw]' : 'md:mt-[3.088042049934297vw]'} gap-[3.6231884057971016vw] md:gap-[0.7227332457293035vw]`}>
            <svg class="w-[6.144927536231885vw] md:w-[1.3797634691195795vw]" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4513 1C7.93598 1.0129 5.52846 2.02281 3.7567 3.80825C1.98494 5.59369 0.993582 8.00891 1.00003 10.5242C1.00648 13.0396 2.01021 15.4497 3.7911 17.226C5.57199 19.0023 7.98466 19.9999 10.5 19.9999C13.0153 19.9999 15.428 19.0023 17.2089 17.226C18.9898 15.4497 19.9935 13.0396 20 10.5242C20.0064 8.00891 19.0151 5.59369 17.2433 3.80825C15.4715 2.02281 13.064 1.0129 10.5487 1H10.4513Z" stroke="white" stroke-width="1.26667" />
              <path d="M10.5 1V20M20 10.5H1M3.14359 4.65385C5.29072 6.18564 7.86247 7.00898 10.5 7.00898C13.1375 7.00898 15.7093 6.18564 17.8564 4.65385M17.8564 16.3462C15.7093 14.8144 13.1375 13.991 10.5 13.991C7.86247 13.991 5.29072 14.8144 3.14359 16.3462M9.76923 1.24359C8.41544 2.3869 7.32743 3.81183 6.58111 5.41897C5.8348 7.02611 5.44815 8.77674 5.44815 10.5487C5.44815 12.3207 5.8348 14.0713 6.58111 15.6785C7.32743 17.2856 8.41544 18.7105 9.76923 19.8538M11.2308 19.8538C12.5846 18.7105 13.6726 17.2856 14.4189 15.6785C15.1652 14.0713 15.5519 12.3207 15.5519 10.5487C15.5519 8.77674 15.1652 7.02611 14.4189 5.41897C13.6726 3.81183 12.5846 2.3869 11.2308 1.24359" stroke="white" stroke-width="0.876923" />
            </svg>
            <p class="navTitleSm md:navTitle md:text-left font-bold md:w-[4.7963206307490145vw] md:font-bold">
              {lang}
            </p>
          </div>
        </button>
      )
    }
    return (
      <button class="" id="language" onClick={() => setLangList(!langList)} >
        <div style={{ display: navOptions ? 'flex' : 'none' }} class={`row items-start gap-[3.6231884057971016vw] md:gap-[0.7227332457293035vw] ml-[2.1739130434782608vw] ${isFixed ? 'md:mt-[0.328515111695138vw]' : 'md:mt-[1.971090670170828vw]'} md:pl-[0.985545335085414vw] md:pt-[1.1169513797634691vw] mt-[9.66183574879227vw] w-auto md:w-[9.00131406044678vw] aspect-[1.1048387096774193] md:bg-gradient-to-b md:from-[#1F05A0] md:to-[#0F045E] rounded-[1.0512483574244416vw]`}>
          <svg class="w-[6.144927536231885vw] md:w-[1.3797634691195795vw]" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4513 1C7.93598 1.0129 5.52846 2.02281 3.7567 3.80825C1.98494 5.59369 0.993582 8.00891 1.00003 10.5242C1.00648 13.0396 2.01021 15.4497 3.7911 17.226C5.57199 19.0023 7.98466 19.9999 10.5 19.9999C13.0153 19.9999 15.428 19.0023 17.2089 17.226C18.9898 15.4497 19.9935 13.0396 20 10.5242C20.0064 8.00891 19.0151 5.59369 17.2433 3.80825C15.4715 2.02281 13.064 1.0129 10.5487 1H10.4513Z" stroke="white" stroke-width="1.26667" />
            <path d="M10.5 1V20M20 10.5H1M3.14359 4.65385C5.29072 6.18564 7.86247 7.00898 10.5 7.00898C13.1375 7.00898 15.7093 6.18564 17.8564 4.65385M17.8564 16.3462C15.7093 14.8144 13.1375 13.991 10.5 13.991C7.86247 13.991 5.29072 14.8144 3.14359 16.3462M9.76923 1.24359C8.41544 2.3869 7.32743 3.81183 6.58111 5.41897C5.8348 7.02611 5.44815 8.77674 5.44815 10.5487C5.44815 12.3207 5.8348 14.0713 6.58111 15.6785C7.32743 17.2856 8.41544 18.7105 9.76923 19.8538M11.2308 19.8538C12.5846 18.7105 13.6726 17.2856 14.4189 15.6785C15.1652 14.0713 15.5519 12.3207 15.5519 10.5487C15.5519 8.77674 15.1652 7.02611 14.4189 5.41897C13.6726 3.81183 12.5846 2.3869 11.2308 1.24359" stroke="white" stroke-width="0.876923" />
          </svg>
          <div dir="ltr" class="col items-start text-left md:mt-[0.1314060446780552vw] gap-[4.830917874396135vw] md:gap-[1.0512483574244416vw]">
            <Link href={`/en/${currentRoute.substring(4)}`} class="navTitleSm md:navTitle font-bold md:font-bold" onClick={() => {
              document.querySelector("html").setAttribute("lang", "en")
              document.documentElement.style.textAlign = "left";
              setLang("ENGLISH")
              setLangRoute("/en")
              setCurrentRoute(`/en/${currentRoute.substring(4)}`)
              setNavBar(navBarTable.en)
              setFooter(footerTable.en)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
            }}>
              ENGLISH
            </Link>

            <Link href={`/fr/${currentRoute.substring(4)}`} class="navTitleSm md:navTitle font-bold md:font-bold" onClick={() => {
              document.querySelector("html").setAttribute("lang", "fr")
              document.documentElement.style.textAlign = "left";
              setLang("FRANÇAIS")
              setLangRoute("/fr")
              setCurrentRoute(`/fr/${currentRoute.substring(4)}`)
              setNavBar(navBarTable.fr)
              setFooter(footerTable.fr)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
            }}>
              FRANÇAIS
            </Link>

            <Link href={`/ar/${currentRoute.substring(4)}`} class="navTitleARSm text-[4.5893719806763285vw] leading-[5.555555555555555vw] md:navTitleAR font-bold md:font-bold" onClick={() => {
              document.querySelector("html").setAttribute("lang", "ar")
              document.documentElement.style.textAlign = "right";
              setLang("العربية")
              setLangRoute("/ar")
              setCurrentRoute(`/ar/${currentRoute.substring(4)}`)
              setNavBar(navBarTable.ar)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
              setFooter(footerTable.ar)
            }}>
              العربية
            </Link>
          </div>
        </div>
      </button>
    )

  }

  return (
    <div>
      <header
        class={` ${((viewPort === 414) && navOptions) || isFixed ? 'navBg' : 'bg-none'} ${viewPort === 1522 ? `md:pr-[${langList * 100 / viewPort}vw]` : `pr-[6.763285024154589vw]`} ${navOptions ? 'pb-[11.11111111111111vw]' : 'pb-[8.695652173913043vw]'} pt-[6.763285024154589vw] fixed ${isFixed ? 'md:pb-[1.314060446780552vw]' : 'md:pb-[2.8252299605781865vw]'}  md:pt-0 md:mt-0 col md:row items-center md:items-start justify-between w-full pl-[6.763285024154589vw] md:pl-[6.964520367936925vw] z-[2] transition-all duration-500 ease-in-out`}>
        <div class="row w-full justify-between">
          <Link href={`${langRoute}/home`} onClick={() => {
            setCurrentRoute(`${langRoute}/home`)
          }}>
            <svg id="Logo" class={`w-[31.40096618357488vw] md:w-[8.541392904073588vw] mt-0 ${isFixed ? 'md:mt-[1.314060446780552vw]' : 'md:mt-[2.8252299605781865vw]'}`} viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7449 22V20.3806L46.0748 7.15918H36.9866V5.3222H48.5885V6.94164L39.2586 20.163H48.8302V22H36.7449ZM58.2474 22V5.3222H69.1242V7.15918H60.2777V12.3317H68.3991V14.1687H60.2777V20.163H69.1242V22H58.2474ZM78.547 22V5.3222H80.7949L89.5689 18.8578V5.3222H91.5992V22H89.3513L80.5773 8.4644V22H78.547ZM101.986 22V5.3222H104.016V22H101.986ZM114.16 18.3019V9.02032C114.16 6.55491 115.393 5.3222 117.858 5.3222H123.514C125.98 5.3222 127.212 6.55491 127.212 9.02032V18.3261C127.212 20.5659 126.157 21.7663 124.046 21.9275L125.69 25.1422L125.424 25.6256H123.708L121.871 22H117.858C115.393 22 114.16 20.7673 114.16 18.3019ZM116.19 18.5194C116.19 19.6152 116.738 20.163 117.834 20.163H123.538C124.634 20.163 125.182 19.6152 125.182 18.5194V8.80279C125.182 7.70705 124.634 7.15918 123.538 7.15918H117.834C116.738 7.15918 116.19 7.70705 116.19 8.80279V18.5194Z" fill="white" />
              <path d="M12.002 3.49837C11.8588 3.4987 11.7155 3.55213 11.6074 3.65844L6.31777 8.51114L7.78715 8.55357L12.0693 8.55156C12.3723 8.54095 11.7662 8.56217 12.0693 8.55156L16.1894 8.56194L17.522 8.53926L12.3971 3.65667C12.2886 3.55085 12.1453 3.49804 12.002 3.49837V3.49837ZM20.5319 11.5855L20.0446 11.5859L19.4851 14.9642C19.5713 15.0482 23.6804 15.2576 23.5945 15.342L12.1486 26.6024C12.0628 26.6869 11.932 26.6871 11.8457 26.603L4.58581 15.0334C4.52181 14.9314 4.50005 15.1178 4.58581 15.0334L4.01559 11.6047L3.52939 11.6054L0.161478 14.9187C-0.0546579 15.1314 -0.0536547 15.4802 0.163475 15.6918L11.603 26.8418C11.8201 27.0534 12.1763 27.0526 12.3925 26.84L23.8384 15.5799C24.0546 15.3672 24.0538 15.0182 23.8366 14.8066L20.5319 11.5855ZM16.0235 11.5908L15.5365 11.5912L19.2423 15.203C19.2717 15.2317 19.2718 15.2707 19.2424 15.2995L12.0839 22.341C12.0546 22.3698 12.0148 22.37 11.9854 22.3412L4.82991 15.3675C4.80049 15.3388 4.80033 15.2998 4.82976 15.271L8.56237 11.5994L4.01566 11.6047L4.58588 15.0334C4.42628 15.1904 10.8335 25.089 10.9938 25.2452L11.8458 26.603C12.0061 26.7593 11.989 26.7594 12.1486 26.6024L23.5945 15.342C23.7541 15.185 20.205 11.7422 20.0446 11.5859L16.0235 11.5908Z" fill="white" fill-opacity="0.95" />
            </svg>
          </Link>
          <button style={{ display: viewPort === 1522 ? 'none' : 'block' }} class="w-[6.763285024154589vw] visibile md:hidden " onClick={() => setNavOptions(!navOptions)}>
            <svg class=" w-full" style={{ display: !navOptions ? 'block' : 'none' }} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.375 7H23.625M4.375 14H23.625M4.375 21H23.625" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg class="w-[4.3478260869565215vw]" style={{ display: navOptions ? 'block' : 'none' }} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00989 7.24034L15.6154 0.652747C16.1041 0.165169 16.8955 0.166086 17.3831 0.654797C17.8707 1.14351 17.8698 1.93497 17.3811 2.42257L10.7784 9.00736L17.3782 15.6016C17.8666 16.0895 17.8668 16.881 17.3789 17.3693C16.8909 17.8577 16.0994 17.8579 15.6111 17.37L9.00824 10.7727L2.40313 17.36C1.9144 17.8475 1.12295 17.8466 0.635355 17.3579C0.147757 16.8692 0.148695 16.0777 0.637406 15.5901L7.23971 9.00572L0.643851 2.41546C0.155511 1.92749 0.155238 1.13603 0.643206 0.647688C1.13118 0.159348 1.92264 0.159075 2.41098 0.647044L9.00987 7.24034H9.00989Z" fill="white" />
            </svg>
          </button>
        </div>
        <div class={`col items-center md:ml-[30.88042049934297vw] md:w-[55.190538764783184vw] md:row md:absolute md:justify-between md:items-start ${navOptions ? 'pt-[6.763285024154589vw]' : 'pt-0'} md:p-0 `}>
          <div style={{ display: navOptions ? 'flex' : 'none' }} class={` col items-center ${isFixed ? 'md:mt-[1.64257555847569vw]' : 'md:mt-[3.28515111695138vw]'}  md:row navTitle gap-[8.695652173913043vw] md:gap-[2.3653088042049935vw] `}>
            <hr style={{ display: viewPort === 1522 ? 'none' : 'block' }} class="w-[100vw] border-[0.12077294685990338vw] border-[#65B1F4]" />
            <Link href={`${langRoute}/home`} onClick={() => {
              setCurrentRoute(`${langRoute}/home`)
            }}>
              {navBar.home}
            </Link>
            <Link href={`${langRoute}/home/project`} scroll={false} onClick={() => {
              setCurrentRoute(`${langRoute}/project`)
              setTimeout(() => {
                top = getOffset(document.getElementById("About Zeniq")).top
                window.scrollTo({
                  top: (top - 100),
                  left: 0,
                  behavior: 'smooth'
                })
              }, 0)
            }}>
              {navBar.project}
            </Link>
            <Link href={`${langRoute}/invest`} onClick={() => {
              setCurrentRoute(`${langRoute}/invest`)
            }}>
              {navBar.invest}
            </Link>
            <Link href={`${langRoute}/services`} onClick={() => {
              setCurrentRoute(`${langRoute}/services`)
            }}>
              {navBar.services}
            </Link>
            <Link href={`${langRoute}/faq`} onClick={() => {
              setCurrentRoute(`${langRoute}/faq`)
            }}>
              {navBar.faq}
            </Link>
            <Link href={`${langRoute}/home/contact`} scroll={false} onClick={() => {
              setCurrentRoute(`${langRoute}/home/contact`)
              setTimeout(() => {
                top = getOffset(document.getElementById("Contact")).top
                window.scrollTo({
                  top: (top - 100),
                  left: 0,
                  behavior: 'smooth'
                })
              }, 0)
            }}>
              {navBar.contact}
            </Link>
            <hr style={{ display: viewPort === 1522 ? 'none' : 'block' }} class="w-[77.29468599033817vw] border-[0.12077294685990338vw] border-[#65B1F4]" />
          </div>
          <LanguageButton langList={langList} setLangList={setLangList} />
        </div>
      </header>
      <Component {...pageProps} />
      <footer class=" relative w-full mt-[15.458937198067632vw] md:mt-[9.526938239159001vw] col justify-center items-center bg-newGrey gap-[3.942181340341656vw]">
        <div class="col gap-[15.458937198067632vw] md:row md:gap-[11.235216819973719vw] items-center md:items-start">
          <div class="col items-center gap-[7.729468599033816vw] md:gap-[2.102496714848883vw]">
            <h2 class="getStarted">
              {footer.started.start}
            </h2>
            <a href="https://safir.com/backoffice/ref/p2khytgzn2" target="_blank" class={` ${(lang === "ENGLISH" || lang === "FRANÇAIS") ? 'joinBtn' : 'joinBtnAR'} m-0 `} rel="noreferrer" >
              {footer.started.join}
            </a>
          </div>
          <div class="row flex-wrap w-[74vw] gap-[20vw] md:w-auto md:gap-[11.235216819973719vw]">
            <div class="footerCol">
              <h3 class="footerTitle">
                {footer.about.title}
              </h3>
              <Link href={`${langRoute}/home/me`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/home/me`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("About Me")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.about.story}
              </Link>
              <Link href={`${langRoute}/home/project`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/home/project`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("About Zeniq")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.about.project}
              </Link>
              <Link href={`${langRoute}/home/zeniqhub`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/home/zeniqhub`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Zeniq Hub")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.about.zhub}
              </Link>
              <Link href={`${langRoute}/services/zpay`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/services/zpay`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Zeniq Pay")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.zpay}
              </Link>
              <Link href={`${langRoute}/services/zexc`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/services/zexc`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Zeniq Exchange")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.zexc}
              </Link>
              <Link href={`${langRoute}/services/nomo`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/services/nomo`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Nomo")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.nomo}
              </Link>
            </div>
            <div class="footerCol">
              <h3 class="footerTitle">
                {footer.discover.title}
              </h3>
              <Link href={`${langRoute}/services/zcoin`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/services/zcoin`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Zeniq Coin")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.zcoin}
              </Link>
              <Link href={`${langRoute}/invest/tdrone`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/invest/tdrone`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Latest")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.tdrone}
              </Link>
              <Link href={`${langRoute}/invest/tupan`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/invest/tupan`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Tupan Token")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.tupan}
              </Link>
              <Link href={`${langRoute}/invest/sidi`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/invest/sidi`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Sidi")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.sidi}
              </Link>
              <Link href={`${langRoute}/invest/regardless`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/invest/regardless`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Regardless")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.discover.reg}
              </Link>
            </div>
            <div class="footerCol">
              <h3 class="footerTitle">
                {footer.help.title}
              </h3>
              <Link href={`${langRoute}/faq/documentation`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/faq/documentation`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("documentation")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.help.doc}
              </Link>
              <Link href={`${langRoute}/faq`} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/faq`)
              }}>
                {footer.help.faq}
              </Link>
              <Link href={`${langRoute}/home/contact`} scroll={false} class="footerLink" onClick={() => {
                setCurrentRoute(`${langRoute}/home/contact`)
                setTimeout(() => {
                  top = getOffset(document.getElementById("Contact")).top
                  window.scrollTo({
                    top: (top - 100),
                    left: 0,
                    behavior: 'smooth'
                  })
                }, 0)
              }}>
                {footer.help.contact}
              </Link>
            </div>
          </div>
        </div>
        <div ref={ref} style={{ backgroundImage: "url(https://safir.com/backoffice/bannerfiles/background_border_lg.png)" }} className="relative w-1/2 bannerSmall bg-cover">
          <div>
            <img src="https://safir.com/backoffice/bannerfiles/Pfeil_runter.svg" alt className=" cursor-pointer absolute w-[1.971090670170828vw] right-[1.971090670170828vw] top-[1.971090670170828vw] z-[2] transition all duration-300 " onClick={(e) => {
              if (rotate === 180) {
                setRotate(0)
                ref.current.classList.remove("banner")
                ref.current.classList.add("bannerSmall")
                e.target.classList.remove("rotate-180")
              } else {
                setRotate(180)
                ref.current.classList.remove("bannerSmall")
                ref.current.classList.add("banner")
                e.target.classList.add("rotate-180")
              }
            }} />

            <div className="w-full h-[3.28515111695138vw] absolute top-0 left-0 z-[1]" />
          </div>
          <iframe src="https://safir.com/backend/banner-markup/5d3d280e-4dc4-4cff-be3f-d1f38e912a5d" className="font-sans w-full h-full" ></iframe>
        </div>
      </footer>
    </div>
  )
}