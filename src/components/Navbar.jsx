// src/components/Navbar.jsx
import { useState } from 'react';
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';
import MusicNoteIcon from 'mdi-react/MusicNoteIcon';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Historia', 'Géneros', 'Artistas', 'Investigación'];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
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
                <li key={name} className="relative group cursor-pointer flex items-center gap-1 text-gray-700 hover:text-yellow-400 transition-colors">
                  <span>{name}</span>
                  <MusicNoteIcon  
                        size={20} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
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