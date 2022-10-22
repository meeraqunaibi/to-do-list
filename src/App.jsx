import { useState } from 'react';
import './App.css';
import Form from './components/form/form.component';
import List from './components/list/list.component';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  const finishItem = (id) => {
    // const newItems = items.map(item => {
    //   if (item.id === id) {
    //     return { ...item, isDone: true }
    //   }
    //   return item;
    // });
    
    // Sort version of the mapping
    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newItems);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>R-ToDOApp</h1>
        <Form onAddItem={addItem} />
        <hr />
        <List items={items} onDelete={deleteItem} onFinish={finishItem} />
      </div>
    </div>
  );
}

export default App;
