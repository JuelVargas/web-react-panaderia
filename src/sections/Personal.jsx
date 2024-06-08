import { actores } from "../constants"

const Personal = () => {
  return (
    <section
      id="personal"
      className="w-full flex justify-center">

      <div className="grid grid-cols-1 gap-8 py-8 max-sm:mx-4 sm:w-4/5 lg:w-3/6 bg-slate-200/30 ">
        
        {actores.map((persona) => (
          <div key={persona.id} className="w-4/5 sm:w-3/5 lg:w-4/6 xl:w-3/6 justify-self-center border-2 border-red-200 rounded-xl bg-primary/20">
            <div className="flex flex-col items-center gap-4 py-4">
              <img
                src={persona.imgURL}
                alt={persona.cargo}
                width={100}
                height={100}
                className="shadow-2xl p-1 bg-background rounded-lg"
              />

              <p
                className="text-xl font-semibold text-slate-900"
              >{persona.cargo}</p>
            </div>

            <div
              className="w-4/5 m-auto my-4 text-text/80 text-wrap bg-background p-2 md:p-4 rounded-lg"
            >
              <p>
                {persona.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Personal