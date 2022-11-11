import { useState ,useEffect} from 'react';
import './App.css';
import Condelet from './componants/condelet';
import Header from './componants/header';
import Addpage from './componants/pages/Addpage';
import View from './componants/pages/View';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Notfound from './componants/pages/Notfound';
function App() {
  const [items, setItem] = useState('')
  const [idtodel, setidtodel] = useState('')
  const [isopen, setisopen] = useState(false)
  const [loading, setloading] = useState(false)

 useEffect(() => {
setloading(true)
  setTimeout(()=>{
    const  items=JSON.parse(localStorage.getItem('todolist')) || [];
    setItem(items)
    setloading(false)
  },2000)
  
   
  
 }, [])
 



  const handleadd = (item) => {
    const newitems = [...items, item]
    setItem(newitems)
    localStorage.setItem('todolist', JSON.stringify(newitems))
  }
  const handelDelet = () => {
    const newitems = items.filter(item => item.id !== idtodel)
    setItem(newitems)
    localStorage.setItem('todolist', JSON.stringify(newitems))
    setidtodel('')
    setisopen(false)

  }
  const handelDone = (id) => {
    const newitems = items.map(item => {
      if (item.id === id) {
        return { ...item, done: true }
      }
      return item
    })
    newitems.sort((a, b) => a.done > b.done ? 1 : -1)
    setItem(newitems)
    localStorage.setItem('todolist', JSON.stringify(newitems))

  }
  const handlepopup = (id) => {
    setidtodel(id)
    setisopen(true)

  }
  return (
    <div className="App" >
<BrowserRouter>
<Header />
<Routes>
  <Route path='/add' element={<Addpage add={handleadd} />} />
 
  <Route path='/view'  element={<View
        items={items}
        onDelet={handelDelet}
        Done={handelDone}
        pophandel={handlepopup}
        loading={loading}

      />}/>
      <Route path='*' element={<Notfound />} />

</Routes>
</BrowserRouter>

   
    
      
{/*       
      {curent === 'add' && <Addpage add={handleadd} />}

      {curent === 'view' && <View
        items={items}
        onDelet={handelDelet}
        Done={handelDone}
        pophandel={handlepopup}
        loading={loading}

      />} */}

      {isopen ? <Condelet delet={handelDelet}
        close={setisopen}
      /> : null}





    </div>

  );
}

export default App;
