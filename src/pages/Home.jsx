import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileData from '../data/profile.json';

const Home = () => {
    return (
        <div className="content">
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="glass-panel"
                        style={{
                            padding: '4rem',
                            display: 'inline-block',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '50px' // Extra bubbly
                        }}
                    >
                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '1rem',
                            backgroundImage: 'linear-gradient(135deg, #fff 0%, #a8cf98 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {profileData.name}
                        </h1>
                        <h2 style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-secondary)',
                            fontWeight: '400',
                            marginBottom: '2rem'
                        }}>
                            {profileData.title}
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '3rem',
                            lineHeight: '1.8',
                            maxWidth: '600px',
                            margin: '0 auto 3rem'
                        }}>
                            {profileData.summary}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/projects">
                                <button className="bubble-btn">
                                    View Projects
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="bubble-btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                                    Bio & Resume
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
