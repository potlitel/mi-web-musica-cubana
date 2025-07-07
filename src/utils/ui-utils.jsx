
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

/**
 * Makes scrolling to an element of the same page smooth by using scrollIntoView with the behavior: "smooth" option.
 * https://felo.ai/search/JBq9otexJ8cyjwGjoREJyg
 * @param {Event} event - The event to handle.
 * @param {string} id - The event id.
 */
export const scrollToElement = (event, id) => {
  // const navigate = useNavigate();
  // navigate("/");

  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' // or "start", "end", "nearest"
      });
  }
};

/**
 * Makes scrolling to a section of the same page smooth by using scrollIntoView with the behavior: "smooth" option.
 */
export const scrollToSection  = () => {
  const sectionRef = useRef(null);
  sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const scrollToSectionUsingDT = (dataTargeret) => {
  const section = document.querySelector('section[data-target='+dataTargeret+']');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const useSticky = (initialValue) => {

const [isSticky, setIsSticky] = useState(initialValue);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Cambia "100" por la posición deseada
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/**
 * Verifica si el usuario se encuentra navengando actualmente en la págino de inicio.
 * https://felo.ai/search/Jr7RSBi4E3sNH6vhrGV66E
 */
// Aquí puedes agregar lógica para determinar si estás en la página de inicio
export const checkHomePage = () => {
  // Suponiendo que tienes una forma de verificar la ruta actual
  const currentPath = window.location.pathname;
  return currentPath;
}

/*
https://felo.ai/search/Sf4tiHMmtfGuCd6aSuPZVb
*/
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Este componente no necesita renderizar nada
};