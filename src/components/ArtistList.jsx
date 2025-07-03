import { Link } from 'react-router-dom';

const ArtistList = () => {
  return (
    <section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    {/* <!-- Header --> */}
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Conoce nuestros artistas</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Aprenda de profesionales de la industria con años de experiencia en sus respectivos campos.
      </p>
    </div>
    {/* <!-- Instructor Cards Grid --> */}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* <!-- Instructor Card 1 --> */}
      <div class="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* <!-- Image with overlay --> */}
        <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Rajesh Kumar" 
            class="w-full h-full object-cover object-center"
          />
          {/* <!-- Gradient overlay --> */}
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* <!-- Name and Role --> */}
        <div class="p-4">
          <h3 class="font-playfair text-xl font-semibold mb-2">Rajesh Kumar</h3>
          <p class="text-tab-purple mb-4">Classical Music Director</p>
        </div>
        {/* <!-- Bio slide-up on hover --> */}
        <div class="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p class="text-sm text-gray-700">
            With over 20 years of experience in classical music, Rajesh has performed on international stages and trained hundreds of students.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 2 --> */}
      <div class="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Priya Singh" 
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-4">
          <h3 class="font-playfair text-xl font-semibold mb-2">Priya Singh</h3>
          <p class="text-tab-purple mb-4">Dance Instructor</p>
        </div>
        <div class="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p class="text-sm text-gray-700">
            Priya is a celebrated dancer specializing in both classical and contemporary styles with numerous awards to her name.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 3 --> */}
      <div class="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Vikram Mehta" 
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-4">
          <h3 class="font-playfair text-xl font-semibold mb-2">Vikram Mehta</h3>
          <p class="text-tab-purple mb-4">Acting Coach</p>
        </div>
        <div class="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p class="text-sm text-gray-700">
            A veteran of stage and screen, Vikram brings his 15 years of industry experience to nurture the next generation of actors.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 4 --> */}
      <div class="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Aisha Kapoor" 
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-4">
          <h3 class="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p class="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div class="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p class="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>
      
    </div>
    {/* <!-- Call to Action Button --> */}
    <div class="text-center mt-12">
      <a href="/team" class="inline-block bg-tab-purple text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-tab-teal transition-colors duration-300 transform hover:-translate-y-1">
        View All Instructors
      </a>
    </div>
  </div>
</section>
  );
};

export default ArtistList;