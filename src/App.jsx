import { useState } from 'react';
import './App.css';
import Condelet from './components/condelet';
import Header from './components/header';
import Addpage from './components/pages/Addpage';
import View from './components/pages/View';

function App() {
  const [items, setItem] = useState(JSON.parse(localStorage.getItem('todolist')) || [])
  const [idtodel, setidtodel] = useState('')
  const [isopen, setisopen] = useState(false)
  const [curent, setcurent] = useState(items.length?'view':'add')

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
      <Header setcurent={setcurent} curent={curent} />
      
      
      {curent === 'add' && <Addpage add={handleadd} />}

      {curent === 'view' && <View
        items={items}
        onDelet={handelDelet}
        Done={handelDone}
        pophandel={handlepopup}

      />}

      {isopen ? <Condelet delet={handelDelet}
        close={setisopen}
      /> : null}





    </div>

  );
}

export default App;
