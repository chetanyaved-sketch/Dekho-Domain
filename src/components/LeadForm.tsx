import React, { useState } from 'react';

const LeadForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            // Reset after 5 seconds if needed, or keep showing success
            // setTimeout(() => setSubmitted(false), 5000);
        }, 500);
    };

    if (submitted) {
        return (
            <section id="lead-form" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <div className="glass-card popped-out" style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: '60px',
                        textAlign: 'center',
                        background: '#fff',
                        border: '2px solid #4CAF50'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                        <h2 style={{ color: '#4CAF50', marginBottom: '16px' }}>Success!</h2>
                        <p style={{ fontSize: '1.2rem', color: '#555' }}>
                            Details has been submitted. Team will contact you shortly.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="lead-form" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
            <div className="container">
                <div className="glass-card popped-out" style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    padding: '40px',
                    background: '#fff', // Solid background for better contrast
                    borderRadius: '24px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 className="gradient-text" style={{ fontSize: '2rem' }}>Join the Revolution</h2>
                        <p style={{ color: '#666' }}>Fill details to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Name */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Name <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #ddd',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.3s',
                                    background: '#f9f9f9'
                                }}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Phone Number <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="tel"
                                placeholder="e.g. 9876543210"
                                required
                                pattern="[0-9]{10}"
                                title="Please enter a valid 10-digit phone number"
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #ddd',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.3s',
                                    background: '#f9f9f9'
                                }}
                            />
                        </div>

                        {/* Email (Optional) */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email <span style={{ color: '#999', fontSize: '0.9rem' }}>(Optional)</span></label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #ddd',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.3s',
                                    background: '#f9f9f9'
                                }}
                            />
                        </div>

                        <button type="submit" className="btn-primary" style={{ marginTop: '10px', width: '100%', fontSize: '1.1rem', padding: '14px' }}>
                            Submit Details
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;
