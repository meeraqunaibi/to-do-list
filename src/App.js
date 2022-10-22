import { useState } from "react";
import Form from "./components/form/Form";
import ListItems from "./components/ListItems";

function App() {
  const [items, setItems] = useState([]);
  const HandelAdd = (newItem) => {
    console.log(newItem);
    setItems([...items, newItem]);
  };
  return (
    <div>
      <h1 className="text-2xl my-7 text-center font-bold">R-ToDOApp</h1>
      <Form onAddItems={HandelAdd} />
      <ListItems items={items} />
    </div>
  );
}

export default App;
