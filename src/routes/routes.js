import { Route, Routes } from "react-router-dom";
import Lab2Component from '../components/lab2_component';
import ThemeProvider from '../context/ThemeContext';
import ThemeToggler from '../context/ThemeToggler';
import Lab4Component from '../components/lab4_component';
import Lab1Component from '../components/lab1_component';
import Lab3Component from '../components/lab3_component';
import Lab5Component from "../components/lab5_component";


function AppRoutes(){
    return(
        <Routes>
              <Route path='/' />
              <Route path='/lab_1' Component={Lab1Component} />
              <Route path='/lab_2' Component={Lab2Component} />
              <Route path='/lab_3' Component={Lab3Component} />
              <Route path='/lab_4' element={
                <ThemeProvider>
                  <Lab4Component />
                </ThemeProvider>
                } />
              <Route path='/lab_5' Component={Lab5Component} />
        </Routes>
    );
}

export default AppRoutes;