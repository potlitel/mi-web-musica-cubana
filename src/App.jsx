// src/App.jsx
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Inicio } from './pages/Inicio';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow">
        {/* Aquí es donde en el futuro un sistema de rutas (como React Router)
            decidiría qué página mostrar. Por ahora, mostramos solo Inicio. */}
        <Inicio />
      </div>
      <Footer />
    </div>
  )
}

export default App;