import List from '../../components/list/list.component';
import './view.css'

const ViewItem =(props) =>{
    return(
        <div>
            {
                props.items.length >0 
                ?<List items = {props.item} onDelete= {props.deleteItem} onFinish = {props.finishItem}/>
                : <h1>Loading</h1>
            }
        </div>
    )
}

export default ViewItem;
