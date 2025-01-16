import React from 'react';
import 'devicon/devicon.min.css'; 

const IconListComponent = ({ icons, gap = '10px', size = '24px' }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2vh',
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
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default function IconTray({ iconlist }) {
  return (
    <IconListComponent icons={iconlist} gap="20px" size="70px" />
  );
}
