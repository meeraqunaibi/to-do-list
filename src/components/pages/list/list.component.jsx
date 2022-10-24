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
          props.items.map((item, index) => <li key= {item.id} className= {item.urgent?"urgent":"" } >
           <h2>{item.title} </h2> <span>{item.category}</span> 
           <button onClick={()=>props.onDel(item.id)}> del</button>
          </li>)
        }
      </ul>
    </div>
  )
};

export default List;