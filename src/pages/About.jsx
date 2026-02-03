import { motion } from 'framer-motion';
import profileData from '../data/profile.json';
import experienceData from '../data/experience.json';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
        <div className="content">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ paddingTop: '2rem' }}
            >
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column: Bio & Stats */}
                    <div>
                        <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>
                            Hello, I'm <span style={{ color: 'var(--accent-color)' }}>Adrian</span>.
                        </h1>

                        <p
                            style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#ccc' }}
                            dangerouslySetInnerHTML={{ __html: profileData.bio_highlighted }}
                        />

                        {/* Stats Cards */}
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                            {profileData.stats.map((stat, index) => (
                                <div key={index} className="glass-panel" style={{
                                    padding: '1.5rem',
                                    flex: 1,
                                    textAlign: 'center',
                                    background: 'rgba(255,255,255,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                        color: 'var(--accent-color)',
                                        marginBottom: '0.25rem'
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Buttons */}
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                                <FaGithub />
                            </a>
                            <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                                <FaLinkedin />
                            </a>
                            <a href={profileData.socials.email} className="social-btn">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Education Card */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '30px',
                            border: '1px solid rgba(122, 156, 108, 0.3)',
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(13,17,14,0.4) 100%)'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
                        <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Education</h2>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{profileData.education.school}</h3>
                        <p style={{ fontSize: '1.1rem', color: '#ddd', marginBottom: '0.5rem' }}>{profileData.education.degree}</p>
                        <p style={{ color: '#888', marginBottom: '1rem' }}>{profileData.education.dates}</p>

                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(168, 207, 152, 0.1)',
                            color: 'var(--accent-color)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--accent-color)',
                            marginBottom: '2rem',
                            fontWeight: '500'
                        }}>
                            {profileData.education.honor}
                        </div>

                        <h4 style={{ textTransform: 'uppercase', color: '#888', letterSpacing: '1px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                            Relevant Coursework:
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {profileData.education.coursework.map((course, i) => (
                                <li key={i} style={{
                                    marginBottom: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#ccc'
                                }}>
                                    <span style={{ color: 'var(--accent-color)', marginRight: '0.75rem' }}>▶</span> {course}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Experience Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '5rem', marginBottom: '3rem' }}
                >
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '2rem',
                        marginBottom: '3rem',
                        color: 'var(--text-main)'
                    }}>
                        Experience <span style={{ color: 'var(--accent-color)', fontSize: '1rem', verticalAlign: 'middle' }}>(Extracted from CV)</span>
                    </h2>

                    <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                        {/* Vertical Line */}
                        <div style={{
                            position: 'absolute',
                            left: '20px',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'rgba(255,255,255,0.1)'
                        }} />

                        {experienceData.map((exp) => (
                            <div key={exp.id} style={{
                                position: 'relative',
                                paddingLeft: '60px',
                                marginBottom: '3rem'
                            }}>
                                {/* Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '11px',
                                    top: '5px',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-color)',
                                    border: '2px solid var(--accent-color)',
                                    boxShadow: '0 0 10px var(--accent-color)'
                                }} />

                                <div className="glass-panel" style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', color: 'white' }}>{exp.role}</h3>
                                        <span style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            padding: '0.2rem 0.8rem',
                                            borderRadius: '99px',
                                            fontSize: '0.9rem',
                                            color: '#ddd'
                                        }}>
                                            {exp.dates}
                                        </span>
                                    </div>

                                    <div style={{ fontSize: '1.1rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                                        {exp.company} <span style={{ color: '#666' }}>• {exp.location}</span>
                                    </div>

                                    <ul style={{ paddingLeft: '1.2rem', color: '#ccc', lineHeight: '1.7' }}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
