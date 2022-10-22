import './list.css';

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
          props.items.map((item, index) => <li key={item.id}>
            {item.title} - {item.category} - {item.urgent ? 'URGENT' : 'non urgent'}
          </li>)
        }
      </ul>
    </div>
  )
};

export default List;