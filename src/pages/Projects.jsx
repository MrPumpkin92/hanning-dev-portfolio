import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <div className="content">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Project Database</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div style={{
                                marginBottom: '1rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span style={{
                                    background: 'rgba(122, 156, 108, 0.2)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '99px',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-color)'
                                }}>
                                    {project.type}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>

                            <p style={{
                                color: 'var(--text-secondary)',
                                flex: 1,
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-main)',
                                        opacity: 0.7
                                    }}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} style={{ textDecoration: 'none' }}>
                                <button className="bubble-btn" style={{ width: '100%' }}>
                                    View Project
                                </button>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
