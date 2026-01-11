import React from 'react';
import img1 from '../assets/carousel_1.png';
import img2 from '../assets/carousel_2.png';
import img3 from '../assets/carousel_3.png';
import heroImg from '../assets/hero_image.png';

const ImageCarousel: React.FC = () => {
    // 4 unique images x 3 sets = 12 items for smooth infinite scroll
    const images = [img1, img2, img3, heroImg, img1, img2, img3, heroImg, img1, img2, img3, heroImg];

    return (
        <div style={{
            width: '100%',
            overflow: 'hidden',
            padding: '40px 0',
            background: 'linear-gradient(to bottom, #fff 0%, #FFF0E5 100%)',
            position: 'relative'
        }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h3 style={{ color: '#FF7F32', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>
                    Join the Movement
                </h3>
            </div>

            <div style={{
                display: 'flex',
                gap: '24px',
                animation: 'scroll 40s linear infinite', // Slowed down for more items
                width: 'max-content'
            }}>
                {images.map((src, index) => (
                    <div key={index} className="popped-out" style={{
                        width: '350px',
                        height: '450px',
                        flexShrink: 0,
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                        border: '4px solid #fff'
                    }}>
                        <img
                            src={src}
                            alt={`Influencer Lifestyle ${index}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                ))}
            </div>

            <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
        </div>
    );
};

export default ImageCarousel;
