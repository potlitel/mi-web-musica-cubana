// useHomePage.js
import { useEffect } from 'react';
import useHomeStore from '../store/useHomeStore,jsx';
import { useLocation } from 'react-router-dom';

// import { checkHomePage } from '../utils/ui-utils';
// https://felo.ai/search/es6qn627eSsLW9HWmsyMVt

const useHomePage = () => {
  const { isHomePage, setHomePage } = useHomeStore();
  const location = useLocation();
  
  useEffect(() => {
    // Aquí puedes agregar lógica para determinar si estás en la página de inicio
    const checkHomePage = () => {
      // Suponiendo que tienes una forma de verificar la ruta actual
    //   const currentPath = window.location.pathname;
      setHomePage(location.pathname === '/'); // Cambia '/' por la ruta de tu Home
    };

    checkHomePage();

    // Puedes agregar un listener para cambios en la ruta si es necesario
    // window.addEventListener('popstate', checkHomePage);

    // return () => {
    //   window.removeEventListener('popstate', checkHomePage);
    // };
  }, [location]);

  return isHomePage;
};

export default useHomePage;
