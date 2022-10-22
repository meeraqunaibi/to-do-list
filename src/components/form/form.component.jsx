import { useState } from "react";
import "./form.css";
import CATEGORY_OPTION from "../constant/constant";

const Form = (props) => {
  const [title, setTitle] = useState("Go Swim");
  const [category, setCategory] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: new Date(),
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked,
      isDone: false,
    };

    props.addItem(newItem);

    setTitle("");
    setCategory("");
    setIsUrgent(false);
  };

  const onTitleChange = (event) => {
    let title = event.target.value;
    title = title.replace(".", " ");
    title = title.replace("-", " ");
    setTitle(title);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label>Description</label>
          <input
            placeholder="Title"
            name="title"
            type="text"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="item">
          <label>Category</label>
          <select
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {CATEGORY_OPTION.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="check">
          <input
            name="urgent"
            type="checkbox"
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
          />
          <label>Urgent</label>
        </div>
        <div className="separator" />
        <input type="submit" value="Add to List" />
      </form>
    </div>
  );
};

export default Form;
