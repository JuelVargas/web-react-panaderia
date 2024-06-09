import { reportes } from "../constants"


const Reportes = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-sm:mx-4 sm:w-11/12 lg:w-11/12 xl:w-3/6 bg-slate-200/30 flex justify-center ">
      <div className="flex flex-col items-center w-full mx-2 px-4 py-8">
        {
          reportes.map((reporte) => (
            <div key={reporte.id} className="shadow-xl rounded-xl my-2 p-4  md:w-11/12 lg:w-11/12 xl:w-11/12">
              <div>
                <h3 className="text-xl font-medium text-center">{reporte.tipo}</h3>
                <p
                  className="w-4/5 text-center  mx-auto text-sm sm:text-lg text-slate-800 py-2 "
                >
                  {reporte.descripcion}
                </p>
              </div>

              <div className="flex flex-col max-md:items-center md:justify-center md:flex-row gap-2 ">
                {
                  reporte.campos.map((campo) => (
                    <div key={campo} className="max-md:bg-slate-200  shadow-lg rounded-lg md:bg-slate-200 px-4 py-2 max-md:flex max-md:justify-between flex md:flex-col justify-between item sm:w-4/6 max-sm:w-full">
                      <h3 className="text-center text-text md:py-2">{campo}</h3>
                      <p className="text-center  text-text/50 md:h-2/4 md:py-2">{reporte.valores[ reporte.campos.indexOf(campo)]}</p>
                    </div>
                  ))
                }
              </div>

            </div>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Reportes