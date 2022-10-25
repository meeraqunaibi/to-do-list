import { useState } from "react";
import "./App.css";
import Popup from "./components/popup/popup.component";
import Header from "./components/header/header.component";
import AddPage from "./components/add-page/add-page.component";
import ViewPage from "./components/view-page/view-page.component";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items") ?? "[]")
  );
  const [itemId, setItemId] = useState(null);
  const [alertBoxStatus, setAlertBoxStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    items.length === 0 ? "add" : "view"
  );

  const addItem = (item) => {
    const newItems = [item, ...items];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const showAlertBox = (id) => {
    setAlertBoxStatus(true);
    setItemId(id);
  };
  const markAsDone = (id) => {
    const newItems = items
      .map((item) => (item.id === id ? { ...item, isDone: true } : item))
      .sort((a, b) => (a.isDone ? 1 : -1));
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const onYes = () => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    setAlertBoxStatus(false);
  };
  const onNo = () => {
    setAlertBoxStatus(false);
  };

  const handleAddClick = () => {
    setCurrentPage("add");
  };

  const handleViewClick = () => {
    setCurrentPage("view");
  };

  return (
    <div className="App">
      <Header
        handleAddClick={handleAddClick}
        handleViewClick={handleViewClick}
        currentPage={currentPage}
      />
      {currentPage === "add" && <AddPage onAddItem={addItem} />}
      {currentPage === "view" && (
        <ViewPage items={items} onDelete={showAlertBox} onCheck={markAsDone} />
      )}

      <Popup
        show={alertBoxStatus}
        title="Confirm"
        body={`Are you sure you want to permanently delete (${
          items.find((item) => item.id === itemId)?.title
        })`}
        onYes={onYes}
        onNo={onNo}
      />
    </div>
  );
}

export default App;
