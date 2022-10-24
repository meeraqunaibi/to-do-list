import './list.css';

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
          props.items.map((item, index) => <li className={item.urgent?"urgent":""} key={index}>
            {item.title} - {item.category} 
            <button onClick={() => props.onDelete(item.id)} className='delete'>Delete</button>
            <button onClick={() => { props.onFinished(item.id) }} disabled={item.isDone}>Done</button>
          </li>)
          
        
        }
       
      </ul>
    </div>
  )
};

export default List;