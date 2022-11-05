const cat_options = [
    { value: "work", label: "Work Stuff" },
    { value: "home", label: "Home" },
    { value: "personal", label: "Personal" },
    { value: "school", label: "School" }
];
const Item = (props) => {
  const {onFinish,key, item, onDelete} = props;

  return (
    <li
      className={`item ${item.urgent ? 'urgent' : ''}`}>
      <div
        className="data"
        style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
      >
        <h2>{item.title}</h2>
        <span>
            {item.category}
        </span>
      </div>
      <div className="actions">
        <button onClick={() => onDelete(item.id)}>X	</button>
        <button onClick={() => onFinish(item.id)} disabled={item.isDone}>	&#10003;
        </button>
      </div>
    </li>
  );
};

export default Item;
