import { useState } from 'react';
import './form.css'
import CATEGORES_OPTION from '../../data'
const Form = (props) => {
  const [title, setTitle] = useState('Go Swim');
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked,
      id: new Date(),
      isDone:false,
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
      <form onSubmit={handleSubmit} >
        <input
          placeholder="Title"
          name="title"
          type="text"
          value={title}
          onChange={onTitleChange}
          required
        />
        
        <select
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select</option>
          {CATEGORES_OPTION.map(item => <option>{item.value}</option>)}
        </select>
        <div className='check-box'>
        <input
          name="urgent"
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
        />
        
          <label>Urgent</label>
        </div>
        <div className="separator" />
        <input type="submit" value="Add to List" className='submit' />
      </form>
    </div>
  )
};

export default Form;