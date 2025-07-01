
import React, { useState, useEffect } from 'react';



/**
 * Makes scrolling to a section of the same page smooth by using scrollIntoView with the behavior: "smooth" option.
 * @param {Event} event - The event to handle.
 * @param {string} id - The event id.
 */
export const scrollToElement = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
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