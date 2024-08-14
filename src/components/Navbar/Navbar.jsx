import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = [
  {
    id: "1",
    name: "INICIO",
    link: "inicio",
  },
  {
    id: "2",
    name: "QUIENES SOMOS",
    link: "who",
  },
  {
    id: "3",
    name: "MARCAS",
    link: "marc",
  },
  {
    id: "4",
    name: "CONTACTO",
    link: "Contact",
  },
];

function Navbar() {
  return (
    <nav className='bg-gray-900 shadow-md'>
      <div id= "inicio" className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className='text-3xl font-bold font-serif text-white'>
              Delivery Repuestos
            </h1>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {NavLinks.map((data) => (
                <li key={data.id} className='py-4'>
                  <Link
                    to={data.link}
                    smooth={true}
                    duration={500} // Ajusta la duración según tu preferencia
                    className='py-4 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium text-white cursor-pointer'
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
