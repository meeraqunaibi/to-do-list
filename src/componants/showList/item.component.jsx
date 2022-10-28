import { TrashSimple, CheckSquare } from "phosphor-react";
import { useState } from "react";
import DeletePopUp from "../deletePopUp/deletepopup.component";
const Item = (props) => {
  let sendId;
  const [showDeletePoopUp, setshowDeletePoopUp] = useState(false);
  const [deleteId, setdeleteId] = useState(null);
  const showDeletePopUp = (id) => {
    setdeleteId(id);
    setshowDeletePoopUp(true);
  };
  return (
    <div
      key={props.e.id}
      className={`listItem ${props.e.urgent === true ? "urgent" : ""} ${
        props.e.category
      } ${props.e.isDone === true ? "done" : null}`}
    >
      <div className="col1">
        <span>{props.e.title} </span>
        <span className="category">{props.e.category} </span>
      </div>
      <div className="col2">
        <button
          disabled={props.e.isDone}
          onClick={() => showDeletePopUp(props.e.id)}
        >
          <TrashSimple disabled className="trash btn" size={22} />
        </button>

        <button
          disabled={props.e.isDone}
          onClick={() => props.markDone(props.e.id)}
        >
          <CheckSquare className="check btn" size={22} />
        </button>
      </div>
      {showDeletePoopUp ? (
        <DeletePopUp
          className="deletepopup"
          setshowDeletePoopUp={setshowDeletePoopUp}
          delete={props.delete}
          id={deleteId}
        />
      ) : null}
    </div>
  );
};
export default Item;
