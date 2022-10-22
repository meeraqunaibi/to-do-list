import React from "react";

const ListItems = ({ items, setItems, input, setInput }) => {
  const handelDelete = (index) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  const filterItems = ({ title }) => {
    return title.toLowerCase().includes(input.toLowerCase());
  };

  return (
    <div className="flex items-center justify-center my-5">
      <div className=" flex items-start flex-col w-9/12">
        <ul className="w-full">
          {input
            ? items.filter(filterItems).map((item, index) => (
                <li
                  key={index}
                  className={`text-2xl flex justify-between ${
                    item.urgent ? "bg-red-500" : "bg-green-500"
                  } my-2 py-1 px-7 text-white rounded-2xl shadow-lg`}
                >
                  <div>
                    {item.title}
                    <h2 className="text-gray-200 text-base">{item.category}</h2>
                  </div>
                  <button
                    className=" hover:animate-spin"
                    onClick={() => handelDelete(index)}
                  >
                    🗑️
                  </button>
                </li>
              ))
            : items
                .filter((item) => item.urgent)
                .map((item, index) => (
                  <li
                    key={index}
                    className={`text-2xl flex justify-between ${
                      item.urgent ? "bg-red-500" : "bg-green-500"
                    } my-2 py-1 px-7 text-white rounded-2xl shadow-lg`}
                  >
                    <div>
                      {item.title}
                      <h2 className="text-gray-200 text-base">
                        {item.category}
                      </h2>
                    </div>
                    <button
                      className=" hover:animate-spin"
                      onClick={() => handelDelete(index)}
                    >
                      🗑️
                    </button>
                  </li>
                ))}

          {!input &&
            items
              .filter((item) => item.urgent === false)
              .map((item, index) => (
                <li
                  key={index}
                  className={`text-2xl flex justify-between ${
                    item.urgent ? "bg-red-500" : "bg-green-500"
                  } my-2 py-1 px-7 text-white rounded-2xl shadow-lg`}
                >
                  <div>
                    {item.title}
                    <h2 className="text-gray-200 text-base">{item.category}</h2>
                  </div>
                  <button
                    className=" hover:animate-spin"
                    onClick={() => handelDelete(index)}
                  >
                    🗑️
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default ListItems;
