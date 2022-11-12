import './list.css';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

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

  const [isVisible, setIsVisible] = useState(false);
  const [itemID, setItemID] = useState(-1);
  const handleDone = (id) => {
    props.onDone(id);
  }

  const handleDelete = (id) => {
    setItemID(id);
    document.getElementById('id01').style.display = 'block';
    setIsVisible(true);
  }

  const confirmDelete = (id) => {
    props.onDel(itemID);
    document.getElementById('id01').style.display = 'none';
  }

  const cancelDelete = (id) => {
    // props.onDel(id);
    document.getElementById('id01').style.display = 'none';
  }

  return (

    <div className='items-list'>
      <div id="id01" className={isVisible ? "modal visibleDialog" : "modal invisibleDialog"}>
        <div className="modal-content">
          <div className="container">
            <span className="w3-button w3-display-topright">&times;</span>
            <p>This will delete it permanently... continue? ..</p>
            <button onClick={() => confirmDelete()}>yes</button>
            <button onClick={() => cancelDelete()}>No</button>
          </div>
        </div>
      </div>
      <ul>
        {
          props.items.map((item, index) => <li key={item.id} className={item.urgent ? "urgent" : ""} >
            <div className="item">
              <div className="lSide">
                <h2 className={item.done ? "done" : ""}>{item.title} </h2> <span className={item.done ? "done" : ""}>{item.category}</span>
              </div>
              <div className="rSide">
                <button onClick={() => handleDelete(item.id)}> Delete </button>
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