import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddItem from './pages/addItem/addItem';
import ViewItem from './pages/viewItem/viewItem'

function App() {
  const [CurrentPage, setCurrentPage] = useState("");
  const [items, setItems] = useState([]);
  const deleteItem = (id) => {
    const newItem = items.filter(item => item.id !== id);
    setItems(newItem);
  }
  const DoneItem = (id) => {
    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newItems);

  }
  const addItem = (item) => {
    setItems([...items, item]);
  }
  localStorage.setItem('items', JSON.stringify(items));

  return (
    <div className="all">
      <div className="App">
        <h1 className='head1'>To Do List</h1>
        <div className="head btn-group">
          <button onClick={() => setCurrentPage("add")} className="btn btn-light">Add Item</button>
          <button onClick={() => setCurrentPage("view")} className="btn btn-light">View Item</button>
        </div>
      </div>

      {CurrentPage === "view" && <ViewItem items={items} deleteItem={deleteItem} DoneItem={DoneItem} />}
      {CurrentPage === "add" && <AddItem addItem={addItem} />}




    </div>
  );
}

export default App;
