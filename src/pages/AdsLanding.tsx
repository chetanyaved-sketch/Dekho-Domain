import React from 'react';
import { TouchApp, VideoCameraFront, CardGiftcard, Security, GetApp, AutoAwesome } from '@mui/icons-material';
import bgImage from '../assets/hero_image.png';

const AdsLanding: React.FC = () => {
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.dekho.app";

    return (
        <div style={{
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Poppins', sans-serif",
            overflowX: 'hidden'
        }}>
            {/* Header */}
            <header style={{
                padding: 'clamp(12px, 3vh, 20px) clamp(16px, 5vw, 40px)',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        backgroundColor: '#FF7F32',
                        borderRadius: '8px',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <VideoCameraFront style={{ color: '#fff', fontSize: '1.2rem' }} />
                    </div>
                    <span style={{ fontSize: 'clamp(1.2rem, 4vw, 1.4rem)', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
                        DekhoApp
                    </span>
                </div>
            </header>

            {/* Main Content Area */}
            <main style={{
                flex: 1,
                padding: '0 clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Large Background Container */}
                <div style={{
                    flex: 1,
                    position: 'relative',
                    borderRadius: 'clamp(20px, 5vw, 32px)',
                    overflow: 'hidden',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 'clamp(40px, 10vh, 80px) 20px clamp(30px, 5vh, 60px) 20px'
                }}>
                    {/* Dark Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)', 
                        zIndex: 1
                    }}></div>

                    {/* Top Pill */}
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: 'clamp(20px, 5vh, 40px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        <AutoAwesome style={{ color: '#FF7F32', fontSize: '1.1rem' }} />
                        <span style={{ color: '#fff', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', fontWeight: '500' }}>The #1 Video Discovery App</span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        position: 'relative',
                        zIndex: 2,
                        fontSize: 'clamp(2.2rem, 8vw, 5.5rem)',
                        fontWeight: '800',
                        color: '#ffffff',
                        lineHeight: '1.1',
                        textAlign: 'center',
                        marginBottom: '20px',
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        maxWidth: '900px'
                    }}>
                        <span style={{ color: '#FF7F32' }}>Dekho!</span> Magar Pyar<br />se.
                    </h1>

                    {/* Sub-headline */}
                    <p style={{
                        position: 'relative',
                        zIndex: 2,
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
                        color: '#f0f0f0',
                        textAlign: 'center',
                        maxWidth: '600px',
                        marginBottom: '35px',
                        lineHeight: '1.5',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        Bharat's ultimate video discovery platform. Connect, swipe, and find your next best friend in seconds.
                    </p>

                    {/* CTA Button */}
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <a href={playStoreLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <button style={{
                                backgroundColor: '#FF7F32',
                                color: '#fff',
                                padding: 'clamp(14px, 2vh, 18px) clamp(24px, 5vw, 45px)',
                                borderRadius: '50px',
                                border: 'none',
                                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                boxShadow: '0 8px 25px rgba(255, 127, 50, 0.4)',
                                transition: 'transform 0.2s'
                            }}>
                                <GetApp /> Download the App
                            </button>
                        </a>
                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginTop: '10px' }}>
                            Available on iOS & Android
                        </span>
                    </div>

                    {/* Space filler to push cards to the bottom */}
                    <div style={{ flex: 1, minHeight: '40px' }}></div>

                    {/* Feature Cards Row */}
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        maxWidth: '1200px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(150px, 45%, 260px), 1fr))',
                        gap: 'clamp(12px, 3vw, 20px)'
                    }}>
                        {/* Card 1 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: 'clamp(20px, 4vh, 32px) clamp(16px, 4vw, 24px)',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <TouchApp style={{ color: '#FF7F32', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '12px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: '700', marginBottom: '8px' }}>Swipe to Connect</h3>
                            <p style={{ color: '#666', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: '1.4' }}>Effortlessly find interesting people with a simple swipe. It's fast, fun, and natural.</p>
                        </div>

                        {/* Card 2 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: 'clamp(20px, 4vh, 32px) clamp(16px, 4vw, 24px)',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <VideoCameraFront style={{ color: '#FF7F32', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '12px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: '700', marginBottom: '8px' }}>HD Video Calls</h3>
                            <p style={{ color: '#666', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: '1.4' }}>Crystal-clear video quality makes every conversation feel like you're right there together.</p>
                        </div>

                        {/* Card 3 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: 'clamp(20px, 4vh, 32px) clamp(16px, 4vw, 24px)',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <CardGiftcard style={{ color: '#FF7F32', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '12px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: '700', marginBottom: '8px' }}>Exciting Gifts</h3>
                            <p style={{ color: '#666', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: '1.4' }}>Express yourself with unique digital gifts that make every interaction special.</p>
                        </div>

                        {/* Card 4 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: 'clamp(20px, 4vh, 32px) clamp(16px, 4vw, 24px)',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <Security style={{ color: '#FF7F32', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '12px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: '700', marginBottom: '8px' }}>100% Secure</h3>
                            <p style={{ color: '#666', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: '1.4' }}>Your privacy is our priority. Enjoy fully safe, encrypted, and monitored conversations.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Policy Footer */}
            <footer style={{
                backgroundColor: '#0a101a',
                padding: 'clamp(20px, 4vh, 32px) clamp(12px, 5vw, 32px)',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 'clamp(16px, 4vw, 32px)',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', transition: 'color 0.2s' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', transition: 'color 0.2s' }}>Terms of Service</a>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', transition: 'color 0.2s' }}>Child Safety & Abuse Policy</a>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', transition: 'color 0.2s' }}>Community Guidelines</a>
            </footer>
        </div>
    );
};

export default AdsLanding;
