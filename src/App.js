import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Forms/form.components';
import List from './components/list/list.components'
import AddItem from './Pages/AddItem/AddItem';
import ViewItem from './Pages/ViewItem/ViewItem';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Pages/notFound/notFound.components';

function App() {

  // const [names, setnames] = useState(["zainab", "ali", "ahmad", "saker", "ismael", "ibrahem"])
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList') || '[]'));
  const [currentPage, setCurrentPage] = useState(items.length > 0 ? 'view' : 'add');
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState('view');

  useEffect(() => {
    setLoading(true);
    console.log("Fetching Items...");
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem('todoList') || '[]');
      setItems(items);
      setLoading(false);
    }, 1000);

  }, []);


  useEffect(() => {
    if (items !== null) {
      console.log("Items has changed!");
      localStorage.setItem('todoList', JSON.stringify(items));
    }
  }, [items]);


  const sortFunction = (item) => {
    const newItems = [...item].sort((firstItem, secondItem) =>
      firstItem.isDone > secondItem.isDone ? 1 : -1,
    );
    setItems(newItems);
  };

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }
  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    setModal(!modal);
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }

  const finishItem = (id) => {
    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newItems);
sortFunction(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }
  

  return (
    <div className="App">
           

      <BrowserRouter>
      <Header  />
      <Routes>
        <Route path='/view' element={<ViewItem items={items}             loading={loading}

 
deleteItem={deleteItem} finishItem={finishItem} />} >

        </Route>
        <Route path='/add' element={ <AddItem addItem={addItem} />}></Route>
        <Route path='*' element={<Notfound />}></Route>

      </Routes>
      </BrowserRouter>

      {/* <div>
        <button  onClick={()=>setCurrentPage('add')}>Add Item</button>
        <button onClick={()=>setCurrentPage('view')}>View Item</button>
      </div> */}
      {/* {currentPage === 'add' && <AddItem addItem={addItem} />}
      {currentPage === 'view' && <ViewItem items={items}             loading={loading}

 
        deleteItem={deleteItem} finishItem={finishItem} />} */}

{modal && (
        <div className="modal">
          <div onClick={deleteItem} className="overlay"></div>
          <div className="modal-content">
            <h2>Are You Sure You Want To Delete Item ?</h2>
            <div className='bu'>
            <button  onClick={deleteItem}>
              Yes
            </button>
            <button  >
              No
            </button>
              </div>
            
          </div>
        </div>
      )}

    </div>
    /* {/* <ul>
      {
        // names.map((name,index)=> <li>{name.toUpperCase()} - {name} - {index}</li>)
        names.map((name,index) => {
           if (name === "ahmad")
            name= name + "salem";
          const color = index%2 ===0 ? 'pink' : 'red';
          return <li style={{color : color}}>
            {name}
          </li>;
        })

      }
    </ul> */
    /* <h1> To Do App</h1>
<Form   onAddItem={addItem}/>
 
   {/* {items.length} */
    /* <List items={items} onDelete={deleteItem} onFinish={finishItem}/> */
  );
}

export default App;
