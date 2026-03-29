import heroBg from '../assets/images/hero_bg.png';

const Hero = () => {
  return (
    <section id="inicio" style={{
      height: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
    }}>
      <div className="section-container" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '1.2rem', letterSpacing: '8px', color: 'var(--primary)', marginBottom: '20px' }}>
            ESTABLECIDO DESDE 2012
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 10vw, 6rem)', 
            lineHeight: 0.9, 
            marginBottom: '30px',
            fontFamily: "'Oswald', sans-serif"
          }}>
            TRADICIÓN & <br /> <span className="gold-text">ESTILO MODERNO</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.7)', 
            maxWidth: '600px', 
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            Mucho más que un corte de pelo. Una experiencia de cuidado personal premium diseñada para el caballero moderno en un ambiente de exclusividad.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="gold-btn">RESERVAR AHORA</button>
            <button className="outline-btn">VER SERVICIOS</button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative vertical line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: '1px',
        height: '100px',
        background: 'linear-gradient(transparent, var(--primary))',
        zIndex: 2
      }}></div>
    </section>
  );
};

export default Hero;
