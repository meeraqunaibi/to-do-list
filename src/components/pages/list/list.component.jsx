import './list.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
/** 
 * @param {{
 * items: {
 *   title: event.target.title.value,
 *   category: event.target.category.value,
 *   urgent: event.target.urgent.checked
 * done:
 * }[]
 * }} props
 */
const List = (props) => {
  const handleDone = (id) => {
    props.onDone(id);
  }
  
  const handleDelete = () => {

  }

  return (
    <div className='items-list'>
      <ul>
        {
          props.items.map((item, index) => <li key={item.id} className={item.urgent ? "urgent" : ""} >
            <div className="item">
              <div className="lSide">
                <h2 className={item.done?"done":""}>{item.title} </h2> <span className={item.done?"done":""}>{item.category}</span>
              </div>
              <div className="rSide">
                <button onClick={() => props.onDel(item.id)}> delete </button>
                <button onClick={() => handleDone(item.id)}> Done </button>
              </div>
            </div>
          </li>)
        }
      </ul>
    </div>
  )
};

export default List;