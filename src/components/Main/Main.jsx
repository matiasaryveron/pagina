import React, { useEffect } from 'react'
import lg from '../../assets/lg.png'
import AOS from 'aos'
import "aos/dist/aos.css"

function Main() {

useEffect(() =>{ 
AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
})
AOS.refresh()
},[])

return (
    <div  className=' dark: bg-black dark: text-white duration-300 relative-z-20'>
        <div className="container min-h-[620px] flex">
            <div className=' grid place-items-center grid-cols-1 sm:grid-cols-2'>
                <div data-aos="zoom-in" data-aos-duration="1500" className='order-1 sm:order-2'>
                    <img src={lg} alt="" className='relative z-10 max-h-[600px] sm:scale-90 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'/>
                </div>
                <div className='order-2 sm:order-1 space-y-5 sm:pr-32 '>
                    <p data-aos="fade-up" data-aos-delay="600" 
                    className=' text-primary text-2xl font-serif'>Bienvenidos a</p>
                    <h1 data-aos="fade-up" data-aos-delay="600" className='text-5xl font-semibold lg:text-7xl font font-serif mb-4'>Delivery Repuestos</h1>
                    <p data-aos="fade-up" data-aos-delay="1000" className='flex space-x-4'> Servicio puerta a puerta del repuesto o accesorio que estabas buscando. Cotizaciones en el acto y entregas inmediatas. </p>
                    <button data-aos="fade-up"
                    data-aos-duration="1500" data-aos-delay="600" className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 mt-4'> Contactos</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Main