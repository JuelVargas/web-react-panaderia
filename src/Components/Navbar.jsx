import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { logoPanaderia } from '../assets/images';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='padding-x py-8 z-10 w-full sticky top-0 bg-gradient-to-b from-primary/40 to-primary/10 backdrop-blur-sm  shadow-xl shadow-primary/10'>
            <nav className='flex max-lg:flex-col justify-between items-center max-container'>
                <div className='w-full flex justify-between'>
                    <Link to="/Hero">
                        <img
                            src={logoPanaderia}
                            alt="logo panaderia"
                            width={80}
                            height={80} />
                    </Link>
                    <div className='hidden max-lg:block' onClick={() => setMenuOpen(!menuOpen)}>
                        <img
                            src={hamburger}
                            alt="hamburger menu"
                            width={25}
                            height={25} />
                    </div>
                </div>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
                    {navLinks.map((link) => (
                        <li key={link.label} className='py-2 px-2 rounded-lg hover:bg-secondary/20 active:bg-secondary/50 focus:bg-accent transition-all ease-in-out delay-100'>
                            <Link
                                to={link.href}
                                className='font-monserrat leading-normal text-lg text-text'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
                {menuOpen && <ul className="w-full text-center lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.label} className='w-full py-1 rounded-lg hover:bg-secondary/30 active:bg-secondary/50 transition-all ease-in-out delay-100' onClick={() => setMenuOpen(false)}>
                            <Link
                                to={link.href}
                                className='font-monserrat leading-normal text-lg text-text'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))
                    }
                </ul>}
            </nav>
        </header>

    );
}

export default Navbar