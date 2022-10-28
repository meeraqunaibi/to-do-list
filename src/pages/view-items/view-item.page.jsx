import './view-items.css'
import List from '../../components/list/list.component'
const ViewItemsPage = (props) => {
    return (
        <div className='view-page'>
 
        {
            props.items.length===0?<h2 className='no-item'>there is no items to show !!!</h2>:
            <List items={props.items}
                deleteItem={props.displayAlert}
                finishItem={props.finishItem}/>
        }
          </div>
    )

}
export default ViewItemsPage;
