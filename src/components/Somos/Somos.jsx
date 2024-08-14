import React from 'react';
import local from '../../assets/local.png';

function Somos() {
  return (
    <div id="who" className='bg-gradient-to-r from-black to-gray-800 text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <div data-aos="slide-right" data-aos-duration="1500">
            <img src={local} alt="" className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'/>
          </div>
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold font-serif'>
                Quienes Somos
              </h1>
              <p data-aos="fade-up">
                Delivery Repuestos es una empresa fundada desde 2022, ubicada en Del Biso, Pilar, Buenos Aires. Nos especializamos en ofrecer una amplia gama de productos para vehículos y contamos con un eficiente servicio de delivery.
              </p>
              <p data-aos="fade-up">
                Nuestros repuestos se entregan tanto directamente al comprador como al taller donde se encuentra el auto, asegurando así rapidez y comodidad. En Delivery Repuestos, estamos comprometidos con brindar soluciones de calidad para tus necesidades automotrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Somos;
