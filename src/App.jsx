import Form from "./components/form/form.components";
import "./App.css"
import { useState } from "react";
import List from "./components/list/list.components";
function App() {
  const [items,setItems] = useState([]);
  const addItem =(item)=>{
    console.log("add item" ,item);
    setItems([...items,item])
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form onAddItem ={addItem}/>
      <List items={items}/>
    </div>
  );
}

export default App;
