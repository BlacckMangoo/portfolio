import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconTray from './ToolsIconList';
import LazyLoadVideo from './LazyLoadVideo';

const Project = ({ title, description, videoSrc, imagesrc, icons, link, linkText }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="project-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="project-content">
                <motion.div 
                    className="project-header"
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ cursor: 'pointer', width: '100%' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <h1>{title}</h1>
                        <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}
                        >
                            ▼
                        </motion.span>
                    </div>
                    <p>{description}</p>
                </motion.div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{ overflow: 'hidden', width: '100%' }}
                        >
                            {link && (
                                <motion.a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="play-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ marginTop: '1rem', display: 'inline-block' }}
                                >
                                    {linkText || "View Project"}
                                </motion.a>
                            )}

                            {videoSrc && (
                                <div className="project-video" style={{ marginTop: '1.5rem' }}>
                                    <LazyLoadVideo src={videoSrc} />
                                </div>
                            )}

                            {imagesrc && (
                                <div style={{ marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div className="project-image">
                                        <img src={imagesrc} alt={title} />
                                    </div>
                                </div>
                            )}

                            {icons && (
                                <div style={{ marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <IconTray iconlist={icons} />
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Project;
