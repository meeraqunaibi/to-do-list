import { useState } from "react";
import Form from "./components/form/form.component";
import "./App.css"
import List from "./components/list/list.component";
import AddItemPage from "./components/pages/addItem/addItem.component";
import ViewItemPage from "./components/pages/viewItem/viewItem.component";

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const addItem = (item) => {
    console.log("add item", item);
    setItems([...items, item])
  }
  const deleteItem = (id)=>{
    // setDialog("Are you sure you want to delete? sure you are sure ?", true);
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
