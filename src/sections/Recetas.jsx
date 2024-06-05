
import { recetas } from '../constants'
import { useState } from 'react'

const Recetas = () => {
  const [recetaOpen, setRecetaOpen] = useState(null)

  function handleClick(currenId) {
    setRecetaOpen(currenId === recetaOpen ? null : currenId)
  }

  return (
    <section id="recetas" className="w-full flex xl:flex-row flex-col justify-center items-center min-h-[89vh] max-container p-4">
      <div className=''>
        {recetas.map((receta) => (

          <div
            key={receta.id}
            className="p-2 lg:p-8 my-4 rounded-xl flex flex-col item-center sm:w-[80vw] lg:w-[50vw] xl:w-[40vw] bg-slate-50 shadow-xl"
            onClick={() => handleClick(receta.id)}>

            <h3 className="text-center text-xl font-bold ">{receta.nombre}</h3>

            <div className="flex justify-around items-center gap-2">

              <img
                src={receta.imgURL}
                alt={receta.nombre}
                width={150}
                height={150}
                className='bg-secondary/20 w-[20vh] p-4 rounded-lg shadow-lg' />

              {recetaOpen === receta.id || <p className='sm:w-40'>{receta.descripcion}</p>}

            </div>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${recetaOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
                }`} >

              {recetaOpen === receta.id &&
                <div className='flex flex-col gap-2 p-2 sm:p-4'>
                  <div className='bg-primary/30 p-4 rounded-lg'>
                    <h3 className='text-lg font-bold'>Ingredientes</h3>
                    {
                      receta.ingredientes.map(ingrediente => <p key={ingrediente}>{ingrediente}</p>)
                    }
                  </div>
                  <div className='bg-primary/30 p-4 rounded-lg'>
                    <h3 className='text-lg font-bold'>Preparacion</h3>
                    {
                      receta.preparacion.map(paso => <p key={paso} className='pt-2'>{paso}.</p>)
                    }
                  </div>
                </div>
              }



            </div>

            <div className='flex justify-center py-2'>

              <svg 
              className={`fill-accent stroke-2 cursor-pointer ${recetaOpen === receta.id ? "rotate-[270deg]" : "rotate-90"}`}
              fill="#000000"
              height="24px"
              width="24px"
              version="1.1" id="Layer_1" 
                viewBox="0 0 330 330" >
                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
              </svg>
             
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Recetas