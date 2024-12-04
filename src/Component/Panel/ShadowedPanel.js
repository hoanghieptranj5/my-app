import React from 'react';
import './ShadowedPanel.css'; // Import the CSS file with the styles

const ShadowedPanel = ({ children }) => {
  return <div className="panel">{children}</div>;
};

export default ShadowedPanel;
