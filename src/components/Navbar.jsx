// src/components/Navbar.jsx
import MusicNoteIcon from 'mdi-react/MusicNoteIcon';
// import { useSticky } from '../utils/ui-utils';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Historia', 'Géneros', 'Artistas', 'Investigación'];

  // const isSticky = useSticky(false);

  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        //For sticky functionality
        setIsSticky(window.scrollY > 400); // Cambia "400" por la posición deseada
        //For sync li with sections
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
          }
        });

        setActiveSection(currentSection);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    // <nav className="fixed top-0 bg-gray-900 text-white shadow-lg w-full">
    <nav className={`flex-no-wrap flex w-full items-center justify-between py-2 shadow-md shadow-black/5 
                    bg-gray-900 lg:flex-wrap lg:justify-start lg:py-4
                    ${
                      isSticky ? 'shadow fixed top-0 z-50 left-0 right-0 transition duration-300 ease-in-out' : ''
                    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo o Título del Sitio */}
          <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            MúsicaCubana.sci
          </a>

          {/* Menú de Hamburguesa para móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>

          {/* Enlaces de Navegación para desktop */}
          <div className="hidden md:flex space-x-6 items-center">

            {menuItems.map(name => (
                <li key={name} id={name}
                    className={`relative group cursor-pointer flex items-center gap-1 text-gray-700 
                                hover:text-yellow-400 transition-colors
                                ${
                                  activeSection === name ? 'text-yellow-400 transition-colors' : ''
                                }`}>
                  <span>{name}</span>
                  <MusicNoteIcon size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </li>
            ))}  

          </div>
        </div>

        {/* Menú desplegable para móvil */}
        {isOpen && (
          <div className="md:hidden mt-4 space-x-6 items-center">
            {menuItems.map(name => (
                <li key={name} className="relative group cursor-pointer flex items-center gap-1 text-gray-700 hover:text-yellow-400 transition-colors">
                  <span>{name}</span>
                  <MusicNoteIcon  
                        size={20} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </li>
            ))}
            
          </div>
        )}
      </div>
    </nav>
  );
};