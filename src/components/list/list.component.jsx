import "./list.css";
import Item from "../item/item.component";

export default function List({ items, onDelete, onCheck }) {
  return (
    <div className="list container">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </ul>
    </div>
  );
}
