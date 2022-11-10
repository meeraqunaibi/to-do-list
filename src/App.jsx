
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddItemsPage from './component/pages/add-item/add-item.component';
import ViewItemsPage from './component/pages/view-item/view-item.component';
import NotFound from '../src/component/pages/not-found/not-found.component';
import Header from './component/header/header.component';

// import Form from './component/form/form.component';
// import List from './component/list/list.component';


function App() {
  const [item, setItem] = useState();
  // const [currentPage, setCurrentPage] = useState('add');  // value Add or View
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem('React To DO App') || '[]');
      setItem(items);
      setLoding(false);
    }, 10 * 1000);
  }, [])

  // const addItem =(items)=>{
  //      setItem([...item , items]);
  //      localStorage.setItem('to do list', JSON.stringify(item))
  // }

  const addItem = (items) => {
    const newItem = [...item, items];
    setItem(newItem);
    localStorage.setItem('React To DO App', JSON.stringify(newItem));
  }
  // const deleteItem = (id) => {
  //   setItem(item?.filter(items => items.id !== id));
  // }

  // const finishItem = (id) => {
  //   setItem(item?.map(items => items.id === id ? { ...items, isDone: true } : items));
  // }

  const dele= (id) =>{
    //  const newArr = item.filter(i=>{
    //      return  i.id !== id 
    //      })
    //      setItem(newArr);
    const newArr = item.filter(i => { return i.id !== id })
    setItem(newArr);
    localStorage.setItem('React To DO App', JSON.stringify(newArr));
  }
 

  const onFinish = (id) => {
    // const finishArr = item.filter(f=>{
    //   return f.id === id ? {...item , isDone:true} : item
    // })
    // setItem(finishArr);

    const finishArr = item.filter(f => { return f.id === id ? { ...item, isDone: true } : item })
    setItem(finishArr);
    localStorage.setItem('React To DO App', JSON.stringify(finishArr));

  }
//  console.log(deleteItem)

  return (
    
    <div className="App">
      {/* <Form onAddItem={addItem}/>
      <List item={item}   deleteItem={deleteItem}  onFinish={onFinish}/>  */}
       
       <BrowserRouter>
      <div className='header'>
        
      
         <Header/>
           
        {/* <button id='btn1' className={currentPage === 'add' ? "active" : ''} onClick={() => setCurrentPage('add')}>Add-item</button>
        <button  className={currentPage === 'view' ? "active" : ''} onClick={() => setCurrentPage('view')}>View-item</button> */}
      </div>
        
        <Routes>
          <Route path="/view" element={  <ViewItemsPage  deleteHandel={dele} loding={loding} item={item}  onFinish={onFinish} finishHandel={onFinish} />}/>
          <Route path="/add" element={ <AddItemsPage addItem={addItem}  />} />
           <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* conditional Rendering  */}

      {/* {currentPage === 'add' && <AddItemsPage addItem={addItem} />}
      {currentPage === 'view' && <ViewItemsPage 
        loding={loding}
        item={item}
        deleteHandel={dele}
        onFinish={onFinish} 
        finishHandel={onFinish} />}
  */}

    </div>
    
  );
}

export default App;
