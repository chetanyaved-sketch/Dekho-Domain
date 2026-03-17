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
            fontFamily: "'Poppins', sans-serif"
        }}>
            {/* Header */}
            <header style={{
                padding: '16px 32px',
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
                    <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
                        DekhoApp
                    </span>
                </div>
            </header>

            {/* Main Content Area */}
            <main style={{
                flex: 1,
                padding: '0 24px 24px 24px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Large Background Container */}
                <div style={{
                    flex: 1,
                    position: 'relative',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '60px 20px 40px 20px'
                }}>
                    {/* Dark Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)', // Adjust opacity as needed
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
                        marginBottom: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        <AutoAwesome style={{ color: '#FF7F32', fontSize: '1.2rem' }} />
                        <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>The #1 Video Discovery App</span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        position: 'relative',
                        zIndex: 2,
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: '800',
                        color: '#ffffff',
                        lineHeight: '1.1',
                        textAlign: 'center',
                        marginBottom: '24px',
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}>
                        <span style={{ color: '#FF7F32' }}>Dekho!</span> Magar Pyar<br />se.
                    </h1>

                    {/* Sub-headline */}
                    <p style={{
                        position: 'relative',
                        zIndex: 2,
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#f0f0f0',
                        textAlign: 'center',
                        maxWidth: '650px',
                        marginBottom: '40px',
                        lineHeight: '1.6',
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
                                padding: '16px 40px',
                                borderRadius: '50px',
                                border: 'none',
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                cursor: 'pointer',
                                boxShadow: '0 8px 25px rgba(255, 127, 50, 0.4)',
                                transition: 'transform 0.2s'
                            }}>
                                <GetApp /> Download the App
                            </button>
                        </a>
                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginTop: '12px' }}>
                            Available on iOS & Android
                        </span>
                    </div>

                    {/* Space filler to push cards to the bottom */}
                    <div style={{ flex: 1, minHeight: '60px' }}></div>

                    {/* Feature Cards Row */}
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        maxWidth: '1200px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '20px'
                    }}>
                        {/* Card 1 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '32px 24px',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <TouchApp style={{ color: '#FF7F32', fontSize: '2.5rem', marginBottom: '16px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>Swipe to Connect</h3>
                            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.5' }}>Effortlessly find interesting people with a simple swipe. It's fast, fun, and natural.</p>
                        </div>

                        {/* Card 2 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '32px 24px',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <VideoCameraFront style={{ color: '#FF7F32', fontSize: '2.5rem', marginBottom: '16px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>HD Video Calls</h3>
                            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.5' }}>Crystal-clear video quality makes every conversation feel like you're right there together.</p>
                        </div>

                        {/* Card 3 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '32px 24px',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <CardGiftcard style={{ color: '#FF7F32', fontSize: '2.5rem', marginBottom: '16px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>Exciting Gifts</h3>
                            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.5' }}>Express yourself with unique digital gifts that make every interaction special.</p>
                        </div>

                        {/* Card 4 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '32px 24px',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <Security style={{ color: '#FF7F32', fontSize: '2.5rem', marginBottom: '16px' }} />
                            <h3 style={{ color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>100% Secure</h3>
                            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.5' }}>Your privacy is our priority. Enjoy fully safe, encrypted, and monitored conversations.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdsLanding;
