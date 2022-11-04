import "./list.css";
const List = (props) => {
  return (
    <div className="list">
      <ul className="ul">
        {
         
            props.items.map((item, index) => (
               <div className="li-list">
              <li  key={index} className={item.urgent ? "urgent":""}>
                {item.title} - {item.category}
                <button
                  className="button"
                  onClick={() => props.onDelete(item.id)}
                >
                  delete
                </button>
                <button
                  className="button"
                  onClick={() => props.onfinish(item.id)}
                  disabled={item.isDone}
                >
                  done
                </button>
              </li>
              </div>
            ))
        }
      </ul>
    </div>
  );
};
export default List;
