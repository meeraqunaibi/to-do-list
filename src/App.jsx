import { useState } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import AddItem from "./pages/addItem/addItem.component";
import ViewItems from "./pages/viewItems/viewItem.component";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to-do-list")) || []
  );
  const [isShown, setIsShown] = useState(false);
  const [id, setId] = useState();
  const [currentPage, setCurrentPage] = useState(
    items.length === 0 ? "add" : "view"
  );
  const addNewItem = (item) => {
    let newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem("to-do-list", JSON.stringify(newItems));
    setCurrentPage("view");
  };
  const onDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setIsShown(false);
    localStorage.setItem("to-do-list", JSON.stringify(newItems));
  };
  const onFinish = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    );
    setItems(newItems);
    localStorage.setItem("to-do-list", JSON.stringify(newItems));
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
      <Header setCurrentPage={setCurrentPage} />
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
