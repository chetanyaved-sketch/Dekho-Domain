import React from 'react';
import heroImage from '../assets/hero_image.png';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      background: 'radial-gradient(circle at 10% 20%, #FFF0E5 0%, #FFFFFF 90%)',
      padding: '140px 0 100px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'rgba(255, 127, 50, 0.05)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        position: 'relative',
        zIndex: 1,
        flexDirection: window.innerWidth < 968 ? 'column-reverse' : 'row'
      }}>
        {/* Text Content */}
        <div style={{ flex: '1', textAlign: window.innerWidth < 968 ? 'center' : 'left' }}>
          <span style={{
            background: 'linear-gradient(to right, #ffe0d0, #fff0e5)',
            color: '#FF5722',
            padding: '8px 16px',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '700',
            display: 'inline-block',
            marginBottom: '24px',
            boxShadow: '0 4px 10px rgba(255,87,34,0.1)'
          }}>
            🚀 Official Partner Program
          </span>
          <h1 style={{ maxWidth: '600px', margin: window.innerWidth < 968 ? '0 auto 24px' : '0 0 24px' }}>
            Agency Business Ko <br />
            <span className="gradient-text">Next Level Pe Le Jao!</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-light)',
            maxWidth: '550px',
            margin: window.innerWidth < 968 ? '0 auto 40px' : '0 0 40px',
            lineHeight: '1.7'
          }}>
            Sirf management nahi, ab <strong style={{ color: '#1a1a1a' }}>Growth</strong> ki baari hai. Apne creators ko Dekho! pe laao, aur har call pe <strong style={{ color: '#1a1a1a' }}>Passive Income</strong> kamao.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: window.innerWidth < 968 ? 'center' : 'flex-start' }}>
            <button onClick={scrollToForm} className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Aaj Hi Shuru Karein
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="float-anim" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <img
            src={heroImage}
            alt="Agency Growth Dashboard"
            style={{
              maxWidth: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
              borderRadius: '20px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
