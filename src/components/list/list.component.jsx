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
          props.items.map((item, index) => <li key={index}>
            {index+1 }{ " - "}
            {item.title?item.title:"no tiltle"} / {item.category?item.category:"no category"} / {item.urgent ? 'URGENT' : 'non urgent'}
          </li>)
        }
      </ul>
    </div>
  )
};

export default List;