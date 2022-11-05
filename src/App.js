import logo from "./logo.svg";
import "./App.css";
// import Form from "./components/form/form.component";
// import List from "./components/list/list.component";
import AddItemPage from "./pages/add-item/add/add.pages";
import ViewItemPage from "./pages/add-item/viewPage/view-item.pages";
import Header from "./header/header.component.jsx";
import { useEffect, useState } from "react";
import Popup from "./components/deleteItems/deleteItems.jsx";

function App() {
  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );
  const [currentPage, setCurrentPage] = useState("add");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("now you will see the previous data...");
    setTimeout(() => {
      let arr = JSON.parse(localStorage.getItem("todolist")) || [];
      setItem(arr);
      setLoading(false);
    }, 1 * 1000);
  }, []);
  const addItem = (item) => {
    console.log("Add Item", item);
    const newsItem = [...items, item];
    newsItem.sort((a, b) => (a.isDone > b.isDone ? 1 : -1));
    setItem(newsItem);
    localStorage.setItem("todolist", JSON.stringify(newsItem));
  };

  //delete and done functions
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });
  const handleDelete = (id) => {
    setPopup({
      show: true,
      id,
    });
  };
  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      const newsItem = items.filter((item) => item.id !== popup.id);
      setItem(newsItem);
      setPopup({
        show: false,
        id: null,
      });
    }
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItem(newItems);
    localStorage.setItem("todoList", JSON.stringify(newItems));
  };
  const finishItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    );
    setItem(newItems);
    localStorage.setItem("todoList", JSON.stringify(newItems));
    newItems.sort((a, b) => (a.isDone > b.isDone ? 1 : -1));
    setItem(newItems);
    localStorage.setItem("todolist", JSON.stringify(newItems));
  };
  return (
    //   <div className="App">
    //     <h1> R-ToDoApp</h1>
    //  <Form onAddItem={addItem}/>
    //  <List items={items } OndelItem={deleteItem} chkItem={fifnishItem}/>

    //   </div>

    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="container">
        {currentPage === "add" && <AddItemPage addItem={addItem} />}
        {currentPage === "view" && (
          <ViewItemPage
            items={items}
            deleteItem={handleDelete}
            finishItem={finishItem}
            loading={loading}
          />
        )}
        {popup.show && (
          <Popup
            handleDeleteTrue={handleDeleteTrue}
            handleDeleteFalse={handleDeleteFalse}
            items={items}
          />
        )}
      </div>
    </div>
  );
}

export default App;
