import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Somos from './components/Somos/Somos';
import Eleginos from './components/Eleginos/Eleginos';
import Comentarios from './components/Comentarios/Comentarios';
import Marcas from './components/Marcas/Marcas';
import Contactos from './components/Contactos/Contactos';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons/FloatingButtons'; 

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <Main />
      <Somos />
      <Eleginos />
      <Marcas />
      <Comentarios />
      <Contactos />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
