import { motion } from 'framer-motion';
import profileData from '../data/profile.json';
import certifications from '../data/certifications.json';

const About = () => {
    return (
        <div className="content">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>My Bio & Credentials</h1>

                {/* Bio Section */}
                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>About Me</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>
                        {profileData.summary}
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <a href={profileData.resumePath} target="_blank" rel="noopener noreferrer">
                            <button className="bubble-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                📄 Download Resume
                            </button>
                        </a>
                    </div>
                </div>

                {/* Certifications Grid */}
                <h2 style={{ marginBottom: '1.5rem', paddingLeft: '1rem' }}>Certifications & Documents</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            whileHover={{ scale: 1.03 }}
                            className="glass-panel"
                            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer} • {cert.date}</p>
                            </div>
                            <div style={{ marginTop: '1.5rem' }}>
                                <a href={cert.path} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <button className="bubble-btn" style={{
                                        fontSize: '0.9rem',
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        color: 'var(--accent-color)'
                                    }}>
                                        View Document ↗
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
