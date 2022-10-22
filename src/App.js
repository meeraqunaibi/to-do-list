import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import ListItems from "./components/ListItems";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.items || "[]"));
  const [input, setInput] = useState("");

  const HandelAdd = (newItem) => {
    setItems([...items, newItem]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl my-7 text-center font-bold">R-ToDOApp</h1>
      <Form onAddItems={HandelAdd} input={input} setInput={setInput} />
      <ListItems
        items={items}
        setItems={setItems}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
