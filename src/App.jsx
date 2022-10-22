import logo from './logo.svg';
import './App.css';
import Form from './component/form/form.component';
import { useState } from 'react';
import List from './component/list/list.component';

function App() {
  // const [names, setnames] = useState(["zainab", "ali", "ahmad", "saker", "ismael", "ibrahem"])
const [items,setitems]= useState([]);
const addItem = (item) =>{
console.log("additem",item);
setitems([...items,item])
}
  return (
    <div className="App">
      {/* <ul>
        {
          // names.map((name,index)=> <li>{name.toUpperCase()} - {name} - {index}</li>)
          names.map((name,index) => {
             if (name === "ahmad")
              name= name + "manasrah";
            const color = index%2 ===0 ? 'pink' : 'red';
            return <li style={{color : color}}>
              {name}
            </li>;
          })

        }
      </ul> */}
      <h1> To Do App</h1>
     <Form onAddItem={addItem}/>
     {/* {items.length} */}
     <List items={items} />
    </div>
  );
}

export default App;
