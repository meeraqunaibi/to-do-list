import { useState } from "react";
import "./form.css";
import Data from "../data";
const Form = ({ onAddItems, input, setInput }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked,
    };

    if (newItem.title === "" || newItem.category === "") {
      alert("please enter valid values");
      return;
    } else {
      onAddItems(newItem);
    }

    setTitle("");
    setCategory("");
    setIsUrgent(false);
  };

  const onTitleChange = (event) => {
    let title = event.target.value;
    title = title.replace(".", "-");
    title = title.replace(" ", "-");
    setTitle(title);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="my-2">
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
          <option value="" disabled>
            Select
          </option>
          {Data.map((items) => (
            <option key={items.value} value={items.value}>
              {items.label}
            </option>
          ))}
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
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="search..."
          className="m-2 p-3 rounded-xl outline-double w-64"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
