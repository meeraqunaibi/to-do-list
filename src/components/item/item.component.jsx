import deleteIcon from "../../assets/deleteIcon.svg";
import checkMark from "../../assets/checkMark.svg";

export default function Item({ item, onDelete, onCheck }) {
  return (
    <li className={item.urgent ? "urgent" : ""}>
      <div className="data">
        <h3 className={item.isDone ? "done" : ""}>{item.title}</h3>
        <span className={item.isDone ? "done" : ""}>{item.category}</span>
      </div>
      <div className="actions">
        <button
          onClick={() => {
            onDelete(item.id);
          }}
        >
          <img src={deleteIcon} style={{ width: "4vmin" }} alt="delete" />
        </button>
        <button
          style={
            item.isDone
              ? { cursor: "not-allowed", opacity: "0.6" }
              : { cursor: "pointer", opacity: "1" }
          }
          disabled={item.isDone}
          onClick={() => onCheck(item.id)}
        >
          <img src={checkMark} style={{ width: "4vmin" }} alt="check" />
        </button>
      </div>
    </li>
  );
}
