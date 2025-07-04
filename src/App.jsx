// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Inicio } from './pages/Inicio';
import ArtistList from './components/ArtistList';
import ArrowTop from './components/ArrowTop';
// import useHomePage from "./hooks/useHomePage";

function App() {
  // const isHomePage = useHomePage();
  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      {/* <div>
        <h1>{isHomePage ? 'Estás en la página de inicio' : 'No estás en la página de inicio'}</h1>
      </div> */}
      <div className="flex-grow">
        {/* Aquí es donde en el futuro un sistema de rutas (como React Router)
            decidiría qué página mostrar. Por ahora, mostramos solo Inicio. */}
        {/* <Inicio /> */}
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/artists" element={<ArtistList />} />
            {/* Ruta catch-all: redirige todo lo no definido al Homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <ArrowTop/>
      <Footer />
    </div>
    </Router>
  )
}

export default App;