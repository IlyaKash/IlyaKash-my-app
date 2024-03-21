import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    //document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    const elems=document.getElementsByClassName('App');
    Array.from(elems).forEach(elem => {
        elem.style.backgroundColor = theme === 'light' ? '#ffffff' : '#555555';
        elem.style.color = theme === 'light' ? '#333333' : '#ffffff';
      });
  }, [theme]);
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};

export default ThemeToggler;