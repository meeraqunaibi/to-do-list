import { useState, useRef } from 'react';
import './App.css';
import Add from './pages/add-item/add-item.page'
import View from './pages/view-item/view'
import Header from './components/header/header.component';
import Dialog from './components/Dialog/dialog'

function App() {


  //You can put all product information into diaglog
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')) || '[]');
  //const [Window,setWindow] =useState(false);
  const [currentpage, setCurrentPage] = useState(items.length > 0 ? 'view' : 'add');

  const addItem = (item) => {
    //store the items array and add the new item value to it 
    const newItems = [...items, item];
    //set the updated value of items array 
    setItems(newItems);
    // store it at the local storage.
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }

  const idItemRef = useRef();

  const handleDialog = (message, isLoading) => {
    setDialog({ message, isLoading });
  };

  const deleteItem = (id) => {
    // const index = items.findIndex((item) => item.id === id);
    handleDialog("Are you sure you want to delete? sure you are sure ?", true);
    idItemRef.current = id;
  };


  const areUSureDelete = (choose) => {
    if (choose) {

      const newitems = items.filter(item => item.id !== idItemRef.current);
      setItems(newitems);
      localStorage.setItem('todoList', JSON.stringify(newitems));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  const sortFunction = (item) => {
    const newItems = [...item].sort((firstItem, secondItem) =>
      firstItem.isDone > secondItem.isDone ? 1 : -1,
    );
    setItems(newItems);
  };

  const finishitem = (id) => {
    // const newitem = items.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, isDone: true }
    //   }
    //   return item;
    // });

    // Sort version of the mapping
    const newItems = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newItems);
    sortFunction(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentpage={currentpage} />
      <div className="container">
        {currentpage === 'add' && <Add onAddItem={addItem} />}
        {currentpage === 'view' &&
          <View
            items={items}
            onDelete={deleteItem}
            onFinish={finishitem} />
        }
      </div>
      {dialog.isLoading && (
        <Dialog
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </div>

  );
}

export default App;
