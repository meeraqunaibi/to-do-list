import { useState } from "react";
import Alert from "../alert/alert.component";


/** 
 * @param {{
 * item: {
 *   id: number,
 *   title: string,
 *   isDone: boolean,
 *   category: string,
 *   urgent: string,
 * }
 * }} props
 */
const Item = (props) => {
    
  const { item } = props;

  return (
    <li
      className={`item ${item.urgent ? 'urgent' : ''}`}>
      <div
        className="data"
        style={{textDecoration: item.isDone?'line-through':'none'}}
      >    
        <h2>{item.title}</h2>
        <h3>{item.category}</h3>
      </div>
      <div className="action">
      <button onClick={()=>props.onDelete(item)}>🗑️</button>
      <button className={`${item.isDone ? 'done' : ''}`} onClick={()=> props.onFinish(item.id)} disabled={item.isDone}>✔️</button>
 
      </div>

    </li>
  );
};

export default Item;