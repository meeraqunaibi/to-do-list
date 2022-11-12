import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Add from "./pages/add/add-page.component";
import ViewItem from "./pages/view/view-page.component";
import NotFound from "./pages/not-found/not-found.component";
const ReadItems = JSON.parse(localStorage.getItem("todoList" || []));

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const items = ReadItems();
      setItems(items);
      setLoading(loading);
    }, 1000);
  }, []);
  useEffect(() => {
    if (items !== null) localStorage.setItem("todolist", JSON.stringify(items));
  }, []);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (id) => {
    const newItem = items.filter((item) => item.id !== id);
    setItems(newItem);
  };

  const finishItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    );
    setItems(newItems);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="/add" element={<Add addItem={addItem} />} />
        <Route
          path="/view"
          element={
            <ViewItem
              items={items}
              deleteItem={deleteItem}
              finishItem={finishItem}
              loading={loading}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
