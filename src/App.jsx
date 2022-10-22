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
      <div className="container">
        <h1>R-ToDOApp</h1>
        <Form onAddItem={addItem} />
        <hr />
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
