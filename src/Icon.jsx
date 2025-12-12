
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './App.css';

const SocialIcons = () => {
  const icons = [
    {
      name: "GitHub",
      link: "https://github.com/BlacckMangoo",
      component: <FaGithub />
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/satvikk_gupta_/",
      component: <FaInstagram />
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/satvik-gupta-4462a8310/",
      component: <FaLinkedin />
    },
    {
      name: "Twitter",
      link: "https://x.com/satvikk_guptaa",
      component: <FaXTwitter />
    }
  ];

  return (
    <div className="social-icons-container">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          title={icon.name}
          aria-label={icon.name}
        >
          <span className="social-icon">
            {icon.component}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

