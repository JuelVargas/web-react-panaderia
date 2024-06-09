import { logoPanaderia } from "../assets/images"

const Footer = () => {
  return (
    <footer className="w-full mt-4 md:mt-10 flex flex-col gap-4 items-center md:flex-row md:justify-evenly py-2 md:py-4 bg-text text-background">
        <div className=" flex flex-col items-center justify-center">
            <img src={logoPanaderia} alt="logo" width={100} height={100} />
            <p>Trabajo practico <span className="text-primary">SIS-303</span></p>
        </div>
        <div className="text-center">
            <p 
            className="text-xl font-semibold my-4 flex flex-col items-center justify-between"
            >
                Grupo web
            </p>
            <ul className="text-lg font-medium">
                <li className="my-2 ">Vargas Rojas Juel</li>
                <li >Ibarra Alejandro Wilson R.</li>
            </ul>
        </div>
        <div >
            <p 
            className="text-xl font-semibold my-4 flex flex-col items-center justify-between"
            >
                Grupo documentacion
            </p>
            <ul className="text-center">
                <li>Ordoñez Bautista Cristian Gabriel</li>
                <li>Churqui Nina Jenifer</li>
                <li>Kecaño Colque Bertha</li>
                <li>Escobar Ruiz Marco Antonio</li>
                <li>Espinoza Chiri Soledad Griselda</li>
                <li>Luis Angel Arancibia Mallon</li>
                <li>Apaza Villca Cristofer D.</li>
            </ul>
        </div>
        <div className="text-center">
            <p className="text-xl font-semibold my-4 flex flex-col items-center justify-between" >
                Proyecto
            </p>
            <a 
            href="https://github.com/JuelVargas/web-react-panaderia" 
            target="_blank"
            className="text-primary active:text-primary/30"
            >
                Web Panaderia
            </a>
            <p className="my-4">2024 &copy; todos los derechos reservados </p>
        </div>
    </footer>
  )
}

export default Footer