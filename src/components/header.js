import React, { useState, useEffect, useRef } from "react";
import {Navbar, Nav, Button, Collapse} from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggler from '../context/ThemeToggler';
import RenderList from "./left_menu";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lab, setLab] = useState(0);
    const menuRef = useRef(null);
    
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleToggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
        
      <div className="HeaderMenu">
        <Navbar expand="lg">
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Button onClick={handleToggleMenu}>Меню</Button>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/about">О себе</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <ThemeToggler />
            </Nav>
          </Navbar.Collapse>
          <Collapse in={menuOpen}>
            <div ref={menuRef} className="ContainerLeftMenu mt-auto">
              <RenderList setLab={setLab} />
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  };
  
  export default Header;