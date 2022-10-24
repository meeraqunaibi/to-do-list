import { useState } from "react";
import "./App.css";


import FormPage from "./components/pages/formpage/form.page";
import LIstViewPage from "./components/pages/listviewpage/listview.page";

function App() {
  const [items, setItems] = useState([]);
  const [currentpage, changepage] = useState("form");

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deletefun = (id) => {
    const new_items = items.filter((item) => item.id !== id);
    setItems(new_items);
  };

  return (
    <div className="App">
      <h1>To Do List (tuqa)</h1>
      <div className="appbody">
        {/* <Form addItem={addItem} />
        <br/>
        <hr/>
        <List items={items} ondelete={deletefun} /> */}
        <div>
          <button onClick={() => changepage("form")}>to do list form</button>
          <button onClick={() => changepage("listview")}>veiw list </button>
        </div>

        {currentpage === "form" && <FormPage addItem={addItem} />}
        {currentpage === "listview" && <LIstViewPage items={items} ondelete={deletefun}/>}
      </div>
    </div>
  );
}

export default App;
