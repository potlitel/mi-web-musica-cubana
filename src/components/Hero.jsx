// src/components/Hero.jsx
import TypingEffect from './TypingEffect';
import { scrollToElement, scrollToSection, scrollToSectionUsingDT } from '../utils/ui-utils';

export const Hero = () => {
  return (
    // Podrías añadir una imagen de fondo aquí con bg-[url('/path/to/image.jpg')]
    <div className="bg-gray-800 text-white text-center py-30 px-6" style={{ 
  backgroundImage: `url('src/assets/images/vibrant-latin-musicians-cuban-dancers-performing-salsa-bachata_1322206gg-17529.avif')`,
  backgroundRepeat: 'no-repeat',
}}>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-yellow-400">
        {/* La Riqueza Sonora de Cuba */}
         <TypingEffect />
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
        Una exploración científica de los ritmos, historias y figuras que definen la música cubana.
      </p>
      <a href="#Géneros" 
         onClick={(e) => scrollToElement(e, 'Géneros')} 
         className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full 
                    hover:bg-yellow-300 transition-transform transform hover:scale-105">
          Explorar Ahora
      </a>
    </div>
  );
};