import { hamburger } from '../assets/icons';
import { logoPanaderia } from '../assets/images';
import { navLinks } from '../constants';
import './navbar.css'

function Navbar() {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex  justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={logoPanaderia}
                        alt="logo panaderia"
                        width={40}
                        height={40} />
                </a>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden' >
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a 
                            href={link.href}
                            className='font-monserrat leading-normal text-lg text-black hover:text-shadow-sm shadow-yellow-500'
                            >
                                {link.label}
                            </a>
                        </li>
                    ))
                    }
                </ul>
                <div className='hidden max-lg:block' >
                    <img 
                    src={hamburger}
                    alt="hamburger menu"
                    width={25}
                    height={25}/>
                </div>
            </nav>
        </header>

    );
}

export default Navbar