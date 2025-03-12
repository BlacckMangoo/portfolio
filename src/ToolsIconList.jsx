import React from 'react';
import 'devicon/devicon.min.css'; 

const IconListComponent = ({ icons, gap = '10px', size = '24px' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem 0',
      }}
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            fontSize: size,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#00ff00', // Green color for the icons
            margin: '5px',
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default function IconTray({ iconlist }) {
  // Use responsive size based on viewport width
  const iconSize = window.innerWidth < 576 ? '50px' : '70px';
  return (
    <IconListComponent icons={iconlist} gap="15px" size={iconSize} />
  );
}
