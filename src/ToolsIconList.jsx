import React from 'react';
import {
  SiUnity,
  SiAdobephotoshop,
  SiDotnet,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiVite,
  SiOpengl
} from 'react-icons/si';
import { motion } from 'framer-motion';

// Mapping string keys to React Icon components
const iconMap = {
  unity: { icon: SiUnity, label: 'Unity', color: '#ffffff' },
  photoshop: { icon: SiAdobephotoshop, label: 'Photoshop', color: '#31A8FF' },
  csharp: { icon: SiDotnet, label: 'C# / .NET', color: '#512BD4' },
  react: { icon: SiReact, label: 'React', color: '#61DAFB' },
  threejs: { icon: SiOpengl, label: 'Three.js (OpenGL)', color: '#FFFFFF' }, // Fallback to OpenGL
  javascript: { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  html: { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  css: { icon: SiCss3, label: 'CSS3', color: '#1572B6' },
  node: { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  vite: { icon: SiVite, label: 'Vite', color: '#646CFF' }
};

const IconTray = ({ tools = [] }) => {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="tools-icon-tray">
      {tools.map((toolKey, index) => {
        const toolData = iconMap[toolKey.toLowerCase()] || iconMap['javascript']; // Fallback
        const IconComponent = toolData.icon;

        return (
          <motion.div
            key={toolKey + index}
            className="tool-icon-wrapper"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: toolData.color
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <IconComponent
              size={28}
              color={toolData.color} // Use brand color or override with theme
              style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}
            />
            <span className="tool-tooltip">{toolData.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default IconTray;
