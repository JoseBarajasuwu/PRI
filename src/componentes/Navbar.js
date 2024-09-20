import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 769);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 769);
      if (window.innerWidth >= 769) {
        setIsMenuOpen(false); // Cierra el menú al cambiar a una pantalla grande
      }
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize(); // Llama a la función de redimensionamiento al cargar
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <div>
            <header className="App-header">
                <div className="logo">
                    <a href="/" className="logo">
                        <img src="logoT.png" alt="Logo" />
                    </a>
                </div>
                {!isLargeScreen && (
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                )}
                <nav className={`nav-menu ${isMenuOpen && !isLargeScreen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/noticias">Noticias</a></li>
                        <li><a href="/cronograma">Cronograma</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                        <li><a href="#menu5">Transparencia</a></li>
                        <li className="social-icons">
                            <a href="https://maps.app.goo.gl/ens661f4C62jaUX17" target="_blank" rel="noopener noreferrer" className="icon-google-maps"><i class="fas fa-map-marker-alt"></i></a>
                            <a href="https://www.facebook.com/GobiernoDeTenamaxtlan" target="_blank" rel="noopener noreferrer" className="icon-facebook"><i className="fab fa-facebook"></i></a>
                            
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon-instagram"><i className="fab fa-instagram"></i></a>

                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
