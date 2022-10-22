import CATIGORY_OPTION from '../../constants/data';
import './list.css'
import deleteIcon from '../../assets/delete.png';

const List = (props) => {
  return (
    <div className='list'>
      items of list
      <ul>
        {
          props.items.map((item, index) =>
            <li key={index} >
              <h1>{item.title} - {item.category} - {item.urgent ? 'urgent' : 'nonurgent'}</h1>
              
              <span>
                {
                  CATIGORY_OPTION.filter(cat => cat.value === item.category)[0]?.label
                }
              </span>
              {/* {item.title} - {item.category} - {item.urgent ? 'urgent' :'nonurgent'} */}

              <button onClick={() => props.onDelete(item.id)}>
                <img src={deleteIcon} alt="delete" width={25} />
              </button>
            </li>)
        }
      </ul>
      <div>

      </div>
    </div>

  );
}
export default List