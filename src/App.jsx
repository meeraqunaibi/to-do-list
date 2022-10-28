import { useState } from "react";
import "./App.css";
import AddItem from "./pages/add items/add-item.page";
import ViewItems from "./pages/view items/view-items.page";
import PopUpErrorMsg from "./componants/PopUpErrorMsg/PopUpErrorMsg.component";
import NavBar from "./componants/navbar/navbar.component";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [currentPage, setCurrentPage] = useState(
    items.length === 0 ? "add" : "view"
  );
  const [theError, setTheError] = useState("");
  const addItem = (item) => {
    let newItems = [...items, item];
    newItems.sort((a, b) => Number(a.isDone) - Number(b.isDone));
    setItems(newItems);
    localStorage.setItem("tasks", JSON.stringify(newItems));
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    newItems.sort((a, b) => Number(a.isDone) - Number(b.isDone));
    setItems(newItems);
    localStorage.setItem("tasks", JSON.stringify(newItems));
  };
  const updateDone = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: (item.isDone = true) };
      } else {
        return item;
      }
    });
    newItems.sort((a, b) => Number(a.isDone) - Number(b.isDone));
    setItems(newItems);
    localStorage.setItem("tasks", JSON.stringify(newItems));
  };

  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage} />
      <div>
        {currentPage === "add" && (
          <AddItem
            addItem={addItem}
            setTheError={setTheError}
            data={theError}
          />
        )}
        {currentPage === "view" && (
          <ViewItems data={items} delete={deleteItem} markDone={updateDone} />
        )}
      </div>
    </div>
  );
}

export default App;
