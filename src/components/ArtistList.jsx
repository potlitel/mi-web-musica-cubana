import img1 from '../assets/images/PFG.jpeg'
import img2 from '../assets/images/candido-fabre.webp'
import img3 from '../assets/images/BM.jpg'
import img4 from '../assets/images/silvio-rodriguez-cuba.jpg'
import img5 from '../assets/images/GmB9SH7XkAAdY8k.jpg'
import img6 from '../assets/images/haila_big_61432.jpg'
import img7 from '../assets/images/APV.jpeg'
import img8 from '../assets/images/ArturoSandoval.jpeg'
import img9 from '../assets/images/BennyMore.jpg'
import img10 from '../assets/images/CarlosVarela.jpg'
import img11 from '../assets/images/CelinaGonzalez.jpeg'
import img12 from '../assets/images/Cimafunk.jpg'
import img13 from '../assets/images/CompaySegundo.jpg'
import img14 from '../assets/images/DescemerBueno.jpg'
import img15 from '../assets/images/ElenaBurke.webp'
import img16 from '../assets/images/EliadesOchoa.jpg'
import img17 from '../assets/images/GenteDeZona.webp'
import img18 from '../assets/images/IbrahimFerrer.jpg'
import img19 from '../assets/images/LaritzaBacallao.jpeg'
import img20 from '../assets/images/LeoniTorres.webp'
import img21 from '../assets/images/LeoVera.jpeg'
import img22 from '../assets/images/OmaraPortuondo.jpeg'
import img23 from '../assets/images/WaldoMendoza.jpg'
import img24 from '../assets/images/TonyAvila.jpeg'

