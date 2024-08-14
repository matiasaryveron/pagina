import React from 'react';
import { MdOutlineWhereToVote } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Contactos() {
    return (
        <div id="Contact" className='bg-gradient-to-r from-black to-gray-800 text-white duration-300 min-h-screen flex flex-col'>
            <div className="container mx-auto p-6 flex flex-col justify-center flex-grow">
                <div className="flex flex-col items-center mb-10">
                    <p data-aos="fade-up" className="text-3xl font-semibold text-center sm:text-4xl font-serif mt-8 mb-4">
                        Contacto
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8'>
                    <div
                        data-aos="slide-right"
                        data-aos-duration="1500"
                        className="flex justify-center"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.382311589993!2d-58.778976124266705!3d-34.44244187301251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f07c00bf4cd%3A0x870551b78fb4cc1f!2sDELIVERY%20REPUESTOS!5e0!3m2!1ses-419!2sar!4v1723563445101!5m2!1ses-419!2sar"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación en Google Maps"
                            className='sm:scale-105 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
                        ></iframe>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 duration-300 bg-black rounded-lg'>
                        <div className="flex flex-col items-center mb-6">
                            <MdOutlineWhereToVote className='text-5xl text-primary duration-300 mb-2' />
                            <p className='text-center'>Av. 12 de Octubre 1145, Del Viso, Buenos Aires</p>
                        </div>
                        <div className="flex space-x-20 justify-center">
                            <div className="flex flex-col items-center">
                                <a href="https://wa.me/5491133704016" className="flex flex-col items-center">
                                    <FaWhatsapp className='text-5xl text-primary hover:bg-primary/80 hover:rounded duration-300' />
                                    <p className='text-center'>WhatsApp:</p>
                                    <p className='text-center'>+54 9 11 3370-4016</p>
                                    <p className='text-center'>+54 9 11 3216-7178</p>
                                </a>
                            </div>
                            <div className="flex flex-col items-center">
                                <a href="https://www.instagram.com/deliveryrepuestos/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                    <FaInstagram className='text-5xl text-primary hover:bg-primary/80 hover:rounded duration-300' />
                                    <p className='text-center'>Instagram:</p>
                                    <p className='text-center'>delivery repuestos</p>
                                </a>
                            </div>
                            <div className="flex flex-col items-center">
                                <a href="https://www.facebook.com/profile.php?id=100089234552580&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                    <CiFacebook className='text-5xl text-primary hover:bg-primary/80 hover:rounded duration-300' />
                                    <p className='text-center'>Facebook:</p>
                                    <p className='text-center'>Delivery Repuestos</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactos;
