import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Lab4Component = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#333333' : '#ffffff', padding: '20px' }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <p>This is some content.</p>
    </div>
  );
};

export default Lab4Component;