import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import List from "./components/list/list.component";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deletefun = (id) => {
    const new_items = items.filter((item) => item.id !== id);
    setItems(new_items);
  };

  return (
    <div className="App">
      <h1>To Do List (tuqa)</h1>
      <div className="appbody">
        <Form addItem={addItem} />
        <br/>
        <hr/>
        <List items={items} ondelete={deletefun} />
      </div>
    </div>
  );
}

export default App;
