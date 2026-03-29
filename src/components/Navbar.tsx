import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        padding: isScrolled ? '15px 40px' : '25px 40px',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Scissors className="gold-text" size={28} />
        <span style={{ 
          fontFamily: "'Oswald', sans-serif", 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          VINTAGE <span className="gold-text">GOLD</span>
        </span>
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <a href="#inicio" className="hover-gold" style={{ color: 'white', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Inicio</a>
        <a href="#servicios" className="hover-gold" style={{ color: 'white', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Servicios</a>
        <a href="#equipo" className="hover-gold" style={{ color: 'white', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Equipo</a>
        <a href="#galeria" className="hover-gold" style={{ color: 'white', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Galería</a>
        <a href="#contacto" className="hover-gold" style={{ color: 'white', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Contacto</a>
        <button className="gold-btn" style={{ fontSize: '0.8rem', padding: '10px 20px' }}>RESERVAR CITA</button>
      </div>

      <div className="mobile-menu-btn" style={{ display: 'none' }}>
        <Menu size={28} />
      </div>

      <style>{`
        .hover-gold:hover {
          color: var(--primary) !important;
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
