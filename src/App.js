import { useState } from 'react';
import './App.css';
import Condelet from './componants/condelet';
import Form from './componants/Form';
import List from './componants/List';
 
function App() {
const names=['all','awf','hms','ibr','moh','ram','yak']
 const [items,setItem]= useState([])
const [idtodel,setidtodel]=useState('')
const [isopen, setisopen] = useState(false)
   const handleadd=(item)=>{
       setItem([...items,item])
   }
  const  handelDelet=()=>{
     const newitems= items.filter(item=>item.id !==idtodel)
     setItem(newitems)
     setidtodel('')
    setisopen(false)

   }
   const handelDone=(id)=>{
   const newitems= items.map(item=>{
      if(item.id===id){
       return  {...item,done:true}
      }
      return item
    })
    newitems.sort((a,b)=>a.done>b.done? 1:-1)
    setItem(newitems)
   
   }
   const handlepopup=(id)=>{
    setidtodel(id)
    setisopen(true)

   }
  return (
  
    

    <div  className="App" >
        <h1>TODO..</h1>
      
        {isopen? <Condelet  delet={handelDelet} 
        close={setisopen}
        /> :null } 
       
       <Form  add={handleadd} />
        <List  
        items={items} 
        onDelet={handelDelet}
         Done={handelDone}
         pophandel={handlepopup}
          />
       
        
    </div>
   
  );
}

export default App;
