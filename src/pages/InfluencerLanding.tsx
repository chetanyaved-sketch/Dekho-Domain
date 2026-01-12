import React from 'react';
import { Link } from 'react-router-dom';
import { MonetizationOn, CardGiftcard, Security } from '@mui/icons-material';
import imgVideoCall from '../assets/carousel_1.png'; // Reusing video call image
import LeadForm from '../components/LeadForm';

const InfluencerLanding: React.FC = () => {
    return (
        <div className="app">
            {/* Header */}
            <header style={{
                padding: '20px 0',
                position: 'fixed',
                width: '100%',
                top: 0,
                backgroundColor: '#fff',
                zIndex: 1000,
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-orange)' }}>
                            Dekho! <span style={{ fontSize: '1rem', color: '#666', fontWeight: '500' }}>For Creators</span>
                        </div>
                    </Link>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Link to="/partner" style={{
                            textDecoration: 'none',
                            color: '#666',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            Run an Agency?
                        </Link>
                        <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                            Download App
                        </button>
                    </div>
                </div>
            </header>

            <div style={{ height: '70px' }}></div>

            <main>
                {/* Hero Section */}
                <section style={{
                    background: 'radial-gradient(circle at 90% 10%, #FFF0E5 0%, #FFFFFF 80%)',
                    padding: '120px 0 80px',
                    overflow: 'hidden'
                }}>
                    <div className="container" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: window.innerWidth < 768 ? 'column-reverse' : 'row',
                        gap: '40px'
                    }}>
                        <div style={{ flex: 1 }}>
                            <span style={{
                                background: '#FF7F32',
                                color: '#fff',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                marginBottom: '20px',
                                display: 'inline-block'
                            }}>
                                🔥 #1 Monetization App
                            </span>
                            <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '24px' }}>
                                Apni Fan Following Ko <br />
                                <span className="gradient-text">Cash Mein Badlo!</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '32px', maxWidth: '500px' }}>
                                Sirf likes aur comments se ghar nahi chalta. Dekho App pe aao, video calls aur gifts se <strong style={{ color: '#333' }}>Real Paise</strong> kamao.
                            </p>
                            <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px', boxShadow: '0 10px 25px rgba(255, 127, 50, 0.3)' }}>
                                Start Earning Now
                            </button>
                        </div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <div className="popped-out" style={{
                                borderRadius: '30px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                                border: '8px solid #fff',
                                transform: 'rotate(2deg)'
                            }}>
                                <img src={imgVideoCall} alt="Creator on Video Call" style={{ width: '100%', maxWidth: '400px', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 className="gradient-text">Creator Banne Ke Fayde</h2>
                            <p style={{ fontSize: '1.1rem', color: '#666' }}>Fame bhi, Fortune bhi.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {/* Card 1 */}
                            <div className="modern-card" style={{ padding: '30px', textAlign: 'left', background: '#fff', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', transition: 'all 0.4s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '20px' }}>
                                    <MonetizationOn sx={{ fontSize: 50 }} />
                                </div>
                                <h3 style={{ marginBottom: '12px', fontSize: '1.5rem', color: '#1a1a1a' }}>Baatein Karo, Paise Kamao</h3>
                                <p style={{ color: '#666', fontSize: '1.1rem' }}>Fans se video call pe connect ho jao. Rate aap decide karo, earning hum ensure karenge.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="modern-card" style={{ padding: '30px', textAlign: 'left', background: '#fff', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', transition: 'all 0.4s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '20px' }}>
                                    <CardGiftcard sx={{ fontSize: 50 }} />
                                </div>
                                <h3 style={{ marginBottom: '12px', fontSize: '1.5rem', color: '#1a1a1a' }}>Gifts Jo Cash Ban Jayein</h3>
                                <p style={{ color: '#666', fontSize: '1.1rem' }}>Virtual gifts receive karo aur unhein instant cash mein convert karke withdraw karo.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="modern-card" style={{ padding: '30px', textAlign: 'left', background: '#fff', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', transition: 'all 0.4s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '20px' }}>
                                    <Security sx={{ fontSize: 50 }} />
                                </div>
                                <h3 style={{ marginBottom: '12px', fontSize: '1.5rem', color: '#1a1a1a' }}>Privacy Ki Full Guarantee</h3>
                                <p style={{ color: '#666', fontSize: '1.1rem' }}>Na number share hoga, na koi personal detail. 100% secure aur safe calls.</p>
                            </div>
                        </div>
                        <style>{`
                            .modern-card:hover {
                                transform: translateY(-15px);
                                box-shadow: 0 30px 60px rgba(255, 127, 50, 0.15) !important;
                                border-color: #ffe0d0 !important;
                            }
                        `}</style>
                    </div>
                </section>

                {/* New Form Section */}
                <LeadForm />

            </main>

            <footer style={{ backgroundColor: '#111', color: '#fff', padding: '40px 0', textAlign: 'center' }}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Dekho! for Creators.</p>
                </div>
            </footer>
        </div>
    );
};

export default InfluencerLanding;
