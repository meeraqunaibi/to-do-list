import { useState } from 'react';
import './App.css';
import Form from './components/form/form.component';
import List from './components/list/list.component';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  return (
    <div className="App">
      <h1>To Do List (tuqa)</h1>
      <Form addItem={addItem} />
      <br/>
      <List items={items} />
    </div>
  );
}

export default App;
