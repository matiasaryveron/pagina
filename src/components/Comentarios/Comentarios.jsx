import React from "react";

const testimonialData = [
    {
        name: "Norberto Felix Pampin",
        image: "https://lh3.googleusercontent.com/a/ACg8ocK2-Suk1gaFavNReDhSp-wBvWde531swWRNhPC-Nh0YC5eOMQ=w60-h60-p-rp-mo-ba4-br100",
        description: "Muy completo. Excelente atención. El envío a domicilio muy valorado.",
        aosDelay: "0",
    },
    {
        name: "Emmanuel Martin",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXOsAZAsrHYCiEkSKG6RQuFYZ3_Wjl47lDcXMi8iHB_1wgXZhRV=w60-h60-p-rp-mo-br100",
        description: "Exelente atención y variedad de repuestos originales de multimarca.",
        aosDelay: "300",
    },
    {
        name: "Cesar Lambrisca",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKhWoJAoqw_jwzSS-5Rg_STu_E4t4Y7xsmYVcEOZOMfhfurNQ=w36-h36-p-rp-mo-br100",
        description: "Excelente atención, buenos precios y variedad de marcas.",
        aosDelay: "1000",
    },
];

function Comentarios() {
    return (
        <>
            <span id="about"></span>
            <div className="bg-gradient-to-r bg-black text-white py-14 sm:pb-24">
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
                        {testimonialData.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                data-aos="fade-up"
                                data-aos-delay={testimonial.aosDelay}
                                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 bg-gray-900 duration-300 text-white rounded-lg"
                            >
                                <div className="grid place-items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-full w-20 h-20"
                                    />
                                </div>
                                <div className="flex justify-center items-center space-x-2 text-yellow-500 text-2xl">
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <p>{testimonial.description}</p>
                                <p className="text-center font-semibold">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comentarios;
