import { useState } from 'react';
import './form.css'; 
import { CATEGORY_OPTIONS } from '../../constants/data';
const Form = ({onAddItem}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: new Date(),
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked, 
      isDone: false
    }

    if(newItem.category === ""){
      alert("Choose a category!"); 
      return;
    }

    onAddItem(newItem);

    setTitle("");
    setCategory("");
    setIsUrgent(false);
  }

  const onTitleChange = (event) => {
    let title = event.target.value;
    title = title.replace(".", "-");
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select</option>
          {
            CATEGORY_OPTIONS.map(item => <option key={item.value} value={item.value}>{item.title}</option>)
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