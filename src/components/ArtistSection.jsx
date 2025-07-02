import React from 'react';
import img1 from '../assets/images/PFG.jpeg'
import img2 from '../assets/images/candido-fabre.webp'
import img3 from '../assets/images/BM.jpg'
import img4 from '../assets/images/silvio-rodriguez-cuba.jpg'
import img5 from '../assets/images/GmB9SH7XkAAdY8k.jpg'
import img6 from '../assets/images/haila_big_61432.jpg'
import img7 from '../assets/images/APV.jpeg'

const ArtistSection = () => {
  return (
    <section id='Artistas' class="relative overflow-hidden bg-orange-50 mt-20">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-60 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Artistas Musicales Cubanos</h1>
          <p class="mt-4 text-xl text-gray-500">La riqueza de los artistas de la música cubana radica en su capacidad para fusionar tradiciones 
            y estilos, creando un legado musical que continúa resonando en todo el mundo. Desde ritmos contagiosos hasta letras poéticas, cada 
            artista ha aportado su voz y su talento, enriqueciendo la cultura musical no solo de Cuba, sino del mundo entero.</p>
        </div>
        <div>
          <div class="mt-10">
            {/* <!-- Decorative image grid --> */}
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src={img1} class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img3} alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img4} alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img6} alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img2} alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img5} alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={img7} alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white 
                               hover:bg-indigo-700">Ver listado</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ArtistSection;
