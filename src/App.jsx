import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import AddItemPage from './pages/add-item/add-item.page';
import ViewItemsPage from './pages/view-items/view-items.page';
import NotFound from './pages/not-found/not-found.component';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList') || '[]'));

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
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/add" element={<AddItemPage addItem={addItem} />} />
            <Route path="/view" element={<ViewItemsPage items={items} deleteItem={deleteItem} finishItem={finishItem} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
