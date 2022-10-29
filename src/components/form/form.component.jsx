import { useState } from "react";
import CATEGORY_OPTION from "../constant/data";
import './form.css'
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState('');
  const [isurgent, setUrgent] = useState(false);

  const onTitleChange = (e) => {
    let title = e.target.value;
    setTitle(title);
  }

  const onhandelsubmit = (e) => {
    
    console.log("hi world")

    const newItem = {
      id: Date.now(),
      isDone:false,
      title:title,
      category: category,
      isurgent:isurgent

    };
    console.log(newItem);
    props.onAddItem(newItem);
    // e.preventDefualt();
  }

  return (
    <form className="form">
      <input
        placeholder="Title"
        value={title}
        type='text'
        onChange={onTitleChange}
      />
      <select
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ><option value="">Select</option>
        {
          CATEGORY_OPTION.map(item =>
            <option
              key={item.value}
              value={item.value}
            >{item.label}</option>
          )
        }
      </select>
      <input
        placeholder="urgent"
        type='checkbox'
        onChange={(e) => setUrgent(e.target.value)}
        isurgent='cheacked'
      />
      <label>Urgent</label>

      <button value='Add to List' type="button"  className="button-1"
       onClick={(event)=>onhandelsubmit(event)}>Add to list</button>
    </form>
  )
}

export default Form;


