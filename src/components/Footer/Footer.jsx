import React from 'react';
import { FaPhone } from 'react-icons/fa'; 

function Footer()  {
return (
    <footer className="bg-black text-white py-4 flex flex-col items-center text-center">
    <h1 className="text-xl md:text-2xl font-bold mb-2">Delivery Repuestos</h1>
    <div className="flex items-center justify-center mb-2">
        <FaPhone className="mr-2 text-lg md:text-xl" />
        <span className="text-sm md:text-base">+54 9 11 3639-9934 / +54 9 11 3370-4016</span>
    </div>
    <hr className="w-full border-gray-600 mb-2" />
    <p className="text-xs md:text-sm">&copy; Buenos Aires, Argentina {new Date().getFullYear()} - Delivery Repuestos</p>
    </footer>
);
}

export default Footer;
