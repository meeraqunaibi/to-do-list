import { useState } from "react";
// import CATI_OPTI from "data";
import "./form.css";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(false);
  const [category, setCategory] = useState("");
  
  const CATEGORIES_OPTIONS = [
    { value: "work", label: "Work Stuff" },
    { value: "home", label: "Home" },
    { value: "personal", label: "Personal" },
    { value: "school", label: "School" }
];

  const addItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      isDone: false,
      title: event.target.title.value,
      category: event.target.category.value,
      type: event.target.urgent.checked
    }
    if (newItem.category === "") {
      alert("You must select a category!");
      return;
    }
    props.onAddItem(newItem);
    setTitle("");
    setCategory("");
    setType(false);
  };

  const onTitleChange = (event) => {
    let title = event.target.value;
    setTitle(title);
  };

  return (
    <div className="form">
      <form onSubmit={addItem}>
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
              >{item.label}
              </option>
            ))
          }
        </select>
        <input
          name="urgent"
          type="checkbox"
          checked={type}
          onChange={(e) => setType(e.target.checked)}
        />
        <label>Urgent</label>
        <div className="separator" />
        <input type="submit" value="Add to List" />
      </form>
    </div>
  )

};

export default Form;
