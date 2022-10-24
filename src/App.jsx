import { useState } from 'react';
import './App.css';
import Form from './components/form/form.component';
import List from './components/list/list.component';

function App() {
    const default1 = "#aae4ee85";
const color1 = "rgba(197, 73, 51, 0.61)";
const color2 = "rgba(92, 160, 103, 0.63)";
  const color3 = "rgba(221, 144, 50, 0.603)";
  const [items, setItems] = useState([]);
  const deleteItem = (id) => {
    const newItem = items.filter(item => item.id !== id);
    setItems(newItem);
  }
    const DoneItem = (id) => {
 const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newItems);

}
  const addItem = (item) => {
    setItems([...items, item]);
  }

  return (
    <div className="App">
            <div className="color-header">
        <h1 className="header">To Do List</h1>
        <div className="color">
          <select name="color" id="">
            <option value="" selected id="0" style={{backgroundColor: default1}}>default</option>
            <option value=""  style={{backgroundColor: color1}}>color 1</option>
            <option value="" style={{backgroundColor: color2}}>color 2</option>
            <option value="" style={{backgroundColor: color3}}>color 3</option>
           </select>
        </div>
     </div>
      <Form onAddItem={addItem} />
      <List items={items} onDelete={deleteItem} onFinished={DoneItem } />
    </div>
  );
}

export default App;
