import React from "react";

const ListItems = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                {item.title} - {item.category} -{" "}
                {item.urgent ? "urgent".toLocaleUpperCase() : "non urgent"}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ListItems;
