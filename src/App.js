import React, { useState } from 'react';
import List from './List';
import { Button, ListGroup } from 'react-bootstrap';

import Navbar from './Components/Navbar';
import './style.css';

export default function App() {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);
  const input = e => {
    setInputList(e.target.value);
  };

  const todoList = () => {
    if (inputList === '') {
      alert("You must write something!");
    } else {
      setItems(oldItems => {
        return [...oldItems, inputList];
      });
      setInputList('');
    }
   
  };

  return (

    <div id="myDIV" className="header">
      <Navbar />
      <div className="center_div">
        
        <br />
        <h1> ToDo </h1>
        <br />
        <input
          type="text"  className="text"
          placeholder=" add items to do "
          value={inputList}
          onChange={input}
        />
        <Button variant="success" onClick={todoList}>
          Add{' '}
        </Button>

        <ListGroup variant="flush"  id="myUL">
          {Items.map((itemVal, index) => {
            return <List text={itemVal} key={index} />;
          })}
        </ListGroup>
      </div>
      <h2 />
    </div>
  );
}
