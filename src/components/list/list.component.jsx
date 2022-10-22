import './list.css';
import CATEGORIES_OPTIONS from '../../constants/data';

/** 
 * @param {{
 * items: {
 *   id: number,
 *   title: string,
 *   category: string,
 *   urgent: string
 * }[]
 * }} props
 */
const List = (props) => {
  return (
    <div className='items-list'>
      <ul>
        {
          props.items.map(item => (
            <li key={item.id} className={`item ${item.urgent ? 'urgent' : ''}`}>
              <h2>{item.title}</h2>
              <span>
                {
                  CATEGORIES_OPTIONS.filter(cat => cat.value === item.category)[0]?.label
                }
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default List;