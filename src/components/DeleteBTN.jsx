import React from "react";

const DeleteBTN = ({
  deletePoopUp,
  setDeletePoopUp,
  indexOfItem,
  items,
  setItems,
}) => {
  const index = indexOfItem;
  const handelDelete = () => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
    setDeletePoopUp(false);
  };
  return (
    <div className="absolute bg-slate-900  bg-opacity-60 w-screen h-screen flex items-center justify-center z-50">
      <div className=" flex items-center justify-between bg-white w-96 h-80 rounded-3xl shadow-2xl px-12 ">
        <button
          onClick={() => setDeletePoopUp(false)}
          className="bg-yellow-300 hover:bg-yellow-500 duration-150 rounded-xl p-2 text-white text-2xl shadow-2xl"
        >
          Cancel
        </button>
        <button
          onClick={handelDelete}
          className=" hover:animate-spin bg-red-500 rounded-xl shadow-2xl p-2 text-3xl"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default DeleteBTN;
