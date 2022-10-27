import { useState } from "react";
import "./App.css";

import FormPage from "./components/pages/formpage/form.page";
import LIstViewPage from "./components/pages/listviewpage/listview.page";
import PopUp from "./components/popup.componant/popup ,componant";

function App() {
  const [items, setItems] = useState([]);
  const [currentpage, changepage] = useState("form");
  const [popup, changepopup] = useState(false);
  const [deleteornot, changedelete] = useState(false);

  const [iddelete, changeid] = useState();

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deletefun = (id) => {
    changeid(id);
    if (deleteornot === true) {
      
      const new_items = items.filter((item) => item.id !== id);
      setItems(new_items);
      changedelete(false);
      changepopup(false);
    } else {
      changepopup(true);
    }
  };

  const handleClose = () => {
    changepopup(false);
  };

  const handledelete = () => {
    changepopup(false);
    changedelete(true);
    deletefun(iddelete);

  };

  const sort=(lola)=>{
    const newItems = [...lola].sort((a, b) =>
    a.isDone > b.isDone ? 1 : -1,
  );
    setItems(newItems);
  };


  const donefun = (id) => {
    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    
    setItems(newItems);
    sort(newItems);
    
   
  
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
        {currentpage === "listview" && (
          <LIstViewPage items={items} ondelete={deletefun} done={donefun}   />
        )}

        {console.log(deleteornot, popup)}

        {popup && (
          <PopUp
            className="popup"
            handleClose={handleClose}
            handledelete={handledelete}
        
          />
        )}
      </div>
    </div>
  );
}

export default App;
