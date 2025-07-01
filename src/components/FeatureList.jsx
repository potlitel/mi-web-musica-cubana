import img1 from '../assets/images/vibrant-latin-musicians-cuban-dancers-performing-salsa-bachata_1322206-11737.avif'
import img2 from '../assets/images/vibrant-latin-musicians-cuban-dancers-performing-salsa-bachata_1322206-17480.avif'
import img3 from '../assets/images/vibrant-latin-musicians-cuban-dancers-performing-salsa-bachata_1322206-17529.avif'


const FeatureList = () => {
  return (
    <section id="FeatureList" className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">

        <div class="mb-16 text-center">
            {/* <h4 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Ritmo contagioso</h4> */}
            <p class="mt-2 text-5xl lg:text-5xl font-bold tracking-tight text-white">Riqueza instrumental y fusión tradicional</p>
        </div>

    {/* <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">Ritmo contagioso, riqueza instrumental y capacidad de fusionar tradiciones africanas y europeas</h2>
    </div> */}

    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Fusión de raíces africanas y españolas:
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            La música cubana surge de la mezcla de ritmos africanos (especialmente en la percusión y los patrones rítmicos) y melodías, 
                            armonías y lírica españolas. Esta combinación ha dado lugar a una rica variedad de géneros y estilos propios de la isla.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        // style={{color:transparent}}
                        src={img1}/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Polirritmia y síncopa:
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            La música cubana se caracteriza por la superposición de varios patrones rítmicos independientes (polirritmia), especialmente en 
                            la percusión y el bajo sincopado, lo que le da un carácter dinámico y bailable.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        // style={{color:transparent}} 
                        src={img2}/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Relación con el baile y la vida social:
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            La música cubana está profundamente ligada al baile y a la vida cotidiana de la isla. El baile en pareja (como en el son y la salsa) 
                            y las coreografías grupales (como la rueda de casino en la salsa cubana) son parte esencial de su expresión cultural.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="646" height="485"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        // style={{color:transparent}}
                        src={img3}/>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default FeatureList;