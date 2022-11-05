import React, { useState } from "react";
import FeatherIcon from 'feather-icons-react'
const TodoForm = (props) => {
  const [title, settitle] = useState("");
  const [editRender, seteditRender] = useState(false);
  if (props.mode === "edit" && !editRender) {
    settitle(props.todos[0].title);
    seteditRender(true);
  } else {
  }
  const newtitleHandler = (event) => {
    settitle(event.target.value);
  };
  const addNewTodoHandler = () => {
    let titleTask = title;
    settitle("");
    seteditRender(false)
    return props.addTodo(titleTask);
  };
  let btnString = "Add";
  if (props.mode === "edit") {
    btnString = "Edit";
  } else {
    btnString = "Add";
  }
  return (
    <div className="todos-form">
      <div className="todos-form-icon" onClick={props.showUncompleteTask }>
      <FeatherIcon icon= "circle" className="circle-icon" />

      </div>
      <div className="todos-form-form">
        <input
          type="text"
          placeholder="Add Todo..."
          onChange={newtitleHandler}
          value={title}
        />
      </div>
      <div className="todos-form-submit">
        <button
          className="btn "
          onClick={addNewTodoHandler}
          disabled={title.trim() ? false : true}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
