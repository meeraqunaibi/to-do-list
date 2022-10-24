import './list.css';
import category_items from '../category/catedory'
/** 
 * @param {{
 * items: {
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
          props.items.map((item, index) =>
            <li key={index}
              className={`item ${item.urgent ? 'urgent' : ''}`}>

              <div className="data" style={{textDecoration:item.isDone?'line-through':'none'}}>
                <h2>{item.title}</h2>
                <span>{category_items.filter(cat => cat.value === item.category)[0]?.label}</span>
              </div>
              <div className="action">
                <button className='x' onClick={ () => props.onDelate(item.id)}>X</button>
                <button className='D' onClick={ () => props.onComplete(item.id)}>Done</button>
              </div>
            </li>)
        }
      </ul>
    </div>
  )
};

export default List;