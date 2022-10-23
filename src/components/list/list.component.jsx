import CATIGORY_OPTION from '../../constants/data';
import './list.css'
import deleteIcon from '../../assets/delete.png';
import Item from './item.component';

const List = (props) => {
  return (
    <div className='list'>
      items of list
      <ul>
        {
          props.items.map(item => (
            <Item key={item.id} item={item}
              onDelete={props.onDelete}
              onFinish={props.onFinish} />
         )
)}
      </ul>

    </div>

  );
}
export default List