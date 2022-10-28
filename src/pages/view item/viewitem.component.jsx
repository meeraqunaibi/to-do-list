import List from '../../components/list/list.component';
import './viewitem.css'
const ViewItem = (props) => {
    return (
        <div className='view'>
            <h1>Zainab</h1>
            {

                props.items.length > 0
                    ? <List items={props.items} onDelete={props.deleteItem} onFinish={props.finishItem} />
                    : <h2>no items added</h2>
            }
        </div>
    );
}
export default ViewItem