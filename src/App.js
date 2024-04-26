import { useContext, useState } from 'react';
import './App.css';
import React from 'react';
import RenderList from './components/left_menu';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';




function App() {
 //отвечает за переключение лабараторных


  return (
    <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
  );
}

export default App;
