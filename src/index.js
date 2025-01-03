import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import FruitsList from './Fruits/FruitsList';
import Event from './Events/Event';
import Counter from './Counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));


const FruitsArray =[
  'Lemon',
'Strawberry',
'PeanApple',
'Orange',
'Apple'
    ]
root.render(
 
  <React.StrictMode>

  <Event/>
  <Counter initialCounter={3} step={2}/>
  
  </React.StrictMode>
  
 
 //<FruitsList fruits={FruitsArray}/>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
