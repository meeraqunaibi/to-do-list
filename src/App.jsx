import { useState } from "react";
import Form from "./components/form/form.component";
import "./App.css";
import List from "./components/list/list.component";
import AddItemPage from "./components/pages/addItem/addItem.component";
import ViewItemPage from "./components/pages/viewItem/viewItem.component";
import Dialog from "./dialog/dialog.components";
import {Route , Routes , BrowserRouter} from  'react-router-dom' ;
import { Link } from 'react-router-dom';
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ToDo")) || []
  );
  const [item, setItem] = useState(undefined);
  const addItem = (item) => {
    console.log("add item", item);
    if (item.urgent) {
      const newItem = [item, ...items];
      setItems(newItem);
      localStorage.setItem("ToDo", JSON.stringify(newItem));
    } else {
      const newItem = [...items, item];
      setItems(newItem);
      localStorage.setItem("ToDo", JSON.stringify(newItem));
    }
  };
  const deleteItem2 = (id) => {
    console.log(item.id);
    const newItem = items.filter((item) => item.id !== id);
    setItems(newItem);
    localStorage.setItem("ToDo", JSON.stringify(newItem));
    setItem(undefined);
  };

  const deleteItem = (id) => {
    let array = items.filter((item) => item.id == id);
    setItem(array[0]);
  };

  const finishItem = (id) => {
    setItems(
      items?.map((item) => (item.id === id ? { ...item, isDone: true } : item))
    );
  };
  const displayDialog = (item) => {
    item !== undefined ? setItem(item) : setItem(undefined);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <h1>To Do List</h1>
        <div className="but">
          <Link  to="/add"> add Item </Link>
          <Link to="/view">  View Items</Link>
        </div>
      </div> 
      <Routes>
        <Route path="view" element={< ViewItemPage
          items={items}
          displayDialog={displayDialog}
          onDelete={deleteItem}
          onFinish={finishItem}/>}></Route>
        <Route path="add" element={<AddItemPage onAdd={addItem}/>}></Route>
      </Routes>
      </BrowserRouter>
      {item && (
        <Dialog onDelete={deleteItem2} item={item} onPop={displayDialog} />
      )}
    </div>
  );
}

export default App;
