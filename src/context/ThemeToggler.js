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
    const m=document.getElementsByTagName('main');
    Array.from(m).forEach(elem=>{
      elem.style.backgroundColor= theme === 'light' ? '#ffffff' : '#55ff55';
      elem.style.color = theme === 'light' ? '#333333' : '#ffffff';
    });
    const h=document.getElementsByClassName('Head');
    Array.from(h).forEach(elem=>{
      elem.style.backgroundColor= theme === 'light' ? '#ffffa1' : '#888888';
      elem.style.color = theme === 'light' ? '#333333' : '#ffffff';
    });
    const f=document.getElementsByTagName('footer');
    Array.from(f).forEach(elem=>{
      elem.style.backgroundColor= theme === 'light' ? '#ffffa1' : '#888888';
      elem.style.color = theme === 'light' ? '#333333' : '#ff23ff';
    });


    const lmenu=document.getElementsByClassName('ContainerLeftMenu');
    Array.from(lmenu).forEach(elem=>{
      elem.style.backgroundColor= theme === 'light' ? '#fff3ea' : '#223344';
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