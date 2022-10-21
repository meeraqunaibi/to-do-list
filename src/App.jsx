import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import List from "./components/list/list.component";

function App() {
  const [items, setItems] = useState([]);
  const addNewItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div className="App">
      <h1>R-ToDOApp</h1>
      <Form addItem={addNewItem} />
      <List items={items} />
    </div>
  );
}

export default App;
