import { useState, useEffect } from "react";
import useHomePage from "../hooks/useHomePage";
import homePage from '../assets/images/home-1-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom';

export default function ArrowTop() {
  const [visible, setVisible] = useState(false);
  const isHomePage = useHomePage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400); // Ajusta el valor según cuándo quieras mostrar la flecha
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
    <button
      onClick={() => {
        navigate("/")
      }}
      hidden = {isHomePage}
      className={`fixed bottom-30 right-6 z-50 p-5 rounded-full bg-indigo-600 text-white shadow-lg transition-opacity duration-300 hover:cursor-pointer ${
        visible ? "opacity-300" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Volver arriba"
    >
      <img src={homePage} alt="" className="h-8 w-8" stroke="currentColor"/>
    </button>
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-5 rounded-full bg-indigo-600 text-white shadow-lg transition-opacity duration-300 hover:cursor-pointer ${
        visible ? "opacity-300" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Volver arriba"
    >
      {/* Puedes usar un SVG o un icono de librería */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
    </div>
  );
}
