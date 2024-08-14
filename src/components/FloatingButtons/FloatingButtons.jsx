import React from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

function FloatingButtons() {
return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center gap-2">
    <a
        href="https://wa.me/5491133704016" // Cambia el número de WhatsApp según corresponda
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors duration-300"
    >
        <FaWhatsapp size={30} />
    </a>

      {/* Botón de Flecha para Volver al Inicio */}
    <Link
        to="inicio" // ID de la sección de inicio
        smooth={true}
        duration={500} // Duración en milisegundos
        className="bg-gray-700 p-3 rounded-full shadow-lg text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
    >
        <FaArrowUp size={30} />
    </Link>
    </div>
);
}

export default FloatingButtons;
