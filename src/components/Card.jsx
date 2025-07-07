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
        <Link className="inline-block mt-4 text-yellow-500 font-semibold hover:text-yellow-600" to={`/genero/${id}`}>Ver más</Link>
      </div>
    </div>
  );
};

const loadImage = imageName => (require(`../assets/images/${imageName}`).default);