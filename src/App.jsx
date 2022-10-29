import { useState } from 'react';
import './App.css';
import Form from './components/form/form.component';
import List from './components/list/list.component';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }
  const deleteItem= (id)=>{
    const newItem = items.filter(item => item.id !== id)
    setItems(newItem);
  }

  const finishItem = (id) => {
    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newItems);
  }
  return (
    <div className="App">
      <h1>To DO App</h1>
      <Form onAddItem={addItem} />
      <List items={items} 
       deleteItem={deleteItem}
       finishItem={finishItem} />
    </div>
  );
}

export default App;
