import React from 'react';
import Container from './container';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';



const RenderList=({setLab}) =>{
    function change_lab(num){
      
      setLab(num)
    }
    const myArray=[
      {
        name: "lab1",
        number: 1,
      },
      {
        name: "lab2",
        number: 2,
      },
      {
        name: "lab3",
        number: 3,
      },
      {
        name: "lab4",
        number: 4,
      },
      {
        name: "lab5",
        number: 5,
      },
      {
        name: "lab6",
        number: 6,
      },
    ];

    

    return (
      <>
          {myArray.map(item=> (
            
            <Nav.Link href={`/lab_${item.number}`}>{item.name}</Nav.Link>
          ))}
      </>
    )
}

export default RenderList;
