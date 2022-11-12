import { useState } from 'react';
import './form.css'
import CATEGORIES_OPTIONS from '../../constants/data';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
  const [title, setTitle] = useState('Go Swim');
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      isDone: false,
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked
    }

    if (newItem.category === "") {
      alert("You must select a category!");
      return;
    }

    props.onAddItem(newItem);

    setTitle("");
    setCategory("");
    setIsUrgent(false);

    navigate({ pathname: '/view' });
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
          required
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
            CATEGORIES_OPTIONS.map(item => (
              <option
                value={item.value}
                key={item.value}
              >{item.label}</option>
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