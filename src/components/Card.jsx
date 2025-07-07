import { Link } from 'react-router-dom';

// src/components/Card.jsx
export const Card = ({ title, description, imageUrl, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img className="w-full h-48 object-cover" loading="lazy" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
        {/* <a href="#" className="inline-block mt-4 text-yellow-500 font-semibold hover:text-yellow-600">
          Saber más &rarr;
        </a> */}
        {/* <Link className="inline-block mt-4 text-yellow-500 font-semibold hover:text-yellow-600" to={`/genero/${id}`}>Ver más</Link> */}
        <Link className="inline-flex items-center mt-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
                         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                         dark:focus:ring-blue-800" to={`/genero/${id}`}>
                    Ver más
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
        </Link>
      </div>
    </div>
  );
};

const loadImage = imageName => (require(`../assets/images/${imageName}`).default);