import { inventario } from "../constants"

const Inventario = () => {
  return (
    <section
      id="inventario"
      className="w-full flex justify-center"
    >
      <div className="mx-3 border-2 border-slate-200 border-dashed p-2 rounded-lg bg-slate-100 mt-4 sm:mt-10 sm:w-[500px] lg:mt-20 lg:w-3/6 lg:p-10">

        <div 
        className="flex justify-between items-center my-2  px-4 py-4  bg-slate-400 rounded-xl"
        >
          <h3
            className="text-xl h-full flex items-center w-4/6 rounded-e-full "
          >
            Nombre
          </h3>
          <p
            className="text-xl"
          >
            Cantidad
          </p>
        </div>


        {
          inventario.map((item) => (
            <div key={item.id} className="flex justify-between items-center my-2  px-4 py-2 bg-primary/15 odd:bg-secondary/30 ">
              <h3
                className="text-xl h-full flex items-center w-4/6 rounded-e-full "
              >
                {item.nombre}:
              </h3>
              <p
                className="text-xl"
              >
                {item.cantidad}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Inventario