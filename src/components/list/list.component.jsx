import './list.css';
import Item from './item.component';
/** 
 * @param {{
 * items: {
 *   id:new Date();
 *   title: event.target.title.value,
 *   category: event.target.category.value,
 *   urgent: event.target.urgent.checked
 * }[]
 * }} props
 */
const List = (props) => {
    return (
        <div className='items-list'>
            <ul> 
            {
              props.items.map(item => 
                <Item key={item.id} item={item} 
                onDelete={props.deleteItem}
                onFinish={props.finishItem}
                />
             )
            }
            </ul>
        </div>
    )
};

export default List;
