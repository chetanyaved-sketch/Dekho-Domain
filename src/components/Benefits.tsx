import React from 'react';
import { CurrencyRupee, AccessTimeFilled, Dashboard } from '@mui/icons-material';

const Benefits: React.FC = () => {
    const benefits = [
        {
            title: "Commission Ki Baarish",
            description: "Har call, har gift pe aapka share pakka. Creator kamaega, toh aap bhi kamaoge.",
            Icon: CurrencyRupee
        },
        {
            title: "Payment On Time",
            description: "Hafte ke hafte hisaab clear. Direct bank transfer, bina kisi delay ke.",
            Icon: AccessTimeFilled
        },
        {
            title: "Total Control",
            description: "Live tracking dashboard. Kaunsa creator live hai, kitna earning hua — sab single click pe.",
            Icon: Dashboard
        }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: '#fdfdfd' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>Partner Kyun Banein?</h2>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Dekho! ke saath agency chalao nahi, udaao 🚀</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px'
                }}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className="modern-card" style={{
                            padding: '40px',
                            textAlign: 'left',
                            background: '#fff',
                            borderRadius: '24px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            border: '1px solid #f0f0f0',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                marginBottom: '24px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#FF7F32'
                            }}>
                                <benefit.Icon sx={{ fontSize: 60 }} />
                            </div>
                            <h3 style={{ marginBottom: '16px', color: '#1a1a1a', fontSize: '1.5rem', fontWeight: '700' }}>{benefit.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1.1rem' }}>{benefit.description}</p>

                            <style>{`
                                .modern-card:hover {
                                    transform: translateY(-15px);
                                    box-shadow: 0 30px 60px rgba(255, 127, 50, 0.15) !important;
                                    border-color: #ffe0d0 !important;
                                }
                            `}</style>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
