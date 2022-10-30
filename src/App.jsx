import './App.css';
import { useState } from 'react';
import Form from './components/form/form.component';
import List from './components/list/list.component';
import AddItem from './pages/add item/additem.component';
import ViewItem from './pages/view item/viewitem.component';
import Header from './components/header/header.component';

function App() {

  //   // const [names, setnames] = useState(["zainab", "ali", "ahmad", "saker", "ismael", "ibrahem"])
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('todoList') || '[]'));
  const [currentPage, setcurrentPage] = useState(items.length > 0 ? 'view' : 'add');
  const [modal, setModal] = useState(false);


  const addItem = (item) => {
    const newItems = [...items, item];
    setitems(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }
  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setitems(newItems);
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
    setitems(newItems);

    localStorage.setItem('todoList', JSON.stringify(newItems));

  }
  

  return (
    <div className="App">
      <Header setcurrentPage={setcurrentPage} currentPage={currentPage} />
      {/* <div>
        <button  onClick={()=>setcurrentPage('add')}>Add Item</button>
        <button onClick={()=>setcurrentPage('view')}>View Item</button>
      </div> */}
      {currentPage === 'add' && <AddItem addItem={addItem} />}
      {currentPage === 'view' && <ViewItem items={items} 
        deleteItem={deleteItem} finishItem={finishItem} />}

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
            name= name + "manasrah";
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
