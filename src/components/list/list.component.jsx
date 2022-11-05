import './list.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-icons';

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
      <div >
         <ul className='List'>
            {
               props.items.map((item, index) => <li className={item.urgent ? "urgent" : "" || item.isDone ? "Done" : ""} key={index}>
                  {item.title} - {item.category}
                  <div className='btn-group '>
                     <button onClick={() =>
                        props.onDelete(item.id)}
                        className="btn btn-warning btn-sm"
                     >
                        Delete
                     </button>
                     <button onClick={() => { props.DoneItem(item.id) }}
                        disabled={item.isDone
                        } className={item.isDone ? "btn-warning btn-sm" : "btn-warning btn-sm"}
                     >
                        Done
                     </button>
                  </div>

               </li>)


            }

         </ul>
      </div>
   )
};

export default List;