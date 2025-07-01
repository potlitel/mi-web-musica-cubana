// src/components/Footer.jsx
// export const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-6">
//       <div className="container mx-auto text-center px-6">
//         <p>&copy; {currentYear} MúsicaCubana.sci. Todos los derechos reservados.</p>
//         <p className="text-sm mt-2">
//           Un proyecto de investigación y divulgación.
//         </p>
//       </div>
//     </footer>
//   );
// };

// src/components/Footer.jsx
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import Icon from '@mdi/react';
// import { mdiFacebook } from '@mdi/js';
// import { mdiInstagram } from '@mdi/js';
// import { mdiTwitter } from '@mdi/js';
// import { mdiYoutube } from '@mdi/js';

export const Footer= () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-200 px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Música Cubana</h2>
          <p className="text-sm">
            Descubre el ritmo y la historia de la música cubana. Tu portal para explorar artistas, géneros y eventos.
          </p>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold mb-2">Síguenos</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              {/* <FaFacebookF size={22} /> */}
              {/* <Icon path={mdiFacebook} size={22} /> */}
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              {/* <FaInstagram size={22} /> */}
              {/* <Icon path={mdiInstagram} size={22} /> */}
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400">
              {/* <FaTwitter size={22} /> */}
              {/* <Icon path={mdiTwitter} size={22} /> */}
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500">
              {/* <FaYoutube size={22} /> */}
              {/* <Icon path={mdiYoutube} size={22} /> */}
            </a>
          </div>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="font-semibold mb-2">Contacto</h3>
          <ul className="text-sm space-y-1">
            <li>Email: info@musicacubana.com</li>
            <li>Tel: +53 555 123 456</li>
            <li>La Habana, Cuba</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {currentYear} Música Cubana. Todos los derechos reservados.
      </div>
    </footer>
  );
}
