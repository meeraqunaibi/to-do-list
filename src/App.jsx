import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  // const [loading, setLoading] = useState(false);
  // useEffect(()=>{

  // }, [])

  const addNewItem = (item) => {
    let newItems = [...items, item].sort((a, b) => a.isDone - b.isDone);
    setItems(newItems);
    localStorage.setItem("to-do-list", JSON.stringify(newItems));
  };
  const onDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setIsShown(false);
    localStorage.setItem("to-do-list", JSON.stringify(newItems));
  };
  const onFinish = (id) => {
    const newItems = items
      .map((item) => (item.id === id ? { ...item, isDone: true } : item))
      .sort((a, b) => a.isDone - b.isDone);
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddItem addNewItem={addNewItem} />}
          ></Route>
          <Route
            path="/view"
            element={
              <ViewItems
                onFinish={onFinish}
                items={items}
                showDialog={showDialog}
                id={id}
                deleteTask={onDelete}
                undoDelete={undoDelete}
                isShown={isShown}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
