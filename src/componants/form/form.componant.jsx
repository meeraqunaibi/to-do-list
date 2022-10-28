import { useState } from "react";
import "./form.css";
import CATEGORIES_OPTIONS from "../../constants/categorydata";
import PopUpErrorMsg from "../PopUpErrorMsg/PopUpErrorMsg.component";
const Form = (props) => {
  const [title, setTitle] = useState("Go To Swim");
  const [category, setCategory] = useState("");
  const [urgent, setUrgent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const toRender = handleInputs(
      event.target.category.value,
      event.target.title.value
    );
    if (toRender === true) {
      const addNewItem = {
        id: Date.now(),
        title: event.target.title.value,
        category: event.target.category.value,
        urgent: event.target.urgent.checked,
        isDone: false,
      };

      props.addItem(addNewItem);
      setTitle("");
      setCategory("");
      setUrgent(false);
    }
  };
  const handleTitleChange = (eve) => {
    let title = eve.target.value;
    title = title.replace(".", " ");
    title = title.replace("-", " ");
    setTitle(title);
  };
  const handleInputs = (selectValue, titleValue) => {
    if (selectValue === "") {
      props.setTheError("select");
      return false;
    } else if (titleValue === "") {
      props.setTheError("title");
      return false;
    }
    return true;
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
          {CATEGORIES_OPTIONS.map((element) => {
            return (
              <option value={element.value} key={element.value}>
                {element.label}
              </option>
            );
          })}
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
      {props.theError !== "" ? (
        <PopUpErrorMsg data={props.theError} setTheError={props.setTheError} />
      ) : null}
    </div>
  );
};

export default Form;
