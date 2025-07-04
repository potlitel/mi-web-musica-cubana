const Vision= () => {
  return (
    <section id="Visión" className="bg-gray-100 py-16 mt-10">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                <path fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"></path>
            </svg>
            <h2 className="text-3xl font-extrabold text-gray-900">Nuestra Visión</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-15 sm:grid-cols-2 lg:grid-cols-3">
            {/* <div class="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <span class="text-lg font-medium">Este es el texto al lado de la imagen</span>
            </div> */}
            <div>
                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>

                </div>
                <div className="mt-5">
                    <h3 className="block font-semibold text-xl text-gray-900">Misión</h3>
                    <p className="mt-2 text-lg text-gray-500 text-justify">Difundir, preservar y promover la riqueza de la música cubana, conectando a artistas, creadores y 
                        públicos de todo el mundo. Nos comprometemos a ser un puente entre las raíces y la innovación, apoyando a los músicos cubanos en su 
                        desarrollo profesional y facilitando el acceso a su arte a nuevas generaciones y audiencias globales</p>
                </div>
            </div>


            
            <div>
                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>

                </div>
                <div className="mt-5">
                    <h3 className="block font-semibold text-xl text-gray-900">Valores</h3>
                    <p className="mt-2 text-lg text-gray-500 text-justify">Autenticidad, Colaboración, Innovación, Inclusión, Excelencia, Respeto.</p>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </div>
                <div className="mt-5">
                    <h3 className="block font-semibold text-xl text-gray-900">Visión</h3>
                    <p className="mt-2 text-lg text-gray-500 text-justify">Ser la plataforma de referencia internacional para la música cubana, impulsando su reconocimiento y
                        presencia en el escenario mundial. Aspiramos a construir una comunidad vibrante donde la tradición y la creatividad se encuentren, y 
                        donde cada artista cubano tenga la oportunidad de compartir su talento y legado con el mundo, consolidando a Cuba como un epicentro musical 
                        de excelencia y diversidad.</p>
                </div>
            </div>
        </div>

    </div>
</section>
  );
}

export default Vision;