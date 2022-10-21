import React from "react";

const List = (props) => {
  return (
    <div>
      {props.items.map((item, index) => (
        <li key={index}>
          {item.title}-{item.category}
        </li>
      ))}
    </div>
  );
};
export default List;
