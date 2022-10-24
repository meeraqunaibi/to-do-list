import { useState } from 'react';
import './App.css';
import Form from './components/form/form.component';
import List from './components/list/list.component';

function App() {
  const [items, setItems] = useState([]);
  const [popup, setPopup] = useState({
    show: false, // initial values set to false and null
  });

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const deleteItem = (id) => {
    setPopup({
      show: true,
    });

    const newitem = items.filter(item => item.id !== id);
    setItems(newitem);
  }

  const finishitem = (id) => {
    // const newitem = items.map((item) => {
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
      <List items={items} onDelete={deleteItem} onFinish={finishitem} />
    </div>
    </div>
  );
}

export default App;
