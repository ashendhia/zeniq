import { useState, useRef, useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import empty from '/public/FAQ/empty.png'

const Faq = () => {
    const [youtubeLink, setYoutubeLink] = useState({
        youtubeLink: undefined,
        visible: false
    });

    const viewPort = (window.innerWidth <= (414))

    const { ref: tutos, inView: tutosVisible } = useInView({ triggerOnce: true })
    const { ref: docs, inView: docsVisible } = useInView({ triggerOnce: true })

    const initialQA = [
        {
            visible: false,
            triggerOnce: 0
        },
        {
            visible: false,
            triggerOnce: 0
        },
        {
            visible: false,
            triggerOnce: 0
        },
        {
            visible: false,
            triggerOnce: 0
        },
        {
            visible: false,
            triggerOnce: 0
        }
    ]
    const refs = useRef([])
    const [qaVisible, setQaVisible] = useState(
        initialQA
    )

    const handleRef = useCallback((node, index) => {
        if (node) {
            refs.current[index] = node;
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            let newQaVisible = [...qaVisible];
            entries.forEach((entry, index) => {
                if (entry.isIntersecting && parseInt(entry.target.accessKey) === index && newQaVisible[index].triggerOnce === 0) {
                    newQaVisible[index].visible = true;
                    newQaVisible[index].triggerOnce++
                }
            })
            setQaVisible(newQaVisible)
        })
        refs.current.map(el => observer.observe(el))
    })


    const faq = [
        {
            question: "ما الذي يميز تكنولوجيا زينيك؟",
            answer: "توفر تكنولوجيا زينيك نظامًا معلوماتيا فريدًا لعملائها، والذي سيربط محفظتك المشفرة بحساب IBAN بطريقة سلسة. يمكنك تخزين جميع أصولك النقدية والعملات المشفرة والوصول إليها في النظام من خلال ZENIQ HUB الذي يتم وضعه في أمان منزلك."
        },
        {
            question: "لمن زينيك؟",
            answer: "بكل بساطة: الجميع"
        },
        {
            question: "كيف أطلب ZENIQ HUB؟",
            answer: "يمكن شراء ZENIQ HUB بسهولة من خلال شركاء التوزيع المرخصين والمعتمدين فقط. يتم جمع كل المعلومات المطلوبة من خلال عملية الطلب على مواقع الويب الخاصة بالشركاء. يرجى الاتصال بشريكنا SAFIR Global DMCC : sales@safir.com"
        },
        {
            question: "من يقف وراء زينيك؟",
            answer: "فريق من المتحمسين للعملات المشفرة والتكنولوجيا الدقيقة الذين يرون القيمة المضافة لتقنية Blockchain في الحياة اليومية، والذين يتعاملون مع blockchain منذ حوالي عشر سنوات ويأتي في الأصل من العديد من الشركات والخبرات التي تكمل بعضها البعض. بهدف تعميم استخدام تكنولوجيا التشفير في أي مجال عمل."
        },
        {
            question: "ما هي عملة زينيك؟",
            answer: "عملة زينيك هي العملة الجديدة التي تم إنشاؤها باستخدام ZENIQ blockchain لدعم النظام البيئي المالي كوسيلة لمشاركة الأرباح من خلال القيمة المضافة الناتجة عن ZENIQ Exchange. في الوقت نفسه ، سيتم استخدام عملة ZENIQ أيضًا في المستقبل لتحقيق مشاريع زينيك الحقيقية والمربحة، مع إدراج إضافي على منصات التبادل الدولية الأخرى. وبالتالي، فإن تطوير القيمة المتوقعة لعملة ZENIQ لا يرتبط فقط بمشاركة أرباح ZENIQ Exchange، ولكن أيضًا بمشاريع ZENIQ المستقبلية وكوسيلة للدفع مقابل المنتجات والخدمات داخل نظام ZENIQ المعلوماتي."
        }
    ]

    return (
        <main>
            <header class="smFaq md:mdFaq grid place-items-center">
                <div className=" justify-center items-center col gap-[1.9053876478318004vw] " >
                    <h1 class="faqBigTitle font-sans">
                        الأسئلة المتداولة
                    </h1>
                    <p class="heroDescriptionAR text-center">
                        اعثر على قائمة بالأسئلة الأكثر شيوعًا بالإضافة إلى إجاباتها!
                    </p>
                </div>
                <div class="absolute left-0 bottom-0 w-full">
                    <svg viewBox="0 0 1522 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M749.5 115.75C273 115.75 0 0 0 0V115.75V231.5H1522V115.75V0C1522 0 1226 115.75 749.5 115.75Z" fill="white" />
                    </svg>
                </div>
            </header>
            <div class="faq">
                <section id="faq" class="faqFlex">
                    {faq.map(((qa, i) => {
                        return (
                            <div dir="rtl" key={i} accessKey={i} ref={node => handleRef(node, i)} class={`qA hiddenDown ${qaVisible[i].visible && qaVisible[i].triggerOnce === 1 ? 'showY' : ''}`}>
                                <h3 class="bulletTitle font-messiri font-medium">
                                    {qa.question}
                                </h3>
                                <p class="text text-start">
                                    {qa.answer}
                                </p>
                            </div>)
                    }))
                    }
                </section>
                <hr id="seperator" class=" w-full border-[0.01971090670170828vw] border-newGrey " />
                <section ref={tutos} id="tutorials" class="col items-center" >
                    <h2 class="titleAR">
                        كيفية استخدام حساب سفير الخاص بك
                    </h2>
                    <div id="videos" class="col items-center gap-[10.144927536231885vw] md:gap-0 md:row w-full pt-[10.144927536231885VW] md:pt-[6.57030223390276vw] justify-between">
                        <div class={` tuto cursor-pointer ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${tutosVisible && viewPort ? 'showY' : ''} ${tutosVisible ? 'md:showX' : ''}`} onClick={() => {
                            setYoutubeLink({
                                youtubeLink: "https://www.youtube.com/embed/rt0RENOaYD4",
                                visible: true
                            })
                            document.body.style.overflow = "hidden";
                        }}>
                            <div class="video bg-[url('https://i.ytimg.com/vi_webp/rt0RENOaYD4/sddefault.webp')]">
                                <svg class="play" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.0782 48.5017C37.3405 48.5017 48.0917 37.7504 48.0917 24.4881C48.0917 11.2258 37.3405 0.474609 24.0782 0.474609C10.8159 0.474609 0.0646973 11.2258 0.0646973 24.4881C0.0646973 37.7504 10.8159 48.5017 24.0782 48.5017Z" fill="#D9D9D9" fill-opacity="0.7" />
                                    <path d="M17.9709 34.4686V14.5076C17.9718 14.4255 17.9946 14.3452 18.0368 14.2749C18.079 14.2045 18.1392 14.1467 18.2112 14.1074C18.2832 14.068 18.3644 14.0486 18.4464 14.051C18.5284 14.0534 18.6082 14.0776 18.6778 14.1212L34.3884 24.1017C34.4525 24.1437 34.5052 24.201 34.5417 24.2684C34.5782 24.3359 34.5973 24.4114 34.5973 24.4881C34.5973 24.5648 34.5782 24.6402 34.5417 24.7077C34.5052 24.7752 34.4525 24.8325 34.3884 24.8745L18.6778 34.855C18.6082 34.8985 18.5284 34.9227 18.4464 34.9252C18.3644 34.9276 18.2832 34.9081 18.2112 34.8688C18.1392 34.8294 18.079 34.7716 18.0368 34.7013C17.9946 34.6309 17.9718 34.5506 17.9709 34.4686Z" fill="white" fill-opacity="0.95" />
                                </svg>
                            </div>
                            <div class="description">
                                <h3 class="descriptionTitle mr-[3.6231884057971016vw] md:mr-[1.2385019710906702vw]">
                                    كيفية الإيداع
                                </h3>
                            </div>
                        </div>
                        <div class={` tuto cursor-pointer ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${tutosVisible && viewPort ? 'showY' : ''} ${tutosVisible ? 'md:showX' : ''} delay-200`} onClick={() => {
                            setYoutubeLink({
                                youtubeLink: "https://www.youtube.com/embed/EZu_TX2cJvU",
                                visible: true
                            })
                            document.body.style.overflow = "hidden";
                        }}>
                            <div class="video bg-[url('https://i.ytimg.com/vi_webp/EZu_TX2cJvU/sddefault.webp')]">
                                <svg class="play" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.0782 48.5017C37.3405 48.5017 48.0917 37.7504 48.0917 24.4881C48.0917 11.2258 37.3405 0.474609 24.0782 0.474609C10.8159 0.474609 0.0646973 11.2258 0.0646973 24.4881C0.0646973 37.7504 10.8159 48.5017 24.0782 48.5017Z" fill="#D9D9D9" fill-opacity="0.7" />
                                    <path d="M17.9709 34.4686V14.5076C17.9718 14.4255 17.9946 14.3452 18.0368 14.2749C18.079 14.2045 18.1392 14.1467 18.2112 14.1074C18.2832 14.068 18.3644 14.0486 18.4464 14.051C18.5284 14.0534 18.6082 14.0776 18.6778 14.1212L34.3884 24.1017C34.4525 24.1437 34.5052 24.201 34.5417 24.2684C34.5782 24.3359 34.5973 24.4114 34.5973 24.4881C34.5973 24.5648 34.5782 24.6402 34.5417 24.7077C34.5052 24.7752 34.4525 24.8325 34.3884 24.8745L18.6778 34.855C18.6082 34.8985 18.5284 34.9227 18.4464 34.9252C18.3644 34.9276 18.2832 34.9081 18.2112 34.8688C18.1392 34.8294 18.079 34.7716 18.0368 34.7013C17.9946 34.6309 17.9718 34.5506 17.9709 34.4686Z" fill="white" fill-opacity="0.95" />
                                </svg>
                            </div>
                            <div class="description">
                                <h3 class="descriptionTitle mr-[3.6231884057971016vw] md:mr-[1.2385019710906702vw]">
                                    كيفية سحب العملات من سفير
                                </h3>
                            </div>
                        </div>
                        <div class={` tuto cursor-pointer ${viewPort ? 'hiddenDown' : ''} md:hiddenLeft ${tutosVisible && viewPort ? 'showY' : ''} ${tutosVisible ? 'md:showX' : ''} delay-[400ms]`} onClick={() => {
                            setYoutubeLink({
                                youtubeLink: "https://www.youtube.com/embed/opXXJurrVrA",
                                visible: true
                            })
                            document.body.style.overflow = "hidden";
                        }}>
                            <div class="video bg-[url('https://i.ytimg.com/vi_webp/opXXJurrVrA/sddefault.webp')]">
                                <svg class="play" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.0782 48.5017C37.3405 48.5017 48.0917 37.7504 48.0917 24.4881C48.0917 11.2258 37.3405 0.474609 24.0782 0.474609C10.8159 0.474609 0.0646973 11.2258 0.0646973 24.4881C0.0646973 37.7504 10.8159 48.5017 24.0782 48.5017Z" fill="#D9D9D9" fill-opacity="0.7" />
                                    <path d="M17.9709 34.4686V14.5076C17.9718 14.4255 17.9946 14.3452 18.0368 14.2749C18.079 14.2045 18.1392 14.1467 18.2112 14.1074C18.2832 14.068 18.3644 14.0486 18.4464 14.051C18.5284 14.0534 18.6082 14.0776 18.6778 14.1212L34.3884 24.1017C34.4525 24.1437 34.5052 24.201 34.5417 24.2684C34.5782 24.3359 34.5973 24.4114 34.5973 24.4881C34.5973 24.5648 34.5782 24.6402 34.5417 24.7077C34.5052 24.7752 34.4525 24.8325 34.3884 24.8745L18.6778 34.855C18.6082 34.8985 18.5284 34.9227 18.4464 34.9252C18.3644 34.9276 18.2832 34.9081 18.2112 34.8688C18.1392 34.8294 18.079 34.7716 18.0368 34.7013C17.9946 34.6309 17.9718 34.5506 17.9709 34.4686Z" fill="white" fill-opacity="0.95" />
                                </svg>
                            </div>
                            <div class="description">
                                <h3 class="descriptionTitle mr-[3.6231884057971016vw] md:mr-[1.2385019710906702vw]">
                                    أين تجد عملاتك المستخرجة
                                </h3>
                            </div>
                        </div>
                    </div>
                    <button class={`${youtubeLink.visible ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] grid items-center justify-center z-[2] `} onClick={() => {
                        setYoutubeLink({
                            youtubeLink: undefined,
                            visible: false
                        })
                        document.body.style.overflow = "auto";
                    }} >
                        <svg class={` absolute w-[8.695652173913043vw] top-[40vw] right-[7.729468599033816vw] md:w-[4.204993429697766vw] md:top-[5vw] md:right-[2.102496714848883vw] `} onClick={() => {
                            setYoutubeLink({
                                youtubeLink: undefined,
                                visible: false
                            })
                            document.body.style.overflow = "auto";
                        }} viewBox="0 0 667 667" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M333.333 0C267.406 0 202.96 19.5497 148.143 56.1768C93.327 92.8039 50.6028 144.863 25.3736 205.772C0.144428 266.681 -6.45668 333.703 6.40506 398.363C19.2668 463.024 51.0137 522.418 97.6312 569.036C144.249 615.653 203.643 647.4 268.303 660.262C332.964 673.124 399.986 666.522 460.895 641.293C521.803 616.064 573.863 573.34 610.49 518.523C647.117 463.707 666.667 399.26 666.667 333.333C666.667 289.559 658.045 246.214 641.293 205.772C624.542 165.33 599.989 128.584 569.036 97.6311C538.083 66.6782 501.336 42.1251 460.895 25.3735C420.453 8.62192 377.107 0 333.333 0ZM457 409.667C460.124 412.765 462.604 416.452 464.297 420.514C465.989 424.576 466.86 428.933 466.86 433.333C466.86 437.734 465.989 442.091 464.297 446.153C462.604 450.215 460.124 453.901 457 457C453.901 460.124 450.215 462.604 446.153 464.296C442.091 465.989 437.734 466.86 433.333 466.86C428.933 466.86 424.576 465.989 420.514 464.296C416.452 462.604 412.766 460.124 409.667 457L333.333 380.667L257 457C253.901 460.124 250.215 462.604 246.153 464.296C242.091 465.989 237.734 466.86 233.333 466.86C228.933 466.86 224.576 465.989 220.514 464.296C216.452 462.604 212.766 460.124 209.667 457C206.543 453.901 204.063 450.215 202.37 446.153C200.678 442.091 199.807 437.734 199.807 433.333C199.807 428.933 200.678 424.576 202.37 420.514C204.063 416.452 206.543 412.765 209.667 409.667L286 333.333L209.667 257C203.39 250.723 199.864 242.21 199.864 233.333C199.864 224.457 203.39 215.943 209.667 209.667C215.944 203.39 224.457 199.864 233.333 199.864C242.21 199.864 250.723 203.39 257 209.667L333.333 286L409.667 209.667C415.944 203.39 424.457 199.864 433.333 199.864C442.21 199.864 450.723 203.39 457 209.667C463.277 215.943 466.803 224.457 466.803 233.333C466.803 242.21 463.277 250.723 457 257L380.667 333.333L457 409.667Z" fill="#2F353E" />
                        </svg>

                        <iframe src={` ${!youtubeLink.youtubeLink ? empty : youtubeLink.youtubeLink} `} class={`w-full md:w-[60vw] aspect-video`} ></iframe>
                    </button>
                </section>
                <section ref={docs} id="documentation" class="col items-center" >
                    <h2 class="titleAR">
                        الملفات
                    </h2>
                    <ul id="documents" class="col w-full md:w-[70.82785808147175vw] pt-[6.57030223390276vw] divide-y divide-slate-200" >
                        <li class={`col hiddenDown ${docsVisible ? 'showY' : ''} md:row items-start gap-[3.864734299516908vw] md:gap-[34.00131406044678vw] pb-[3.864734299516908vw] md:pb-[1.7739816031537452vw] `}>
                            <div class="row items-start gap-[1.8396846254927726vw]">
                                <h3 class="documentTitle">
                                    English
                                </h3>
                                <div class="documentDetails" >
                                    <p class="font-normal">
                                        30-09-22
                                    </p>
                                    <p>
                                        11.8 MB
                                    </p>
                                </div>
                            </div>
                            <a href="/files/English.pdf" class="w-[25.98067632850242vw] md:w-[11.957950065703022vw] aspect-[3.5] border-2 border-newGrey rounded-[1.2077294685990339vw] md:rounded-lg grid place-items-center" target="_blank" download>
                                <div class="row gap-[1.932367149758454vw] md:gap-[0.8311432325886992vw] ">
                                    <svg class="w-[2.4154589371980677vw] md:w-[1.1169513797634691vw]" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.7367 14.7376V2.24628C6.7367 1.33685 7.47397 0.599609 8.38337 0.599609C9.29277 0.599609 10.03 1.33685 10.03 2.24628V14.7376L13.8056 10.9619C14.4487 10.3189 15.4914 10.3189 16.1345 10.9619C16.7774 11.605 16.7774 12.6476 16.1345 13.2907L9.54779 19.8774C8.90471 20.5203 7.86204 20.5203 7.21896 19.8774L0.632326 13.2907C-0.0107426 12.6476 -0.0107426 11.605 0.632326 10.9619C1.27539 10.3189 2.318 10.3189 2.96107 10.9619L6.7367 14.7376Z" fill="#2F353E" />
                                    </svg>
                                    <h3 class="text-[2.4154589371980677vw] leading-[2.898550724637681vw] md:text-[1.0932982917214193vw] font-semibold md:leading-[1.314060446780552vw] text-newBlack ">
                                        تحميل
                                    </h3>
                                </div>
                            </a>
                        </li>
                        <li class={`col hiddenDown ${docsVisible ? 'showY' : ''} delay-200 md:row items-start gap-[3.864734299516908vw] md:gap-[34.00131406044678vw] pt-[3.864734299516908vw] md:pt-[1.7739816031537452vw]`}>
                            <div class="row items-start gap-[1.8396846254927726vw]">
                                <h3 class="documentTitle">
                                    French
                                </h3>
                                <div class="documentDetails" >
                                    <p class="font-normal">
                                        30-09-22
                                    </p>
                                    <p>
                                        11.0 MB
                                    </p>
                                </div>
                            </div>
                            <a href="/files/French.pdf" class="w-[25.98067632850242vw] md:w-[11.957950065703022vw] aspect-[3.5] border-2 border-newGrey rounded-[1.2077294685990339vw] md:rounded-lg grid place-items-center" target="_blank" download>
                                <div class="row gap-[1.932367149758454vw] md:gap-[0.8311432325886992vw] ">
                                    <svg class="w-[2.4154589371980677vw] md:w-[1.1169513797634691vw]" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.7367 14.7376V2.24628C6.7367 1.33685 7.47397 0.599609 8.38337 0.599609C9.29277 0.599609 10.03 1.33685 10.03 2.24628V14.7376L13.8056 10.9619C14.4487 10.3189 15.4914 10.3189 16.1345 10.9619C16.7774 11.605 16.7774 12.6476 16.1345 13.2907L9.54779 19.8774C8.90471 20.5203 7.86204 20.5203 7.21896 19.8774L0.632326 13.2907C-0.0107426 12.6476 -0.0107426 11.605 0.632326 10.9619C1.27539 10.3189 2.318 10.3189 2.96107 10.9619L6.7367 14.7376Z" fill="#2F353E" />
                                    </svg>
                                    <h3 class="text-[2.4154589371980677vw] leading-[2.898550724637681vw] md:text-[1.0932982917214193vw] font-semibold md:leading-[1.314060446780552vw] text-newBlack ">
                                        تحميل
                                    </h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default Faq