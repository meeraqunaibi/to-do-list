import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import List from "./components/list/list.component";
import Modal from "./components/modal/modal.component";

function App() {
  const [items, setItems] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [id, setId] = useState();
  const addNewItem = (item) => {
    setItems([...items, item]);
  };
  const onDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setIsShown(false);
  };
  const onFinish = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    );
    setItems(newItems);
  };

  const undoDelete = () => {
    setIsShown(false);
  };

  const showDialog = (id) => {
    setId(id);
    setIsShown(true);
  };
  return (
    <div className="App">
      <h1 style={{ fontWeigh: 600 }}>R-ToDOApp</h1>
      <Form addItem={addNewItem} />
      <List onFinish={onFinish} items={items} showDialog={showDialog} />
      {isShown ? (
        <Modal id={id} deleteTask={onDelete} undoDelete={undoDelete} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
