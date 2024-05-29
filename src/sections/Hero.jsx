import { imagenPan} from "../assets/images"
import { arrowRight } from "../assets/icons";
import { breads } from "../constants";


import { useState } from 'react'
import { BreadCard, Button} from "../Components";

const Hero = () => {

    const [imgBigBread, setImgBigBread] = useState(imagenPan);

   

    return (
        <section id="inicio"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container xl:pl-20"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28" >
                <p className="text-xl font-montserrat text-primary "
                >Nuestros panes de Temporada</p>
                <h1 className="mt-5 font-palanquin text-text text-8xl max-sm:text-[52px] max-sm:leading-[52px] font-bold"
                >
                    <span className=" xl:whitespace-nowrap relative z-10 pr-10"
                    >Con Nuevos</span>
                    <br />
                    Sabores Para tu
                    <span className="text-primary inline-block mt-3 ml-4"
                    >Paladar</span>
                </h1>
                <p className="font-monserrat text-text/100 text-lg leading-8 mt-6 mb-8 sm:max-w-sm">Disfruta del sabor artesanal: panes frescos y deliciosos todos los días en nuestra panadería.</p>

                <div  >
                    <Button label="Ver productos" iconUrl={arrowRight} />

                </div>

            </div>
            <div className="relative flex-1 flex justify-center items-center max-xl:items-start  max-xl:min-h-[700px] max-md:min-h-[700px] max-sm:min-h-[400px] py-2 bg-gradient-to-b from-secondary/40 to-primary/30"
            >
                
                <img className="z-10 max-sm:w-[300px]"
                    src={imgBigBread}
                    alt="imagen pan"
                    width={500}
                    height={500} />

                <div className="flex sm:gap-6 gap-4 absolute bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {breads.map((bread) => (
                        <div key={bread.id}>
                            <BreadCard
                                imgURL={bread}
                                changeImgBread={(bigBread) =>setImgBigBread(bigBread)
                                }
                                imgBigBread={imgBigBread}

                            />
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}

export default Hero