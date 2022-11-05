import CAT_OPTIONS from "../../constant/data";
import {Trash} from 'phosphor-react';
const Item = (props) => {
  const { item } = props;
  return (
    <li
      key={item.id}
      item={item}
      className={`item ${item.urgent ? "urgent" : ""}`}
      style={{
        backgroundColor: item.isDone ? " #F6E5F5" : "none",
      }}
    >
      <div
        className="contentData"
        style={{ textDecoration: item.isDone ? "line-through" : "none" }}
      >
        <h2 className="category-list">
          {item.title} = {item.category}
        </h2>
        <span>
          {/* {
        CAT_OPTIONS.filter((cat) => cat.value === item.category)[0]
          .title
      } */}
        </span>
        {/* {item.title}-{item.category} */}
      </div>
      <div className="actions">
        <button className="delItem" onClick={() => props.onDelete(item.id)} >
        <Trash size={32} />
        </button>
        {/* className="checkItem" */}
        <button className="checkItem" onClick={() => props.onFinish(item.id)} disabled={item.isDone}>done</button>
      </div>
    </li>
  );
};
export default Item;