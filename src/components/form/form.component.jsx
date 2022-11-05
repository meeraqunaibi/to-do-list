import { useState } from "react";
import optionsCat from "../constants/data";

import "./form.css";
const Form = (props) => {
    const [title , setTitle]=useState("Do homework");
    const [ category , setCategory]=useState("");
    const [urgent , setUrgent]=useState(false);
    const handelSubmit=(e)=>{
     e.preventDefault();
     const newItem = {
        id : new Date(),
        title : e.target.title.value , 
        category : e.target.category.value ,
        urgent : e.target.urgent.checked,
        isDone: false,
     }
     props.onAddItem(newItem);
     setTitle("");
     setCategory("");
     setUrgent(false);
    }
    const handelTitle = (e) => {
        let t = e.target.value;
        t = t.replace(".", "-");
        setTitle(t);
    }
  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <input 
        type="text"
         placeholder="tittle"
         name="title"
         value={title}
         onChange = {handelTitle}
         />
        <select name="category" value={category} 
        onChange={(e)=>setCategory(e.target.value)}>
  
        <option value='' disabled>select1</option>
        {
             optionsCat.map((item , index) =>{
              return (<option key={item.value + index} value={item.value}>{item.label}</option>)
            })
             
        }
        </select>
        <input name="urgent" type="checkbox" checked={urgent}
         onChange={(e)=>setUrgent(e.target.value)}></input>
        <label className="label">Urgent</label>
        <input type="submit" value="add to list"/>
      </form>
      <hr></hr>
    </div>
  );
};
export default Form;