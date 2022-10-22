import { useState } from 'react';
import './App.css';
import Form from './componants/Form';
import List from './componants/List';
 
function App() {
const names=['all','awf','hms','ibr','moh','ram','yak']
 const [items,setItem]= useState([])

   const handleadd=(item)=>{
       setItem([...items,item])
   }
  return (
    <div className="App">
        <h1>TODO..</h1>
        <Form  add={handleadd} />
        <List  items={items}/>
    </div>
  );
}

export default App;
