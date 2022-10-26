import List from "../../components/list/list.component";
import './view-item.css'

const View = (props) => {

    return (
        <div className="view-items">
            {

                props.items.length > 0
                    ? <List items={props.items} onDelete={props.onDelete} onFinish={props.onFinish} />
                    : <h2>No Items Added!</h2>
            }
        </div>
    );

}
export default View;


