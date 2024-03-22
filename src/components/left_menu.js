import React from 'react';
import Container from './container';
import Button from './button';
import { Link } from 'react-router-dom';



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
    ];

    

    return (
      <Container className="ContainerLeftMenu">
        <ul>
          {myArray.map(item=> (
            <li key={item.number}><Link to={`/lab_${item.number}`}>{item.name}</Link></li>
          ))}
        </ul>
      </Container>
    )
}

export default RenderList;
