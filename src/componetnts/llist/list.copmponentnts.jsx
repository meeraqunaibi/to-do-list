import './list.css';
import Category_option from '../form/data';
import { useState } from 'react';
/**
 * @param {{
 * items:{
 * title: event.target.title.value,
 * category : event.target.category.value,
 * urgent: event.target.urgent.checked,
 *}[]
 * }} props 
 */


function List(props) {
    const [deleteSure, setDeleteSure] = useState(false);
    function myFunction(id) {
        let text;
        if (window.confirm("are you sure") == true) {
            setDeleteSure(true);
            props.onDelete(id)
        } else {
            setDeleteSure(false);
        }
    }
    return (
        <div className='items_list'>
            <h1>The Items List</h1>
            {/* <ul>
            {
                props.items.map(item=><li>{item.title}-{item.category}-{item.urgent===true?("urgent:Urgent"):"urgent:NotUrgent"}</li>)
            }
          </ul> */}

            <ol className="list">

                {

                    props.items.map((item, index) => (
                        <li>
                            <div style={item.urgent ? { borderLeft: "12px solid green" } : { borderLeft: "12px solid red" }} className='Todo_card'>
                                <div className='Todo_info'>
                                    <h2 style={item.checked ? { textDecorationLine: "line-through" } : null} >{item.title}</h2>
                                    <p style={item.checked ? { textDecorationLine: "line-through" } : null}>{item.category}</p>
                                </div>

                                <div className='Button_todo'>
                                    <button onClick={
                                        () => myFunction(item.id) /*()=>props.onDelete(item.id)*/} id='false'>&#10008;</button>
                                    <button onClick={() => (props.onCheck(item.id))} id='true'>&#10003;</button>
                                </div>


                            </div>
                        </li>


                    ))
                }
            </ol>
        </div>
    )
}
export default List;
