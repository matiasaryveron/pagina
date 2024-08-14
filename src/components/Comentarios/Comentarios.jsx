import React from "react";
import { GoTools } from "react-icons/go";

const testimonialData = [
{
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
},
{
    name: "Satya",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
},
{
    name: "Sabir",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
},
];
function Comentarios () {
    return (
    <>
    <span id="about"></span>
    <div className= "bg-gradient-to-r bg-black text-white py-14 sm:pb-24">
        <div className="container">
        <div className="space-y-4 pb-12">
            <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
            Comentarios
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
            Comentarios y testimonios de nuestros clientes. Valoramos cada opinión y nos enorgullece saber que nuestro servicio ha hecho una diferencia positiva en sus experiencias.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
            {testimonialData.map((skill) => (
            <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 bg-gray-900 duration-300 text-white rounded-lg"
            >
                <div className="grid place-items-center ">
                <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                />
                </div>
                <div className="flex justify-center items-center space-x-2 text-yellow-500 text-2xl"><GoTools /><GoTools /><GoTools /><GoTools /><GoTools /></div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
            </div>
            ))}
        </div>
        </div>
    </div>
    </>
);
};

export default Comentarios;