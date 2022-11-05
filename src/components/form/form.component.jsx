import { useState } from 'react';
import './form.css'
import category_items from '../category/catedory'
const Form = (props) => {
  const [title, setTitle] = useState('Go Swim');
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: new Date(),
      isDone: false,
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked
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
          <option value="" disabled >Select</option>
          {
            category_items.map(item => (
              <option value={item.value} key={item.value}>{item.label}</option>
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