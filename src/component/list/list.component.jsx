import React from 'react';
// import Item from './item.component';
import './list.css';

const List = (props) => {
  console.log(props);
  
  return (
    <div className='list'>

      
      <ul>

        {

          props.item.map((items) =>

            <li key={items.id} >


              {items.title} - {items.category} - {items.urgent ? 'URGENT' : 'NONURGENT'}
              <button className='btn' onClick={()=>{props.deleteHandel(items.id)}}>Delete</button>
              <button className='btn1' onClick={() => {props.finishHandel(items.id)}} disabled={items.isDone}>Done</button>
            </li>
            
          )
        }
      </ul>

    </div>
  )
}

export default List;
