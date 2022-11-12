import CATEGORY_OPTION from "../constant/data"
const Item = (props) => {
    const {item} = props;
    return (
                <li className={`item ${props.item.urgent ? "Urgent" : ''}`}>
                    <div className="data">
                        <h2>{item.title}</h2>
                        <span>
                            {CATEGORY_OPTION.filter(cat => cat.value == item.category)[0]?.label}
                        </span>
                    </div>
                    <div className="action">
                        <button onClick={() => props.onDelete(item.id)}>
                            <img src="delete.png" alt="" width={20} />
                        </button>
                        <button onClick={() => props.onFinish(item.id)} disabled={item.isDone}>
                            <img src="checked.png" alt="" width={20} />
                        </button>
                    </div>
                </li>


    )
}

export default Item;
