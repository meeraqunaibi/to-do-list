import { useState } from "react";
import "./form.css";
const Form = (props) => {
  const [title, changetitle] = useState("Run");
  const [category, changecategory] = useState("");
  const [Urgent, changeUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked,
    };

    props.addItem(newItem);

    changetitle("");
    changecategory("");
    changeUrgent(false);
  };

  const handletilte = (event) => {
    let title = event.target.value;
    title = title.replace(".", " ");
    title = title.replace("-", " ");
    changetitle(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <label htmlFor="tilte" title="title">
            Title :{" "}
          </label>
          <input
            placeholder="Title"
            name="title"
            type="text"
            value={title}
            onChange={handletilte}
          />
        </div>
        <div className="row">
          <label htmlFor="category" title="category">
            Category :{" "}
          </label>
          <select
            name="category"
            placeholder="Category"
            value={category}
            onChange={(event) => changecategory(event.target.value )}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="work">Work</option>
            <option value="home">Home</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div className="row">
          <input
            name="urgent"
            type="checkbox"
            checked={changeUrgent}
            onChange={(event) => changeUrgent(event.target.checked)}
          />
          <label>Urgent</label>
        </div>
        

        <input className="button row" type="submit" value="Add to List" />
      </form>
    </div>
  );
};

export default Form;
