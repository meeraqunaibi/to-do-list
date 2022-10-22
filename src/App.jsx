import React, { Component, useState } from 'react';
import './App.css';

import List from './components/list/list.component';
import Form from "./components/form/form.component"

function App() {
  const [items, setItem] = useState([]);
  const addItem = (item) => {
    console.log("add Item", item);
    setItem([...items, item]);
  }
  return (
    <div className="App">
      <Form onAddItem={addItem} />
      <List items={items} />
    </div>
  );
}




export default App;