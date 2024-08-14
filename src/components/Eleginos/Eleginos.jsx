import React from 'react';
import { MdPriceCheck } from 'react-icons/md';
import { FaCheckDouble } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';

const skillsData = [
  {
    name: 'Mejor Precio',
    icon: (
      <MdPriceCheck className="text-5xl text-primary duration-300 mb-4" />
    ),
    description: 'Ofrecemos un servicio de delivery que prioriza la rapidez en la entrega y mantiene el producto en perfecto estado hasta que llegue a tu puerta.',
    aosDelay: '0',
  },
  {
    name: 'Eficacia garantizada',
    icon: (
      <FaCheckDouble className="text-5xl text-primary duration-300 mb-4" />
    ),
    description: 'Nos aseguramos de entregar el repuesto correcto para tu vehículo con precisión, evitando errores y asegurando que obtengas exactamente lo que necesitas.',
    aosDelay: '500',
  },
  {
    name: 'Rápido y seguro',
    icon: (
      <FaShippingFast className="text-5xl text-primary duration-300 mb-4" />
    ),
    description: 'Garantizamos los precios más competitivos en la zona, ofreciendo una excelente relación calidad-precio en todos nuestros productos para que obtengas lo mejor sin gastar de más.',
    aosDelay: '1000',
  },
];

function Eleginos() {
  return (
    <div className="py-14 dark: bg-black dark: text-white sm:min-h[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            <p data-aos="fade-up">¿Por qué elegirnos?</p>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-900 duration-300 text-white rounded-lg flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                {skill.icon}
                <h1 className="mt-4 text-lg font-semibold">{skill.name}</h1>
                <p className="mt-2 text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eleginos;
