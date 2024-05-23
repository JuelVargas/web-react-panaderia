import { imagenPan } from "../assets/images"

import { useState } from 'react'

const Hero = () => {

    const [count, setCount] = useState(0);

    function handdleClick() {
        setCount(count + 1)
    }

    return (
        <section id="inicio"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container xl:pl-20"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28" >
                <p className="text-xl font-montserrat text-coral-red"
                >Nuestros panes de Temporada</p>
                <h1 className="mt-5 font-palanquin text-black text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
                >
                    <span className=" xl:whitespace-nowrap relative z-10 pr-10"
                    >Con Nuevos</span>
                    <br />
                    Sabores Para tu
                    <span className="text-coral-red inline-block mt-3 ml-4"
                    >Paladar</span>
                </h1>
                <p className="font-monserrat text-slate-gray  text-lg leading-8 mt-6 mb-8 sm:max-w-sm">Disfruta del sabor artesanal: panes frescos y deliciosos todos los días en nuestra panadería.</p>

                <div  >
                <button className='px-4 py-2 rounded-xl bg-green-500 text-pale-blue ml-[100px]' onClick={handdleClick}>Ver productos</button>

            </div>

            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-primary"
            >
                <div className=" absolute top-0 bg-[#ffffff1f] rounded-full z-1 w-44 h-96 blur-3xl rotate-90"
                    width={50}
                    height={50}></div>

                <div className=" absolute bg-yellow-500/50 rounded-full z-1 w-44 h-96 blur-3xl rotate-45"
                    width={50}
                    height={50}></div>
                <img className="z-10"
                    src={imagenPan}
                    alt="imagen pan"
                    width={500}
                    height={500} />
            </div>
            

        </section>
    )
}

export default Hero