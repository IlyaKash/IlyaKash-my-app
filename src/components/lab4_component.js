import React, { useContext, useDebugValue } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Container from './container';
import Button from './button';
import ThemeToggler from '../context/ThemeToggler';
import { useSelector, useDispatch } from 'react-redux';
import action_1 from '../store/actionCreators/action_1';
import action_2 from '../store/actionCreators/action_2';
import store from '../store/store';
import change_color from '../store/actionCreators/action_change_color';
import default_color from '../store/actionCreators/action_defalult_color';



const Lab4Component = () => {
  const { theme } = useContext(ThemeContext);
  const count=useSelector(state=>state.counter.count);
  const color_buttons=useSelector(state=>state.change_color.color);
  const dispatch=useDispatch();
  
  console.log(store.getState())
  
  

  return (
    <Container>
      <ThemeToggler/>
      <div style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#333333' : '#ffffff', padding: '20px' }}>
        <h1>Лабараторная №4</h1>
        <h2>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h2>
        <p>This is some content.</p>
      </div>
      <div>
        <h2>Counter: {count}</h2>
        <Button onClick={()=> dispatch(action_1())}>Increment</Button>
        <Button onClick={()=> dispatch(action_2())}>Decrement</Button>
      </div>
      <div style={{backgroundColor: color_buttons}}>
        <h2>Change color</h2>
        <Button onClick={()=> dispatch(change_color('#ff3232'))} >Change color</Button>
        <Button onClick={()=> dispatch(default_color())}>Default color</Button>
      </div>
    </Container>
  );
};

export default Lab4Component;