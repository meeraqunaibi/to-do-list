import { useState } from "react";
import "./form.css";
import { CAT_OPTIONS } from "../../constant/data";
const Form = (props) => {
  const [title, setTitle] = useState("Go Muna");
  const [category, setCategory] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const handelSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      isDone: false,
      title: event.target.title.value,
      urgent: event.target.urgent.checked,
      category: event.target.category.value,
      id: new Date(),
    };
    if (newItem.category === "") {
      alert("please enter option");
      return;
    }
    props.onAddItem(newItem);
    console.log(newItem);
    setTitle("");
    setCategory("");
    setIsUrgent(false);
  };
  const onTitleChange = (event) => {
    let title = event.target.value;
    title = title.replace(" ", "-");

    setTitle(title);
  };
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handelSubmit}>
          Name
          <input
            name="title"
            type="text"
            value={title}
            onChange={onTitleChange}
          />
          <br />
          Category
          <select
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              select
            </option>

            {CAT_OPTIONS.map((item) => (
              <option value={item.value} key={item.value}>
                {item.title}
              </option>
            ))}
            {/* <option value="work">Work</option>
                    <option value="home">Home</option>
                    <option value="personal">Personal</option> */}
          </select>
          <br />
          <input
            name="urgent"
            type="checkbox"
            
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
          ></input>
          Urgent
          <br />
          <button type="submit" value="add to List">
            add to List
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
