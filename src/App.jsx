import { useState } from 'react';
import './App.css';
import Popup from './components/popup/popup.component';
import Header from './components/header/header.component';
import AddPage from './components/add-page/add-page.component';
import ViewPage from './components/view-page/view-page.component';
function App() {
  const [items,setItems] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [alertBoxStatus, setAlertBoxStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState("add");

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

  const handleAddClick = ()=>{
    setCurrentPage("add");
  }; 

  const handleViewClick = () =>{
    setCurrentPage("view");
  };

  return (
    <div className="App">
      <Header 
        handleAddClick={handleAddClick}
        handleViewClick={handleViewClick}
        currentPage={currentPage}
      />
      {currentPage === "add" && <AddPage onAddItem={addItem}/>}
      {currentPage === "view" && <ViewPage items={items} onDelete={showAlertBox} onCheck={markAsDone}/>}

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
