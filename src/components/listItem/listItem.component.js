import React from "react";
import { Check, Trash } from "phosphor-react";

export const ListItem = (props) => {
  let { item, onFinish, showDialog } = props;
  return (
    <div>
      <li
        className={item.urgent ? "urgent" : ""}
        style={{ textDecoration: item.isDone ? "line-through" : "" }}
      >
        <div className="data">
          <h2>{item.title}</h2>
          <span>{item.category}</span>
        </div>
        <div className="action ">
          <button className="buttons" onClick={() => showDialog(item.id)}>
            <Trash size={25} />
          </button>
          <button
            className={`${item.isDone ? "disabled" : ""} buttons`}
            disabled={item.isDone}
            onClick={() => onFinish(item.id)}
          >
            <Check size={25} />
          </button>
        </div>
      </li>
    </div>
  );
};
