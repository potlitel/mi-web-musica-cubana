import { useParams, Link } from 'react-router-dom';
import {generosMusicales as data} from '../data/generos.js';


export const GeneroDetails = () => {
    const { id } = useParams();
    const genero = data.find(item => item.id === id);
  
    if (!genero) {
        return <div>Género musical no encontrado</div>;
    }
    return (
    <div>
        {/* <header className="bg-white">
  <div className="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="#" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
      <span className="mr-2 text-4xl text-cyan-500">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
      </span>
      mellow
    </a>
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label className="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span className="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li className="font-bold md:mr-12"><a href="#">Blog</a></li>
        <li className="md:mr-12"><a href="#">Features</a></li>
        <li className="md:mr-12"><a href="#">Support</a></li>
        <li className="md:mr-12">
          <button className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Login</button>
        </li>
      </ul>
    </nav>
  </div>
</header> */}

<main>
  <article>
    <header className="mx-auto w-auto mt-20 max-w-screen-xl rounded-t-lg bg-white pt-16 text-center shadow-lg">
      {/* <p className="text-gray-500">Published April 4, 2022</p> */}
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Género musical: <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">{genero.title}</span></h1>
      {/* <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">{genero.title}</h1> */}
      <p className="mt-6 mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">{genero.description}</p>
      {/* <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
        <svg class="w-8 h-8 ml-6 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <p>"{genero.description}"</p>
      </blockquote> */}
      {/* <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Marketing</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Branding</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digital</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Identity</button>
      </div> */}
      {/* <img className=" top-20 left-0 mt-10 h-96 w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /> */}
      <img className=" top-20 left-0 mt-10 h-96 w-full object-cover" loading="lazy" src={genero.imageUrl} alt={genero.title} />
    </header>

    <div className="mx-auto max-w-screen-xl space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg 
                    tracking-wide text-gray-700 sm:shadow-lg p-4">
      {/* <blockquote className="max-w-lg border-l-4 px-4">
        {genero.cita}
        <span className="whitespace-nowrap text-sm">— {genero.autorCita}</span>
      </blockquote> */}
      <figure class="max-w-screen-md mx-auto text-center">
    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"{genero.cita}"</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img class="w-30 h-30 object-cover object-center rounded-full" loading="lazy" src={genero.autorCitaImg} alt="profile picture" />
        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900 dark:text-white">{genero.autorCita}</cite>
            <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">{genero.autorCitaShortBio}</cite>
        </div>
    </figcaption>
    </figure>
      <p className=''>
        {genero.descriptionLarga}
      </p>
    </div>
  </article>
</main>

<div className="w-fit mx-auto mt-10 flex space-x-2">
  <div className="h-0.5 w-2 bg-gray-600"></div>
  <div className="h-0.5 w-32 bg-gray-600"></div>
  <div className="h-0.5 w-2 bg-gray-600"></div>
</div>

<aside aria-label="Recent Posts" className="mx-auto mt-10 max-w-screen-xl py-20">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* <!-- Heading --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
    </div>
    {/* <!-- /Heading --> */}
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      {/* <!-- Article --> */}
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">The Pines and the Mountains</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
      {/* <!-- /Article -->

      <!-- Article --> */}
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">The Coding Mania</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
      {/* <!-- /Article -->

      <!-- Article --> */}
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">Architectural Warfare</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
      {/* <!-- /Article -->

      <!-- Article --> */}
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">Blues in Architechture</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
      {/* <!-- /Article --> */}
    </div>
  </div>
</aside>

    </div>
  );
};