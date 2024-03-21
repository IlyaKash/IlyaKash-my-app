import React from "react";
import Button from "./button";
import Container from "./container";

const  Lab2Component= ()=>{
    const handleClick1 = () => {
        alert('Button 1 clicked!');
    };
    
    const handleClick2 = () => {
        console.log('Button 2 clicked!');
    };
    
    const handleClick3 = () => {
        window.location.href = 'https://github.com/IlyaKash/web_lab';
    };

    return (
      <Container>
        <h1>Лабараторная №2</h1>
        <Button onClick={handleClick1}>Alert</Button>
        <Button onClick={handleClick2}>Console</Button>
        <Button onClick={handleClick3}>GitGub</Button>
      </Container>
    )
}

export default Lab2Component;
