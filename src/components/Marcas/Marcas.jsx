import React from 'react';
import marcas from '../../assets/marcas.png';

function Marcas() {
return (
    <div id="marc" className='bg-gradient-to-r from-black to-gray-800 text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center overflow-hidden'>
    <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
        <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className='space-y-5 sm:p-16 pb-6'
        >
            <h1 className='text-3xl sm:text-4xl font-bold font-serif'>
            Marcas
            </h1>
            <p>
            Ofrecemos una amplia gama de repuestos y accesorios, que incluyen:
            </p>
            <ul className='list-disc pl-5'>
            <li><strong>Repuestos de Mecánica:</strong> Kits de distribución, filtros de aceite, filtros de aire, y más.</li>
            <li><strong>Accesorios:</strong> Paragolpes, espejos retrovisores, y otros elementos esenciales.</li>
            <li><strong>Tren Delantero y Tracción:</strong> Componentes como la suspensión del auto y kits de placa disco.</li>
            </ul>
            <p>
            Este compromiso con la calidad y la variedad asegura que cada producto que ofrecemos cumple con los más altos estándares y proporciona una experiencia satisfactoria para nuestros clientes.
            </p>
        </div>
        <div
            data-aos="slide-left"
            data-aos-duration="1500"
            className="sm:ml-32 flex justify-center sm:justify-start w-full"
        >
            <img 
            src={marcas} 
            alt="Marcas" 
            className='sm:scale-105 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' 
            />
        </div>
        </div>
    </div>
    </div>
);
}

export default Marcas;
