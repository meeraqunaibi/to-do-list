import { useState } from "react";
import "./list.css";
const List = (props) => {
  const [showDeletePoopUp, setshowDeletePoopUp] = useState(false);
  const [deleteId, setdeleteId] = useState(null);
  return (
    <div className="list">
      <ul className="ul">
        {props.items.map((item, index) => (
          <div className="li-list">
            <li key={index} className={item.urgent ? "urgent" : ""}>
              {item.title} - {item.category}
              <div className="btns">
                <button
                  className="button"
                  onClick={() => props.onDelete(item.id)}
                >
                  {" "}
                  delete{" "}
                </button>
                <button
                  className="button"
                  onClick={() => props.onfinish(item.id)}
                  disabled={item.isDone}
                >
                  done
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default List;
