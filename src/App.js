import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import ListItems from "./components/ListItems";
import "../src/App.css";
import DeleteBTN from "./components/DeleteBTN";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.items || "[]"));
  const [input, setInput] = useState("");
  const [deletePoopUp, setDeletePoopUp] = useState(false);
  const [indexOfItem, setIndexOfItem] = useState(null);

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
      {deletePoopUp && (
        <DeleteBTN
          deletePoopUp={deletePoopUp}
          setDeletePoopUp={setDeletePoopUp}
          items={items}
          setItems={setItems}
          indexOfItem={indexOfItem}
        />
      )}
      <div className="area">
        <div className="z-50">
          <h1 className="text-2xl py-7 text-white text-center font-bold">
            React Todo Application
          </h1>
          <Form onAddItems={HandelAdd} input={input} setInput={setInput} />
          <ListItems
            items={items}
            input={input}
            setDeletePoopUp={setDeletePoopUp}
            setIndexOfItem={setIndexOfItem}
          />
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
