import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/header/header.component';
import AddItemPage from './pages/add-item/add-item.page';
import ViewItemsPage from './pages/view-items/view-items.page';

function App() {
  const [currentPage, setCurrentPage] = useState('view');  // Either add or view
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching Items...");
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem('todoList') || '[]');
      setItems(items);
      setLoading(false);
    }, 1000);

  }, []);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);

    localStorage.setItem('todoList', JSON.stringify(newItems));
  }

  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);

    localStorage.setItem('todoList', JSON.stringify(newItems));
  }

  const finishItem = (id) => {
    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newItems);

    localStorage.setItem('todoList', JSON.stringify(newItems));
  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="container">
        {currentPage === 'add' && <AddItemPage addItem={addItem} />}
        {currentPage === 'view' &&
          <ViewItemsPage
            loading={loading}
            items={items}
            deleteItem={deleteItem}
            finishItem={finishItem} />
        }
      </div>
    </div>
  );
}

export default App;
