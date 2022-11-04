import Form from "./components/form/form.component";
import "./App.css"
import { useEffect, useState } from "react";
import List from "./components/list/list.component";
import AddItemPage from "./components/pages/addItem/addItem.component"; 
import ViewItemPage from "./components/pages/viewItem/viewItem.component";


const ReadItems = () => JSON.parse(localStorage.getItem('todoList') || '[]');
function App() {
  const [items,setItems] = useState(null);
  const [currentPage , setCurrentPage] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({ message: "", isLoading: false});

  useEffect(() => {
    setLoading(true);
    console.log("Fetching Items...");

    setTimeout(() => {
      const items = ReadItems();
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


  
  const addItem =(item)=>{
    console.log("add item" ,item);
    setItems([...items,item])
  }
  const deleteItem = (id)=>{
    setDialog("Are you sure you want to delete? sure you are sure ?", true);
    const newItem = items.filter(item=> item.id !== id);
    setItems(newItem);
  }

  const finishItem = (id) => {
    setItems(items?.map(item => item.id === id ? { ...item, isDone: true } : item));
  }

  return (
    <div className="App">
      <div className="header">
      <h1>To Do List</h1>
      <div className="but">
     <button className={currentPage==='add'? "active" : ""}
      onClick={()=>setCurrentPage('add')}>Add Page</button>
     <button className={currentPage==='view'? "active" : ""} 
      onClick={()=>setCurrentPage('view') } >View Page</button>
     </div>
     </div>
     {currentPage === 'add' && <AddItemPage onAdd={addItem}/>}
     {currentPage === 'view' && <ViewItemPage items={items} onDelete={deleteItem} onFinish={finishItem}/>}
    
    </div>
  );
}

export default App;
