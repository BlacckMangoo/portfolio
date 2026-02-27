import React from 'react';
import { motion } from 'framer-motion';
import IconTray from './ToolsIconList';
import LazyLoadVideo from './LazyLoadVideo';

const Project = ({ title, description, videoSrc, imagesrc, icons, link, linkText }) => {
    return (
        <motion.div
            className="project-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
        >
            {/* Thumbnail */}
            <div className="project-thumb">
                {videoSrc ? (
                    <LazyLoadVideo src={videoSrc} />
                ) : imagesrc ? (
                    <img src={imagesrc} alt={title} />
                ) : (
                    <div className="project-thumb-placeholder">{title.charAt(0)}</div>
                )}
            </div>

            {/* Body */}
            <div className="project-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            {/* Footer */}
            <div className="project-card-footer">
                {icons && <IconTray iconlist={icons} />}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="play-button"
                    >
                        {linkText || "View Project"}
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default Project;
