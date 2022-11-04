import React, { useEffect, useState } from 'react';
import './App.css';
import Popup from './deleteItems/deleteItems'
import AddItemPage from './pages/add-item/add-item.page';
import ViewItemPage from './pages/view-item/view-item.page';

function App() {
  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem('todoList') || '[]')
  );
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });
  const handleDelete = (id) => {
    setPopup({
      show: true,
      id,
    });
  };
  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      const newsItem = items.filter(item => item.id !== popup.id);
      setItem(newsItem);
      setPopup({
        show: false,
        id: null,
      });
    };
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };

  const [currentPage, setCurrentPage] = useState(
    // items.length > 0 ? 'view' : 'add'
    'add');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadingTrue = setLoading(true);
    console.log(loadingTrue);
    console.log("fetching item");
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem('todoList') || '[]');
      setItem(items);
      setLoading(false);
    }, 5 * 1000);

  }, []);


  useEffect(() => {
    console.info("welcome to view item page");
    return () => {
      console.info("bye bye from  view item page")
    }
  }, []);
  console.log("item", items.length);
  const addItem = (item) => {

    const newItems = [...items, item];
    setItem(newItems);

    localStorage.setItem('todoList', JSON.stringify(newItems));

  }
  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id)
    setItem(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));
  }
  const finishItem = (id) => {

    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItem(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));
    newItems.sort((a, b) => a.isDone > b.isDone ? 1 : -1)
    setItem(newItems)
    localStorage.setItem('todolist', JSON.stringify(newItems))
  }


  return (
    <div className="App">
      <div className="container">
        <div className="header">

          <button onClick={() => setCurrentPage('add') ? 'active' : ''}>Add Item</button>
          <button onClick={() => setCurrentPage('view') ? 'active' : ''}>View Item</button>
        </div>
        {currentPage === 'add' && <AddItemPage addItem={addItem} />}
        {
          currentPage === 'view' && <ViewItemPage items={items}

            deleteItem={handleDelete}
            finishItem={finishItem}
            loading={loading}

          />

        }

        {popup.show && (
          <Popup handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse} items={items} />
        )}
        {/* <button
          className={props.currentPage === 'add' ? 'active' : ''}
          onClick={() => props.setCurrentPage('add')}
        >
          Add Item
        </button>
        <button
          className={props.currentPage === 'view' ? 'active' : ''}
          onClick={() => props.setCurrentPage('view')}
        >
          View Items
        </button> */}

      </div>
    </div>

  );
}




export default App;