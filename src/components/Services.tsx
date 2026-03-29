import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Check } from 'lucide-react';

const services = [
  { name: 'Corte de Autor', price: '25€', desc: 'Corte personalizado con asesoría de imagen, lavado y styling.' },
  { name: 'Arreglo de Barba Luxury', price: '18€', desc: 'Perfilado con navaja, toalla caliente y aceites esenciales.' },
  { name: 'The Royal Treatment', price: '40€', desc: 'Combo completo de corte y barba con tratamiento facial.' },
  { name: 'Afeitado Clásico', price: '22€', desc: 'Ritual tradicional con espuma caliente y bálsamo hidratante.' },
  { name: 'Corte Kids (Premium)', price: '15€', desc: 'Corte moderno para los más pequeños con el mismo estilo.' },
  { name: 'Limpieza Facial Express', price: '12€', desc: 'Para un rostro fresco y renovado después de tu sesión.' },
];

const Services = () => {
  return (
    <section id="servicios" style={{ backgroundColor: 'var(--bg-dark)', padding: '100px 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Scissors className="gold-text" style={{ marginBottom: '20px' }} size={32} />
          <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>NUESTROS <span className="gold-text">SERVICIOS</span></h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '0 auto' }}></div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '40px',
                border: '1px solid var(--border)',
                position: 'relative',
                transition: 'border 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'white' }}>{service.name}</h3>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{service.price}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '25px', lineHeight: 1.6 }}>{service.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontSize: '0.9rem' }}>
                <Check size={16} />
                <span>Productos Premium</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
