import React from "react";
import "./modal.component.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <h2 className="message">
        Are you sure that you want to delete the task?
        <div className="action">
          <button onClick={() => props.deleteTask(props.id)}>yes</button>
          <button onClick={props.undoDelete}>cancel</button>
        </div>
      </h2>
    </div>
  );
};
export default Modal;
