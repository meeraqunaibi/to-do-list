import { useState } from "react";
import "./App.css";
import AddItem from "./pages/addItem/addItem.component";
import ViewItems from "./pages/viewItems/viewItem.component";

function App() {
  const [items, setItems] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [id, setId] = useState();
  const [currentPage, setCurrentPage] = useState("");
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
      <button
        onClick={() => {
          setCurrentPage("view");
        }}
      >
        view item
      </button>
      <button
        onClick={() => {
          setCurrentPage("add");
        }}
      >
        add item
      </button>
      {currentPage === "add" ? <AddItem addNewItem={addNewItem} /> : ""}
      {currentPage === "view" ? (
        <ViewItems
          onFinish={onFinish}
          items={items}
          showDialog={showDialog}
          id={id}
          deleteTask={onDelete}
          undoDelete={undoDelete}
          isShown={isShown}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
