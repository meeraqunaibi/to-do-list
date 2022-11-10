import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import List from "./components/list/list.component";
import Header from "./components/header/header.component";
import AddPage from "./pages/add/add.jsx";
import ViewPage from "./pages/view/view.jsx";
import Item from "./components/list/item.component";
import { useEffect } from "react";


function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [page, setPage] = useState("add");
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);
  const addItem = (item) => {
    let newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem("list", JSON.stringify(newItems));
  };
  // const [sure,setSure] =useState(false);
  const confirmDelete = (id) => {
    const sure = window.confirm("Are you sure you wish to delete this item?");
    console.log(sure);
    if(sure){
      deleteItems(id);
    }
  }
  const deleteItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const finishItem = (id) => {
    setItems(
      items?.map((item) => (item.id === id ? { ...item, isDone: true } : item))
    );
  };

  return (
    <div className="App">
      <Header setPage={setPage} page={page} />
      {page === "add" ? (
        <AddPage addItem={addItem} />
      ) : (
        <ViewPage
          items={items}
          onDelete={confirmDelete}
          onFinish={finishItem}
        />
      )}
    </div>
  );
}

export default App;
