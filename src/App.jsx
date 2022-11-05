import { useState } from 'react';
import './App.css';
import Form from './components/pages/form/form.component';
import List from './components/pages/list/list.component';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState('');

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const delItem = (id) => {
    const newItems = items.filter(item => item.id !== id);;
    setItems(newItems);
  }

  const markDone = (id) => {
    const newItems = [...items];
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id == id) {
        newItems[i].done = true;
      }
    }
    console.log(newItems);
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>Sprint To DO App</h1>
      <div>
        <button onClick={() => setPage('add')} className={page == 'add' ? "addViewButtons selectedButton" : "addViewButtons"}>add</button>
        <button onClick={() => setPage('view')} className={page == 'view' ? "addViewButtons selectedButton" : "addViewButtons"}>view</button>
      </div>
      {page == 'add' && <Form onAddItem={addItem} />}
      {page == 'view' && <List items={items} onDel={delItem} onDone={markDone} />}
    </div>
  );
}

export default App;
