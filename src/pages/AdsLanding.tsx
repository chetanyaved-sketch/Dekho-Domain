import React from 'react';
import { TouchApp, VideoCameraFront, CardGiftcard, Security, GetApp } from '@mui/icons-material';
import bgImage from '../assets/hero_image.png'; // Using the lifestyle hero image as background

const AdsLanding: React.FC = () => {
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.dekho.app"; // Placeholder

    return (
        <div style={{
            backgroundColor: '#111111', // Dark background around the main image card
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden', // Single screen, no scrolling
            padding: '24px',
            boxSizing: 'border-box',
            fontFamily: "'Poppins', sans-serif"
        }}>
            {/* Logo */}
            <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#FF7F32',
                letterSpacing: '-1px',
                marginBottom: '20px',
                paddingLeft: '10px'
            }}>
                Dekho!
            </div>

            {/* Main Image Container */}
            <div style={{
                flex: 1,
                position: 'relative',
                borderRadius: '30px',
                overflow: 'hidden',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}>
                {/* Dark Overlay for readability */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
                    zIndex: 1
                }}></div>

                {/* Central Content */}
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    textAlign: 'center',
                    padding: '0 20px',
                    width: '100%',
                    maxWidth: '900px'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: '800',
                        color: '#ffffff',
                        lineHeight: '1.1',
                        marginBottom: '20px',
                        textShadow: '0 4px 15px rgba(0,0,0,0.5)'
                    }}>
                        Naye Dost Banayein <br/><span style={{ color: '#FF7F32' }}>Live Video Pe!</span>
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        color: '#f0f0f0',
                        marginBottom: '40px',
                        lineHeight: '1.5',
                        maxWidth: '700px',
                        textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                    }}>
                        Bharat ka apna video app. Aasani se connect karein, chat karein aur mazedaar baatein shuru karein abhi.
                    </p>

                    <a href={playStoreLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="btn-primary" style={{
                            padding: '18px 45px',
                            fontSize: '1.3rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            borderRadius: '50px',
                            background: 'linear-gradient(135deg, #FF7F32, #FF5722)',
                            color: '#fff',
                            border: 'none',
                            fontWeight: '700',
                            boxShadow: '0 10px 30px rgba(255, 127, 50, 0.4)',
                            cursor: 'pointer',
                        }}>
                            <GetApp fontSize="large" /> Download App Now
                        </button>
                    </a>
                </div>

                {/* Features Row at Bottom */}
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    padding: '0 30px 40px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '24px',
                }}>
                    {/* Feature 1 */}
                    <div style={{
                        background: 'rgba(20, 20, 20, 0.4)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        padding: '24px',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        <TouchApp style={{ fontSize: 45, color: '#FF7F32', marginBottom: '15px' }} />
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', fontWeight: '700' }}>Swipe & Match</h3>
                        <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.4' }}>Turant naye logon se milein.</p>
                    </div>

                    {/* Feature 2 */}
                    <div style={{
                        background: 'rgba(20, 20, 20, 0.4)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        padding: '24px',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        <VideoCameraFront style={{ fontSize: 45, color: '#FF7F32', marginBottom: '15px' }} />
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', fontWeight: '700' }}>HD Video Calls</h3>
                        <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.4' }}>Clear and lag-free baatein.</p>
                    </div>

                    {/* Feature 3 */}
                    <div style={{
                        background: 'rgba(20, 20, 20, 0.4)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        padding: '24px',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        <CardGiftcard style={{ fontSize: 45, color: '#FF7F32', marginBottom: '15px' }} />
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', fontWeight: '700' }}>Send Gifts</h3>
                        <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.4' }}>Apne doston ko impress karein.</p>
                    </div>

                    {/* Feature 4 */}
                    <div style={{
                        background: 'rgba(20, 20, 20, 0.4)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        padding: '24px',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        <Security style={{ fontSize: 45, color: '#FF7F32', marginBottom: '15px' }} />
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', fontWeight: '700' }}>100% Secure</h3>
                        <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.4' }}>Aapki privacy hamari priority.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                textAlign: 'center',
                paddingTop: '20px',
                color: '#666',
                fontSize: '0.85rem'
            }}>
                © {new Date().getFullYear()} Dekho! App. Available on Google Play Store.
            </div>
        </div>
    );
};

export default AdsLanding;
