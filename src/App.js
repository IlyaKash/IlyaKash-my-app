import { useContext, useState } from 'react';
import './App.css';
import React from 'react';
import RenderList from './components/left_menu';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';



function App() {
 //отвечает за переключение лабараторных


  return (
      <div className="App">
        <BrowserRouter>
        <header className="Head">
          <Header></Header>
        </header>

        <main>
            
            <div className="Content_with_labs">
              <AppRoutes />
            </div>

            
          
        </main>
        <footer>
            <div className='Bottom_menu'>
              <a className='Feedback' href='/lab_6'>Обратная связь</a>
            </div>
        </footer>
        </BrowserRouter>
      </div>
  );
}

export default App;
