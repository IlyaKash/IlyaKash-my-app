import { useState } from 'react';
import './App.css';
import React from 'react';
import RenderList from './components/left_menu';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/routes';


function App() {
  const [lab, setLab]=useState(0);//отвечает за переключение лабараторных



  return (
    <div className="App">

      <header className="Head">
        <h1>Отчет по лабораторным, Кашкаров И.И. 4.105-1</h1>
      </header>

      <main>
        <BrowserRouter>
          <div className="Left_menu">
            <RenderList setLab={setLab}/>
          </div>
          
          <div className="Content">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
