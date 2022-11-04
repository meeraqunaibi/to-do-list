import Categories_Options from '../../constants/data';

const Item = (props) => {

    const { item } = props;

    return (

        <li key={item.id} className={`item ${item.urgent ? "urgent" : ""}`} style={{ backgroundColor: item.isDone ? ' rgb(249, 213, 213)' : 'none' }}>
            <div className="data" style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}>

                <h2>

                    {item.title} -{item.category}</h2>

                {/* -{item.category}-{item.urgent ? 'URGENT' : 'non-urgent'} */}
                <span>{Categories_Options.filter(cate => cate.value === item.category)[0]?.lable}</span>
            </div>
            <div className="actions">
                <button onClick={() => props.onDelete(item.id)} >X</button>
                <button onClick={() => props.onFinish(item.id)} disabled={item.isDone}>done</button>



            </div>
        </li>);
};
export default Item;