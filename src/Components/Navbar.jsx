import './navbar.css'

function Navbar () {
    return(
        <div className='navbar'>
            <img className="image" src="../../src/assets/panaderia.png" alt="icono panaderia" />
            <ul>
                <li className='link'><a href="#">Inicio</a></li>
                <li className='link'><a href="#">Maquinaria</a></li>
                <li className='link'><a href="#">Recetas</a></li>
                <li className='link'><a href="#">Reportes</a></li>
                <li className='link'><a href="#">Personal</a></li>
            </ul>

        </div>

    );
}

export default Navbar