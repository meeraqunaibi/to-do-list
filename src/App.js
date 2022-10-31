import logo from './logo.svg';
import './App.css';
import Form from './componetnts/form/form.componetnts';
import { useState } from 'react';
import List from './componetnts/llist/list.copmponentnts';
import Popup from './componetnts/popup/popup.componetnt';
function App() {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem("todolist")) || []);
  const [Page, setPage] = useState("View");
  const addItem = (itemm) => {
    const newitem = [...item, itemm];
    setItem(newitem);
    localStorage.setItem('todolist', JSON.stringify(newitem));

  }

  const Delete = (id) => {
    const newItems = item.filter(item => item.id !== id);
    setItem(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));

  }
  const Checked = (id) => {
    const newItems = item.map(item => item.id === id ? { ...item, checked: true } : item);
    setItem(newItems)
    localStorage.setItem('todolist', JSON.stringify(newItems));
  }




  return (

    <div className="App">
      <div className='nav'>
        <h1 style={{ color: "black" }}>R-To Do App</h1>
        <div>
          <button style={Page == "Add" ? { boxShadow: "2px 2px 2px 2px tomato " } : null} onClick={() => setPage("Add")} id='add' >Add Task</button>
          <button style={Page == "View" ? { boxShadow: "2px 2px 2px 2px skyblue" } : null} onClick={() => setPage("View")} id='view' >View Task</button>
        </div>
      </div>
      {
        Page == "View" && (item.length) ? <List onDelete={Delete} onCheck={Checked} items={item} /> : <Form onAddFunction={addItem} />
      }
      {
        console.log(JSON.stringify(item).length)
      }




    </div>
  );
}
export default App;
