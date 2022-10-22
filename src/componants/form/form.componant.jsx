import { useState } from "react";
import "./form.css";
import ShowList from "../showList/showlist.component";
const Form = (props) => {
  const [title, setTitle] = useState("Go To Swim");
  const [category, setCategory] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [newItem, setNewItem] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.category.value);
    console.log(event.target.urgent.checked);
    const addnewItem = {
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked,
    };
    setNewItem([...newItem, { ...addnewItem }]);
    console.log(event.target.urgent);
    setTitle("");
    setCategory("");
    setUrgent(false);
  };
  const handleTitleChange = (eve) => {
    // console.log(eve.target.value);
    let title = eve.target.value;
    title = title.replace(".", "-");
    title = title.replace(" ", "-");
    setTitle(title);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <select
          name="category"
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="work">Work</option>
          <option value="home">Home</option>
          <option value="personal">Personal</option>
        </select>
        <div>
          <input
            type="checkbox"
            name="urgent"
            onChange={(e) => setUrgent(e.target.checked)}
            checked={urgent}
          />
          <label htmlFor="">Urgent</label>
        </div>
        <input type="submit" value="Add to List" />
      </form>
      <hr />
      <ShowList data={newItem} />
    </div>
  );
};

export default Form;
