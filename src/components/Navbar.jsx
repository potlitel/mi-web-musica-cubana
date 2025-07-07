// src/components/Navbar.jsx
import MusicNoteIcon from 'mdi-react/MusicNoteIcon';
// import { useSticky } from '../utils/ui-utils';
import { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { scrollToElement } from '../utils/ui-utils';
import logo from '../assets/images/Gemini_Generated_Image_djd61hdjd61hdjd6-removebg-preview.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Visión', 'Investigación', 'Géneros', 'Artistas', 'Historia'];

  const navigate = useNavigate();

  const handleClick = (name) => {
    if (name != "Historia") {
        // Acción si la condición es verdadera
        goToSection(name);
    } else {
        // Acción si la condición es falsa (opcional)
        // console.log("Condición no cumplida");
        navigate(`/${name}`);
        // <Link to={`/${name}`}>{name}</Link>
    }
};

  const goToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Espera para asegurar que la página de inicio se haya cargado
  };

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
    <section id='Navbar'>
    <nav className={`flex-no-wrap flex w-full items-center justify-between py-2 shadow-md shadow-black/5 
                    bg-gray-900 lg:flex-wrap lg:justify-start
                    ${
                      isSticky ? 'shadow fixed top-0 z-50 left-0 right-0 transition duration-300 ease-in-out lg:py-1' : 'lg:py-4'
                    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo o Título del Sitio */}
          {/* <img src={logo} class="h-xs w-xs object-cover object-center" />
          <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            MúsicaCubana.sci
          </a> */}
          {/* <span class="inline-flex items-baseline">
              <img src={logo} alt="" class="self-center w-25 h-25 rounded-full mx-1" />
              <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                MúsicaCubana.sci
              </a>
          </span> */}

          <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="self-center w-15 h-15 mx-1" />
              <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                <span>MúsicaCubana.sci</span>
              </a>
          </div>

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
                <li key={name} 
                    className={`relative group cursor-pointer flex items-center gap-1 text-gray-500 font-semibold
                                hover:text-yellow-300 transition-colors block opacity-75 -mb-1
                                ${
                                  activeSection === name ? 'text-yellow-300 transition-colors' : ''
                                }`}
                    onClick={() => handleClick(name)} >
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
                 <li key={name} 
                    className={`relative group cursor-pointer flex items-center gap-1 text-gray-500 font-semibold
                                hover:text-yellow-300 transition-colors block opacity-75 -mb-1
                                ${
                                  activeSection === name ? 'text-yellow-300 transition-colors' : ''
                                }`}
                    onClick={(e) => scrollToElement(e, name)} >
                  
                  <span>{name}</span>
                  <MusicNoteIcon size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </li>
            ))}
            
          </div>
        )}
      </div>
    </nav>
    </section>
  );
};