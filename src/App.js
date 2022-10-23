import logo from './logo.svg';
import './App.css';
import Form from './componetnts/form/form.componetnts';
import { useState } from 'react';
import List from './componetnts/llist/list.copmponentnts';
function App() {
  const [item, setItem] = useState([]);
  const addItem = (itemm) => {
    setItem([...item, itemm]);
    console.log(item);

  }
  const Delete = (id) => {
    setItem(item.filter(item => item.id !== id));

  }
  const Checked = (id) => {
    const newItems = item.map(item => item.id === id ? { ...item, checked: true } : item);
    setItem(newItems);
  }

  return (

    <div className="App">
      <h1>R-To Do App</h1>
      <Form onAddFunction={addItem} />
      <hr></hr>
      <List onDelete={Delete} onCheck={Checked} items={item} />


      {/*       
      <h1>{item.length}</h1>
      <br/>
      <ul>
        {
          
          item.map((item)=><li>{item.title}-{item.category}-{item.urgent===true?("urgent:Yes"):"urgent:No"}</li>)
        }
      </ul> */}



    </div>
  );
}
export default App;
