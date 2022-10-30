import { useState } from 'react';
import './App.css';
import Form from './components/form/form.component';
import List from './components/list/list.component';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const delateItem = (id) => {
    alert("you sure delete this task")
    const newItemsData = items.filter(it => it.id !== id);
    setItems(newItemsData);
  }

  const Complete = (id) => {
    const newitem = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newitem);
  }

  return (
    <div className="App">
      <h1>R-ToDOApp (hallow every day)</h1>
      <Form onAddItem={addItem} />
      <List onDelate={delateItem} onComplete={Complete} items={items} />
    </div>
  );
}

export default App;