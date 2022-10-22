import React from "react";

const ListItems = ({ items }) => {
  return (
    <div>
      <div className=" flex items-center justify-center flex-col">
        {items.map((item, index) => (
          <ul key={index}>
            <li className="text-center text-2xl bg-green-500 my-2 py-3 px-10 text-white rounded-2xl">
              {item.title} - {item.category} -{" "}
              {item.urgent ? "urgent".toLocaleUpperCase() : "non urgent"}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