const ArtistList = () => {
  return (
    <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* <!-- Header --> */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Conoce nuestros artistas</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Aprenda de profesionales de la industria con años de experiencia en sus respectivos campos.
      </p>
    </div>
    {/* <!-- Instructor Cards Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* <!-- Instructor Card 1 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* <!-- Image with overlay --> */}
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img1} 
            alt="Rajesh Kumar" 
            className="w-150 h-110 object-cover object-center"
          />
          {/* <!-- Gradient overlay --> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* <!-- Name and Role --> */}
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Rajesh Kumar</h3>
          <p className="text-tab-purple mb-4">classNameical Music Director</p>
        </div>
        {/* <!-- Bio slide-up on hover --> */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            With over 20 years of experience in classNameical music, Rajesh has performed on international stages and trained hundreds of students.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 2 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img2} 
            alt="Priya Singh" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Priya Singh</h3>
          <p className="text-tab-purple mb-4">Dance Instructor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Priya is a celebrated dancer specializing in both classNameical and contemporary styles with numerous awards to her name.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 3 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img3}
            alt="Vikram Mehta" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Vikram Mehta</h3>
          <p className="text-tab-purple mb-4">Acting Coach</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            A veteran of stage and screen, Vikram brings his 15 years of industry experience to nurture the next generation of actors.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img4}
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 1 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* <!-- Image with overlay --> */}
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img5}
            alt="Rajesh Kumar" 
            className="w-150 h-110 object-cover object-center"
          />
          {/* <!-- Gradient overlay --> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* <!-- Name and Role --> */}
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Rajesh Kumar</h3>
          <p className="text-tab-purple mb-4">classNameical Music Director</p>
        </div>
        {/* <!-- Bio slide-up on hover --> */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            With over 20 years of experience in classNameical music, Rajesh has performed on international stages and trained hundreds of students.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 2 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img6} 
            alt="Priya Singh" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Priya Singh</h3>
          <p className="text-tab-purple mb-4">Dance Instructor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Priya is a celebrated dancer specializing in both classNameical and contemporary styles with numerous awards to her name.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 3 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img7} 
            alt="Vikram Mehta" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Vikram Mehta</h3>
          <p className="text-tab-purple mb-4">Acting Coach</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            A veteran of stage and screen, Vikram brings his 15 years of industry experience to nurture the next generation of actors.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img8} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 1 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* <!-- Image with overlay --> */}
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img9} 
            alt="Rajesh Kumar" 
            className="w-150 h-110 object-cover object-center"
          />
          {/* <!-- Gradient overlay --> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* <!-- Name and Role --> */}
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Rajesh Kumar</h3>
          <p className="text-tab-purple mb-4">classNameical Music Director</p>
        </div>
        {/* <!-- Bio slide-up on hover --> */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            With over 20 years of experience in classNameical music, Rajesh has performed on international stages and trained hundreds of students.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 2 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img10} 
            alt="Priya Singh" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Priya Singh</h3>
          <p className="text-tab-purple mb-4">Dance Instructor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Priya is a celebrated dancer specializing in both classNameical and contemporary styles with numerous awards to her name.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 3 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img11} 
            alt="Vikram Mehta" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Vikram Mehta</h3>
          <p className="text-tab-purple mb-4">Acting Coach</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            A veteran of stage and screen, Vikram brings his 15 years of industry experience to nurture the next generation of actors.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img12} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 1 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* <!-- Image with overlay --> */}
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img13} 
            alt="Rajesh Kumar" 
            className="w-150 h-110 object-cover object-center"
          />
          {/* <!-- Gradient overlay --> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* <!-- Name and Role --> */}
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Rajesh Kumar</h3>
          <p className="text-tab-purple mb-4">classNameical Music Director</p>
        </div>
        {/* <!-- Bio slide-up on hover --> */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            With over 20 years of experience in classNameical music, Rajesh has performed on international stages and trained hundreds of students.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 2 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img14} 
            alt="Priya Singh" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Priya Singh</h3>
          <p className="text-tab-purple mb-4">Dance Instructor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Priya is a celebrated dancer specializing in both classNameical and contemporary styles with numerous awards to her name.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 3 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img15} 
            alt="Vikram Mehta" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Vikram Mehta</h3>
          <p className="text-tab-purple mb-4">Acting Coach</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            A veteran of stage and screen, Vikram brings his 15 years of industry experience to nurture the next generation of actors.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img16} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 1 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* <!-- Image with overlay --> */}
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img17} 
            alt="Rajesh Kumar" 
            className="w-150 h-110 object-cover object-center"
          />
          {/* <!-- Gradient overlay --> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* <!-- Name and Role --> */}
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Rajesh Kumar</h3>
          <p className="text-tab-purple mb-4">classNameical Music Director</p>
        </div>
        {/* <!-- Bio slide-up on hover --> */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            With over 20 years of experience in classNameical music, Rajesh has performed on international stages and trained hundreds of students.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 2 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img18} 
            alt="Priya Singh" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Priya Singh</h3>
          <p className="text-tab-purple mb-4">Dance Instructor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Priya is a celebrated dancer specializing in both classNameical and contemporary styles with numerous awards to her name.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 3 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img19} 
            alt="Vikram Mehta" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Vikram Mehta</h3>
          <p className="text-tab-purple mb-4">Acting Coach</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            A veteran of stage and screen, Vikram brings his 15 years of industry experience to nurture the next generation of actors.
          </p>
        </div>
      </div>
      
      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img20} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img21} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img22} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img23} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>

      {/* <!-- Instructor Card 4 --> */}
      <div className="relative overflow-hidden group bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-xl overflow-hidden relative">
          <img 
            src={img24} 
            alt="Aisha Kapoor" 
            className="w-150 h-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="font-playfair text-xl font-semibold mb-2">Aisha Kapoor</h3>
          <p className="text-tab-purple mb-4">Photography Mentor</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
          <p className="text-sm text-gray-700">
            Award-winning photographer Aisha specializes in portrait and fashion photography with publications in leading magazines.
          </p>
        </div>
      </div>
      
    </div>
    {/* <!-- Call to Action Button --> */}
    <div className="text-center mt-12">
      <a href="/team" className="inline-block bg-tab-purple text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-tab-teal transition-colors duration-300 transform hover:-translate-y-1">
        View All Instructors
      </a>
    </div>

  </div>
</section>
  );
};

export default ArtistList;