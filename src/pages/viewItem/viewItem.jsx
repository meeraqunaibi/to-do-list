import List from '../../components/list/list.component'
import './viewItem.css';
const ViewItem = (props) => {
    return (
        <div>

            {

                props.items.length > 0
                    ? <List items={props.items} onDelete={props.deleteItem} DoneItem={props.DoneItem} />
                    : <h2>No Items Added!</h2>
            }


        </div>
    )

}

export default ViewItem;