import { useState } from 'react';
import './App.css';
import Form from './components/form/form.component';
import List from './components/list/list.component';
import Popup from './components/popup/popup.component';
function App() {
  const [items,setItems] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [alertBoxStatus, setAlertBoxStatus] = useState(false);

  const addItem = (item)=>{
    setItems(
     [item, ...items]   
    );
  };

  const showAlertBox =(id) =>{
    setAlertBoxStatus(true);
    setItemId(id);
  };
  const markAsDone = (id) => {
      setItems(items.map(item => item.id === id ? {...item,isDone:true}: item )
      .sort((a,b)=> a.isDone ? 1 :-1)); 
  };

  const onYes = () =>{ 
    setItems(items.filter(item => item.id !== itemId));
    setAlertBoxStatus(false);
  };
  const onNo = () =>{
    setAlertBoxStatus(false);
  };

  return (
    <div className="App">
      <h1>R-ToDOApp</h1>
      <Form onAddItem={addItem} />
      <hr/>
      <List items={items} onDelete={showAlertBox} onCheck={markAsDone}/>

      <Popup 
        show={alertBoxStatus}
        title="Delete a todo"
        body="Are you sure?"
        onYes={onYes}
        onNo={onNo}/>
    </div>
  );
}

export default App;
