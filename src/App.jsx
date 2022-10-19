import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import ListItems from "./components/ListItems";

function App() {
  const [items, setItems] = useState([]);
  const HandelAdd = (newItem) => {
    console.log(newItem);
    setItems([...items, newItem]);
  };
  return (
    <div className="App">
      <h1>R-ToDOApp</h1>
      <Form onAddItems={HandelAdd} />
      <ListItems items={items} />
    </div>
  );
}

export default App;
