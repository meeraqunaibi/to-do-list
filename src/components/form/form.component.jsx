import { useState } from 'react';
import CAT_OPTIONS from "../constants/constant";
import './form.css'
const Form = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id:new Date(),
      isDone:false,
      title: event.target.title.value.charAt(0).toUpperCase() + event.target.title.value.slice(1).toLowerCase(),
      category: event.target.category.value,
      urgent: event.target.urgent.checked
    }
    if(newItem.title.trim()===""){
      alert("Please fill the title with suitable data");
      return
    }
    if(newItem.category.trim()===""){
      alert("Please fill the category with suitable data");
      return
    }
    props.onAddItem(newItem);

    setTitle("");
    setCategory("");
    setIsUrgent(false);
  }

  const onTitleChange = (event) => {
    let title = event.target.value;
    title = title.replace(".", " ");
    title = title.replace("-", " ");
    setTitle(title);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          name="title"
          type="text"
          value={title}
          onChange={onTitleChange}
        />
        <select
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select</option>
          {
              CAT_OPTIONS.map((item,index)=>(
                <option value={item.title} key={index}>{item.label}</option>
              ))
            }
        </select>
        <input
          name="urgent"
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
        />
        <label>Urgent</label>
        <div className="separator" />
        <input type="submit" value="Add to List" />
      </form>
    </div>
  )
};

export default Form;