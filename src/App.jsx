import { useState } from 'react';
import './App.css';
import Add from './pages/add-item/add-item.page'
import View from './pages/view-item/view'
import Header from './components/header/header.component';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList'))||'[]');
  //const [Window,setWindow] =useState(false);
  const [currentpage, setCurrentPage] = useState(items.length > 0 ? 'view' : 'add');

  const addItem = (item) => {
    //store the items array and add the new item value to it 
    const newItems = [...items, item];
    //set the updated value of items array 
    setItems(newItems);
    // store it at the local storage.
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }

  const deleteItem = (id) => {
   // setWindow(true);
    const newitems = items.filter(item => item.id !== id);
    setItems(newitems);
    localStorage.setItem('todoList', JSON.stringify(newitems));

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
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentpage={currentpage} />
      <div className="container">
      {currentpage === 'add' && <Add onAddItem={addItem} />}
        {currentpage === 'view' &&
          <View
            items={items}
            onDelete={deleteItem}
            onFinish={finishitem} />
        }
      </div>
    </div>

  );
}

export default App;
