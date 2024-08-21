import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; 

const NavLinks = [
  { id: "1", name: "INICIO", link: "inicio" },
  { id: "2", name: "QUIENES SOMOS", link: "who" },
  { id: "3", name: "MARCAS", link: "marc" },
  { id: "4", name: "CONTACTO", link: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gray-900 shadow-md'>
      <div id="inicio" className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className='text-3xl font-bold font-serif text-white'>
            Delivery Repuestos
          </h1>
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX className="text-white text-3xl" /> : <FiMenu className="text-white text-3xl" />}
            </button>
          </div>
          {/* Menú en dispositivos grandes */}
          <div className='hidden md:flex md:items-center md:space-x-8'>
            <ul className='flex gap-8'>
              {NavLinks.map((data) => (
                <li key={data.id} className='py-4'>
                  <Link
                    to={data.link}
                    smooth={true}
                    duration={500}
                    className='hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium text-white cursor-pointer'
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Menú en dispositivos pequeños */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className='flex flex-col items-center gap-4'>
            {NavLinks.map((data) => (
              <li key={data.id} className='py-2'>
                <Link
                  to={data.link}
                  smooth={true}
                  duration={500}
                  className='hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium text-white cursor-pointer'
                  onClick={() => setIsOpen(false)} 
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
