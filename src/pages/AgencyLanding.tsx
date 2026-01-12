import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import LeadForm from '../components/LeadForm';
import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';

const AgencyLanding: React.FC = () => {
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
                            Dekho! <span style={{ fontSize: '1rem', color: '#666', fontWeight: '500' }}>Agency</span>
                        </div>
                    </Link>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Link to="/creator" style={{
                            textDecoration: 'none',
                            color: '#666',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            Are you a Creator?
                        </Link>
                        <button
                            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary"
                            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </header>

            {/* Spacer for fixed header */}
            <div style={{ height: '70px' }}></div>

            <main>
                <Hero />
                <ImageCarousel />
                <Benefits />
                <LeadForm />
            </main>

            <footer style={{ backgroundColor: '#111', color: '#fff', padding: '40px 0', textAlign: 'center' }}>
                <div className="container">
                    <h3 style={{ color: 'var(--primary-orange)', marginBottom: '16px' }}>Dekho!</h3>
                    <p style={{ color: '#888', marginBottom: '24px' }}>The growing influencer ecosystem.</p>
                    <div style={{ fontSize: '0.9rem', color: '#555' }}>
                        © {new Date().getFullYear()} Dekho! Agency Program. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AgencyLanding;
