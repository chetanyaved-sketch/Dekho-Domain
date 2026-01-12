import React from 'react';
import { Link } from 'react-router-dom';
import { TouchApp, VideoCameraFront, CardGiftcard, Forum, Business, Star } from '@mui/icons-material';
import imgCreator from '../assets/carousel_1.png'; // Using the realistic creator image

const MainLanding: React.FC = () => {
    return (
        <div className="app">
            {/* Header */}
            <header style={{
                padding: '20px 0',
                position: 'fixed',
                width: '100%',
                top: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                boxShadow: '0 2px 20px rgba(0,0,0,0.02)'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-orange)', letterSpacing: '-1px' }}>
                            Dekho!
                        </div>
                    </Link>
                    <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <Link to="/partner" style={{
                            textDecoration: 'none',
                            color: '#333',
                            fontWeight: '600',
                            fontSize: '1rem',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            transition: 'all 0.3s'
                        }}
                            className="nav-link"
                        >
                            Agency Program
                        </Link>
                        <Link to="/creator" style={{
                            textDecoration: 'none',
                            color: '#333',
                            fontWeight: '600',
                            fontSize: '1rem',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            transition: 'all 0.3s'
                        }}
                            className="nav-link"
                        >
                            For Creators
                        </Link>
                    </nav>
                </div>
                <style>{`
          .nav-link:hover {
            background: #FFF0E5;
            color: var(--primary-orange) !important;
          }
        `}</style>
            </header>

            <div style={{ height: '80px' }}></div>

            <main>
                {/* Hero Section */}
                <section style={{
                    textAlign: 'center',
                    padding: '120px 0 80px',
                    background: 'linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Background Elements */}
                    <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'rgba(255, 127, 50, 0.05)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
                    <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '400px', height: '400px', background: 'rgba(255, 87, 34, 0.03)', borderRadius: '50%', filter: 'blur(80px)' }}></div>

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <span style={{
                            background: '#fff',
                            color: '#FF7F32',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            display: 'inline-block',
                            marginBottom: '30px',
                            boxShadow: '0 4px 15px rgba(255,127,50,0.15)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            The Connection App
                        </span>

                        {/* Updated Tagline: Single Line */}
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginBottom: '20px',
                            lineHeight: '1.2',
                            color: '#1a1a1a'
                        }}>
                            Dekho! <span className="gradient-text">Magar Pyar se.</span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: '#555',
                            marginBottom: '50px',
                            maxWidth: '650px',
                            margin: '0 auto 60px',
                            lineHeight: '1.6'
                        }}>
                            Real People. Real Talk. Ab naye logon se milna aur connection banana hua aur bhi aasaan.
                        </p>

                        {/* Redirection Buttons (Hero) */}
                        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
                            {/* Link to Agency */}
                            <Link to="/partner" style={{ textDecoration: 'none', flex: '1', minWidth: '280px', maxWidth: '350px' }}>
                                <div className="popped-out" style={{
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    background: '#fff',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}>
                                    <div style={{ color: '#FF7F32', marginBottom: '16px', transform: 'scale(1.1)' }}>
                                        <Business sx={{ fontSize: 50 }} />
                                    </div>
                                    <h3 style={{ color: '#1a1a1a', fontSize: '1.6rem', marginBottom: '8px', fontWeight: '700' }}>Dekho Agency</h3>
                                    <p style={{ color: '#666', fontSize: '1rem' }}>For Agencies</p>
                                </div>
                            </Link>

                            {/* Link to Creator */}
                            <Link to="/creator" style={{ textDecoration: 'none', flex: '1', minWidth: '280px', maxWidth: '350px' }}>
                                <div className="popped-out" style={{
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    background: '#fff',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}>
                                    <div style={{ color: '#FF7F32', marginBottom: '16px', transform: 'scale(1.1)' }}>
                                        <Star sx={{ fontSize: 50 }} />
                                    </div>
                                    <h3 style={{ color: '#1a1a1a', fontSize: '1.6rem', marginBottom: '8px', fontWeight: '700' }}>Dekho Creators</h3>
                                    <p style={{ color: '#666', fontSize: '1rem' }}>For Creators</p>
                                </div>
                            </Link>
                        </div>

                        {/* Visual */}
                        <div className="popped-out" style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
                            border: '8px solid #fff'
                        }}>
                            <img src={imgCreator} alt="Happy Creator on Video Call" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section-padding">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 className="gradient-text">Dekho Mein Kya Khaas Hai?</h2>
                            <p style={{ color: '#666' }}>Features jo aapko deewana bana de.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                            {/* Feature 1 */}
                            <div className="modern-card" style={{ padding: '30px', textAlign: 'center', background: '#fff', borderRadius: '20px', border: '1px solid #eee', transition: 'all 0.3s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '16px' }}><TouchApp sx={{ fontSize: 50 }} /></div>
                                <h3 style={{ marginBottom: '10px' }}>Swipe to Discover</h3>
                                <p style={{ color: '#666' }}>Bas swipe karo aur apne perfect match ya dost ko dhoondo.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="modern-card" style={{ padding: '30px', textAlign: 'center', background: '#fff', borderRadius: '20px', border: '1px solid #eee', transition: 'all 0.3s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '16px' }}><VideoCameraFront sx={{ fontSize: 50 }} /></div>
                                <h3 style={{ marginBottom: '10px' }}>HD Video Calling</h3>
                                <p style={{ color: '#666' }}>Face-to-face baat karo, bilkul real quality mein. No lag.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="modern-card" style={{ padding: '30px', textAlign: 'center', background: '#fff', borderRadius: '20px', border: '1px solid #eee', transition: 'all 0.3s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '16px' }}><CardGiftcard sx={{ fontSize: 50 }} /></div>
                                <h3 style={{ marginBottom: '10px' }}>Virtual Gifting</h3>
                                <p style={{ color: '#666' }}>Impress karo unique digital gifts ke saath. Dil jeet lo.</p>
                            </div>
                            {/* Feature 4 */}
                            <div className="modern-card" style={{ padding: '30px', textAlign: 'center', background: '#fff', borderRadius: '20px', border: '1px solid #eee', transition: 'all 0.3s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '16px' }}><Forum sx={{ fontSize: 50 }} /></div>
                                <h3 style={{ marginBottom: '10px' }}>Instant Messaging</h3>
                                <p style={{ color: '#666' }}>Kabhi bhi, kahin bhi chat karo. Private aur secure.</p>
                            </div>
                        </div>
                        <style>{`
                    .modern-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 20px 40px rgba(255, 127, 50, 0.15) !important;
                        border-color: #ffe0d0 !important;
                    }
                `}</style>
                    </div>
                </section>

            </main>

            {/* Footer with Policies */}
            <footer style={{ backgroundColor: '#111', color: '#fff', padding: '60px 0 20px', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', marginBottom: '30px' }}>Dekho!</h2>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        flexWrap: 'wrap',
                        marginBottom: '40px',
                        color: '#aaa',
                        fontSize: '0.9rem'
                    }}>
                        <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
                        <span style={{ cursor: 'pointer' }}>Terms of Service</span>
                        <span style={{ cursor: 'pointer' }}>Child Safety Policy</span>
                        <span style={{ cursor: 'pointer' }}>Community Guidelines</span>
                        <span style={{ cursor: 'pointer' }}>Abuse Policy</span>
                    </div>

                    <div style={{ borderTop: '1px solid #333', paddingTop: '20px', color: '#555', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Dekho! App. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLanding;
