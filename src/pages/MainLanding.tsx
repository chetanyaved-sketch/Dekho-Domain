import React from 'react';
import { Link } from 'react-router-dom';
import { TouchApp, VideoCameraFront, CardGiftcard, Business, Star } from '@mui/icons-material';
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
                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-orange)', letterSpacing: '-1px' }}>
                            Dekho!
                        </div>
                    </Link>
                </div>
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
                            Naye Dost, Real Connections
                        </span>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            marginBottom: '20px',
                            lineHeight: '1.1',
                            color: '#1a1a1a',
                            fontWeight: '800'
                        }}>
                            Dekho! <span className="gradient-text">Magar Pyar se.</span>
                        </h1>

                        <p style={{
                            fontSize: '1.3rem',
                            color: '#555',
                            marginBottom: '50px',
                            maxWidth: '700px',
                            margin: '0 auto 60px',
                            lineHeight: '1.6'
                        }}>
                            Bharat ka apna video discovery app. Yahan har swipe mein hai ek naya dost aur har call mein ek muskurahat.
                            <br /><br />
                            <strong style={{ color: '#FF7F32' }}>Secure, Private aur 100% Fun!</strong>
                        </p>

                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
                            <button className="btn-primary" style={{ padding: '18px 45px', fontSize: '1.2rem', borderRadius: '50px' }}>
                                Download App
                            </button>
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
                            <img src={imgCreator} alt="Dekho App Experience" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section-padding">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 className="gradient-text">Aapke Liye Kya Khaas Hai?</h2>
                            <p style={{ color: '#666', fontSize: '1.1rem' }}>Fun features jo aapko deewana bana de.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                            {/* Feature 1 */}
                            <div className="modern-card" style={{ padding: '40px 30px', textAlign: 'center', background: '#fff', borderRadius: '30px', border: '1px solid #eee', transition: 'all 0.3s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '20px' }}><TouchApp sx={{ fontSize: 60 }} /></div>
                                <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Swipe to Discover</h3>
                                <p style={{ color: '#666', lineHeight: '1.5' }}>Bas swipe karo aur apne perfect match ya naye doston se milo. Easy aur amazing!</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="modern-card" style={{ padding: '40px 30px', textAlign: 'center', background: '#fff', borderRadius: '30px', border: '1px solid #eee', transition: 'all 0.3s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '20px' }}><VideoCameraFront sx={{ fontSize: 60 }} /></div>
                                <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Full HD Video</h3>
                                <p style={{ color: '#666', lineHeight: '1.5' }}>Crystal clear video calls. Aisa lagega jaise saamne baithe ho. No lag, only talk.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="modern-card" style={{ padding: '40px 30px', textAlign: 'center', background: '#fff', borderRadius: '30px', border: '1px solid #eee', transition: 'all 0.3s' }}>
                                <div style={{ color: '#FF7F32', marginBottom: '20px' }}><CardGiftcard sx={{ fontSize: 60 }} /></div>
                                <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Cool Digital Gifts</h3>
                                <p style={{ color: '#666', lineHeight: '1.5' }}>Apne pasandida logon ko unique digital gifts bhejo aur unka dil jeet lo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Links Section - Moved to Bottom */}
                <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#1a1a1a' }}>Dekho! Se Judein</h2>
                            <p style={{ color: '#666' }}>Humara professional network join karein.</p>
                        </div>

                        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {/* Link to Agency */}
                            <Link to="/partner" style={{ textDecoration: 'none', flex: '1', minWidth: '280px', maxWidth: '400px' }}>
                                <div className="popped-out" style={{
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    background: '#fff',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}>
                                    <div style={{ color: '#FF7F32', marginBottom: '16px' }}>
                                        <Business sx={{ fontSize: 40 }} />
                                    </div>
                                    <h3 style={{ color: '#1a1a1a', fontSize: '1.4rem', marginBottom: '8px', fontWeight: '700' }}>Dekho Agency</h3>
                                    <p style={{ color: '#666', fontSize: '0.95rem' }}>Grow your influencer business with us.</p>
                                </div>
                            </Link>

                            {/* Link to Creator */}
                            <Link to="/creator" style={{ textDecoration: 'none', flex: '1', minWidth: '280px', maxWidth: '400px' }}>
                                <div className="popped-out" style={{
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    background: '#fff',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}>
                                    <div style={{ color: '#FF7F32', marginBottom: '16px' }}>
                                        <Star sx={{ fontSize: 40 }} />
                                    </div>
                                    <h3 style={{ color: '#1a1a1a', fontSize: '1.4rem', marginBottom: '8px', fontWeight: '700' }}>Dekho Creators</h3>
                                    <p style={{ color: '#666', fontSize: '0.95rem' }}>Monetize your talent and reach more fans.</p>
                                </div>
                            </Link>
                        </div>
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
