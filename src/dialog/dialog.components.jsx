import React from "react";
import "./dialog.css";
const Dialog = (props) => {
  const { item } = props;
  return (
    <div className="dialog">
      <h3> Do you want to delete : {item.title} ? </h3>
      <div className="del">
        <button
          onClick={() => {
            props.onDelete(item.id);
            console.log(item.id);
          }}
        >
          Yes
        </button>
        <button onClick={() => props.onPop(undefined)}>No</button>
      </div>
    </div>
  );
};
export default Dialog;
