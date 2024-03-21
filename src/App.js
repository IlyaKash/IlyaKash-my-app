import { useState } from 'react';
import './App.css';
import React from 'react';
import RenderList from './components/left_menu';
import Lab2Component from './components/lab2_component';
import ThemeProvider from './context/ThemeContext';
import ThemeToggler from './context/ThemeToggler';
import Lab4Component from './components/lab4_component';


function App() {
  const [lab, setLab]=useState(0);//отвечает за переключение лабараторных



  return (
    <div className="App">

      <header className="Head">
        <h1>Отчет по лабораторным, Кашкаров И.И. 4.105-1</h1>
      </header>

      <main>

        <div className="Left_menu">
          <RenderList setLab={setLab}/>
        </div>

        <div className="Content">
          {lab===1 && (
            <iframe src='/lab1/lab1.html' title='Lab1' width="80%" height="500px" />
          )}
          {lab===2 && (
            <Lab2Component />
          )}
          {lab===4 && (
            <ThemeProvider>
              <ThemeToggler />
              <Lab4Component />
            </ThemeProvider>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
