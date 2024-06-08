import { inventario } from "../constants"

const Inventario = () => {
  return (
    <section
      id="inventario"
      className="w-full flex justify-center"
    >
      <div className="mx-3 border-2 border-slate-200 border-dashed p-2 rounded-lg bg-slate-100 mt-4 sm:mt-8 sm:w-[500px] lg:mt-20 lg:w-3/6 lg:p-10">

        <div
          className="flex justify-between items-center mb-4  px-4 py-4  bg-slate-300 rounded-xl"
        >
          <h3
            className="text-xl h-full flex items-center w-4/6 rounded-e-full "
          >
            Nombre
          </h3>
          <div className="flex w-2/5 gap-2 justify-evenly">
            <p
              className="sm:text-xl"
            >
              Cantidad
            </p>
            <p className="sm:text-xl">
              Unidad
            </p>
          </div>
        </div>


        {
          inventario.map((item) => (
            <div key={item.id} className="flex justify-between items-center my-2  px-4 py-2 bg-primary/15 odd:bg-secondary/30 ">
              <img
                src={item.imgURL}
                width={40}
                height={40}
                className="shadow-lg"
              />
              <h3
                className="text-xl h-full flex items-center w-4/6 rounded-e-full  ml-2"
              >
                {item.nombre}:
              </h3>
              <div className="flex justify-evenly w-2/5">
                <p
                  className="text-xl"
                >
                  {item.cantidad}
                </p>
                <p>
                  {item.unidad}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Inventario