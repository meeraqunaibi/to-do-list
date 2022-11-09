import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Popup from "./components/popup/popup.component";
import Header from "./components/header/header.component";
import AddPage from "./components/add-page/add-page.component";
import ViewPage from "./components/view-page/view-page.component";
import NotFound from "./components/not-found/not-found.component";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items") ?? "[]")
  );
  const [itemId, setItemId] = useState(null);
  const [alertBoxStatus, setAlertBoxStatus] = useState(false);

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

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="view"
            element={
              <ViewPage
                items={items}
                onDelete={showAlertBox}
                onCheck={markAsDone}
              />
            }
          />

          <Route path="add" element={<AddPage onAddItem={addItem} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
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
