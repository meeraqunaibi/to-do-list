import './view-items.css'
import List from '../../components/list/list.component'
const ViewItemsPage = (props) => {
    return (
        <div>
 
        {
            props.items.length===0?<h2>there is no items to show</h2>:
            <List items={props.items}
                deleteItem={props.displayAlert}
                finishItem={props.finishItem}/>
        }
          </div>
    )

}
export default ViewItemsPage;
