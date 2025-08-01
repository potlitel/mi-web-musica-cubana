// src/pages/Inicio.jsx
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import TimelineHistoria from '../components/TimelineHistoria';
import FeatureList from '../components/FeatureList';
import Vision from '../components/Vision';
import {Investigation} from '../components/Investigation';
import { eventosHistoria } from '../data/eventosHistoria';
import ArrowTop from '../components/ArrowTop';
import { useRef } from 'react';
import ArtistSection from '../components/ArtistSection';

// Imágenes de ejemplo. Reemplázalas por las tuyas en la carpeta `src/assets/`
// O usa URLs de un servicio como unsplash.com para prototipar.
const generos = [
  {
    "id": "1",
    title: 'Son Cubano',
    description: 'La columna vertebral de la música salsa. Una fusión de influencias españolas y africanas.',
    imageUrl: `src/assets/images/SonCubano.jpeg`
  },
  {
    "id": "2",
    title: 'Rumba',
    description: 'Un complejo rítmico de percusión y baile que es el corazón de la cultura afrocubana.',
    imageUrl: `src/assets/images/Rumba.jpg`
  },
  {
    "id": "3",
    title: 'Mambo',
    description: 'Evolución del danzón con ritmo más rápido y enérgico, muy popular para bailar.',
    imageUrl: `src/assets/images/Danzon.jpg`
  },
  {
    "id": "4",
    title: 'Cha-Cha-Chá',
    description: 'Derivado del danzón y el mambo, es un ritmo bailable con un paso característico que lo hace muy popular en la música cubana y latina.',
    imageUrl: `src/assets/images/Chachacha.jpeg`
  },
  {
    "id": "5",
    title: 'Bolero',
    description: 'Género romántico y melódico, con letras sentimentales y ritmo lento. Muy influyente en la música latina en general.',
    imageUrl: `src/assets/images/Bolero.jpg`
  },
  {
    "id": "6",
    title: 'Guaracha',
    description: 'Música rápida y alegre, con letras humorísticas o satíricas, muy popular en la música popular cubana.',
    imageUrl: `src/assets/images/Guaracha.jpg`
  },
  {
    "id": "7",
    title: 'Changüí',
    description: 'Ritmo ancestral de las lomas de Guantánamo, considerado la raíz del son cubano. Usa instrumentos como el tres, maracas y marímbula, y tiene un ritmo sincopado y festivo.',
    imageUrl: `src/assets/images/Changüí.jpg`
  },
  {
    "id": "8",
    title: 'Punto Cubano',
    description: 'Música campesina con fuerte influencia española y africana, caracterizada por la décima improvisada y el uso de guitarra, laúd y tres. Es tradicional en zonas rurales y urbanas.',
    imageUrl: `src/assets/images/PuntoCubano.jpg`
  },
  {
    "id": "9",
    title: 'Timba',
    description: 'Evolución moderna de la salsa cubana, con influencias del jazz, funk y música popular cubana, muy rítmica y bailable.',
    imageUrl: `src/assets/images/Timba.webp`
  },
  {
    "id": "10",
    title: 'Salsa',
    description: 'Aunque nació en Nueva York, la salsa tiene raíces profundas en la música cubana, especialmente en el son y otros ritmos afrocubanos. Tiene subgéneros como salsa dura, romántica y timba.',
    imageUrl: `src/assets/images/Salsa.jpg`
  }

];

export const Inicio = () => {
  const sectionRef = useRef();

  return (
    <div>
      <Hero />
      <Vision/>
      <Investigation />
      <FeatureList />

      {/* <section id="historia" className="bg-white">
        <TimelineHistoria eventos={eventosHistoria} />
      </section> */}

      <section ref={sectionRef} data-target="desired-section" id="Géneros" className="py-16 bg-gray-100 mt-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Explora los Géneros Fundamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {generos.map((genero) => (
              <Card 
                key={genero.title}
                title={genero.title}
                description={genero.description}
                imageUrl={genero.imageUrl}
                id={genero.id}
              />
            ))}
          </div>
        </div>
      </section>

      <ArtistSection/>
      {/* <ArrowTop/> */}
    </div>
  );
};