import CATIGORY_OPTION from '../../constants/data';
import './list.css'
import deleteIcon from '../../Assets/delete.png';
import Item from './item.components';

const List = (props) => {
  return (
    <div className='list'>
      Items Of List
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
