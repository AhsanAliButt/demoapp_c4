import React, {useState} from 'react';
import {Message} from './Message.js';
import './App.css';

export default function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false)
  return (
  <div className={`box ${isMorning ? 'daylight':'nightlight'}`}>
  <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
  <Message counter={count}/>
  <br />
  <button onClick={()=>alert('Press Update Counter 2')}>Update Counter</button>
  <br />
  <button onClick={()=> setCount(2)}>Update Counter1  </button>
  <br />
  <button onClick={()=> setCount(count+1)}>Update Counter2  </button>
   <br />
  <button onClick={()=> setMorning(!isMorning)}> Update Day </button>
  <br />
  <h3>Slow and steady wins the race</h3>
</div>
);
}
