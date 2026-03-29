import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import { Camera, Share2, Phone, MapPin, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />

      {/* Gallery Section */}
      <section id="galeria" style={{ padding: '100px 0', backgroundColor: '#050505' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>NUESTRO <span className="gold-text">TRABAJO</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Muestra visual de la calidad y precisión de nuestros barberos.</p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '15px' 
          }}>
            <img src="/images/cutting.png" alt="Corte" style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(0.5) contrast(1.1)', transition: 'all 0.5s ease' }} onMouseOver={e => e.currentTarget.style.filter = 'none'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(0.5) contrast(1.1)'} />
            <img src="/images/shaving.png" alt="Afeitado" style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(0.5) contrast(1.1)', transition: 'all 0.5s ease' }} onMouseOver={e => e.currentTarget.style.filter = 'none'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(0.5) contrast(1.1)'} />
            <div style={{ 
              backgroundColor: 'var(--bg-card)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: '40px',
              border: '1px dashed var(--primary)'
            }}>
              <Star className="gold-text" size={48} style={{ marginBottom: '20px' }} />
              <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>ÚNETE AL CLUB</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Síguenos en redes para ver más contenido exclusivo.</p>
              <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                <Camera className="hover-gold" cursor="pointer" />
                <Share2 className="hover-gold" cursor="pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" style={{ backgroundColor: 'black', padding: '100px 0 40px', borderTop: '1px solid var(--border)' }}>
        <div className="section-container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '60px',
            marginBottom: '80px'
          }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>VINTAGE <span className="gold-text">GOLD</span></h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                Comprometidos con la excelencia y el detalle. Tu confianza es nuestro mayor éxito.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '25px', color: 'white' }}>UBICACIÓN</h4>
              <div style={{ display: 'flex', gap: '15px', color: 'var(--text-muted)', marginBottom: '15px' }}>
                <MapPin className="gold-text" size={20} />
                <span>Calle de la Elegancia, 12<br />28001, Madrid</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', color: 'var(--text-muted)' }}>
                <Phone className="gold-text" size={20} />
                <span>+34 912 345 678</span>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '25px', color: 'white' }}>HORARIO</h4>
              <div style={{ display: 'flex', gap: '15px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                <Clock className="gold-text" size={20} />
                <span>Lunes - Viernes: 10:00 - 20:30</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', color: 'var(--text-muted)', marginLeft: '35px' }}>
                <span>Sábados: 09:00 - 15:00</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', color: 'var(--text-muted)', marginLeft: '35px' }}>
                <span>Domingos: Cerrado</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid #111', color: '#555', fontSize: '0.8rem' }}>
            <p>&copy; 2026 VINTAGE GOLD BARBER STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
