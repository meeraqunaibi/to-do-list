import './view-items.css';
import List from '../../components/list/list.component'

const ViewItemsPage = (props) => {
  return (
    <div className="view-items">
      {
        props.items.length > 0
          ? <List items={props.items} onDelete={props.deleteItem} onFinish={props.finishItem} />
          : <h2>No Items Added!</h2>
      }
    </div>
  )
};

export default ViewItemsPage;