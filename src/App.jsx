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

  const delItem=(id) =>{
    alert(id);
    const newItems = items.filter(item => item.id !== id);;
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>R-ToDOApp</h1>
      <div>
        <button onClick={()=>setPage('add')}>add</button>
        <button onClick={()=>setPage('view')}>view</button>
      </div>
      {page=='add' && <Form onAddItem={addItem} />}
      {page=='view' && <List items={items} onDel={delItem}/>}
    </div>
  );
}

export default App;
