import loungeTitle from '../assets/images/lounge.png';

const About = () => {
  return (
    <section id="sobre-nosotros" style={{ backgroundColor: '#0A0A0A', padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={loungeTitle} 
            alt="Lounge area" 
            style={{ width: '100%', height: '500px', objectFit: 'cover', border: '1px solid var(--primary)', padding: '10px' }} 
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '1.2rem', color: 'var(--primary)', letterSpacing: '4px', marginBottom: '20px' }}>NUESTRO ESTUDIO</h2>
          <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>MÁS QUE UN CORTE, <br /><span className="gold-text">UN ESTILO DE VIDA</span></h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
            En Vintage Gold, creemos que la barbería es una forma de arte que merece ser preservada y celebrada. Nuestro estudio nace de la pasión por el detalle y el compromiso con la excelencia en el cuidado personal masculino.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
            Hemos diseñado un espacio donde el tiempo se detiene. Desde nuestras butacas de cuero clásicas hasta nuestra zona de relax, cada rincón está pensado para que tu visita sea el mejor momento de tu semana.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h3 className="gold-text" style={{ fontSize: '2.5rem' }}>10+</h3>
              <p style={{ fontSize: '0.9rem', color: 'white' }}>AÑOS DE EXPERIENCIA</p>
            </div>
            <div>
              <h3 className="gold-text" style={{ fontSize: '2.5rem' }}>5k+</h3>
              <p style={{ fontSize: '0.9rem', color: 'white' }}>CLIENTES SATISFECHOS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
