import React from 'react';
import img1 from '../assets/images/PFG.jpeg'
import img2 from '../assets/images/candido-fabre.webp'
import img3 from '../assets/images/BM.jpg'
import img4 from '../assets/images/silvio-rodriguez-cuba.jpg'
import img5 from '../assets/images/GmB9SH7XkAAdY8k.jpg'
import img6 from '../assets/images/haila_big_61432.jpg'
import img7 from '../assets/images/APV.jpeg'
import { Link } from 'react-router-dom';

const ArtistSection = () => {
  return (
    <section id='Artistas' className="relative overflow-hidden bg-orange-50 mt-20">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-60 lg:pb-48">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Artistas Musicales Cubanos</h1>
          <p className="mt-4 text-xl text-gray-500">La riqueza de los artistas de la música cubana radica en su capacidad para fusionar tradiciones 
            y estilos, creando un legado musical que continúa resonando en todo el mundo. Desde ritmos contagiosos hasta letras poéticas, cada 
            artista ha aportado su voz y su talento, enriqueciendo la cultura musical no solo de Cuba, sino del mundo entero.</p>
        </div>
        <div>
          <div className="mt-10">
            {/* <!-- Decorative image grid --> */}
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src={img1} loading="lazy" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img3} loading="lazy" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img4} loading="lazy" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img6} loading="lazy" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img2} loading="lazy" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img5} loading="lazy" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img7} loading="lazy" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white 
                               hover:bg-indigo-700">
                                Ver listado
            </a> */}
            {/* <Link to="/artists" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"></Link> */}
            <Link to="/artists" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 
                                           rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
                                           dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver listado
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ArtistSection;
