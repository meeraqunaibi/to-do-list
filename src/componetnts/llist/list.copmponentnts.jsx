import './list.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Category_option from '../form/data';
import Popup from '../popup/popup.componetnt';
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
  const [isOpen, SetIsOpen] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const toggleSure = () => {
    console.log("hello")
    setIsSure(!isSure);
  }

  const toggleOpen = () => {
    console.log("hello")
    SetIsOpen(!isOpen);
  }

  function myFunction(id) {
    if (window.confirm("are you sure") === true) {
      props.onDelete(id);

    } else {

    }
    // <Popup onPopup={props.onPopup}></Popup>
    //    toggleOpen();
    //    if(isSure===true)
    //     {
    //      props.onDelete(id);
    //      toggleOpen();
    //     }


  }
  function compareFn(a) {
    if (a === true) {
      return a;
    }
  }
  return (
    <div className='items_list'>



      {/* {
        isOpen?(<Popup onPopup={toggleOpen} onSure={toggleSure}></Popup>):null
         } */}

      <h1>The Items List</h1>
      <div className='root'></div>
      {/* <ul>
            {
                props.items.map(item=><li>{item.title}-{item.category}-{item.urgent===true?("urgent:Urgent"):"urgent:NotUrgent"}</li>)
            }
          </ul> */}

      <ol className="list">

        {

          props.items.map((item, index) => (


            <li key={item.title + item.category + index} >
              <div style={

                item.category === "home" && item.urgent === true ? { backgroundColor: "#4C3A51", borderLeft: "12px solid green" }
                  : item.category === "home" && item.urgent === false ? { backgroundColor: "#4C3A51", borderLeft: "12px solid red" }
                    : item.category === "work" && item.urgent === true ? { backgroundColor: "#B25068", borderLeft: "12px solid green" }
                      : item.category === "work" && item.urgent === false ? { backgroundColor: "#B25068", borderLeft: "12px solid red" }
                        : item.category === "school" && item.urgent === true ? { backgroundColor: "#774360", borderLeft: "12px solid green" }
                          : item.category === "school" && item.urgent === false ? { backgroundColor: "#774360", borderLeft: "12px solid red" }
                            : null


              } className='Todo_card'>
                <div className='Todo_info'>
                  <h2 style={item.checked ? { textDecorationLine: "line-through" } : null} >{item.title}</h2>
                  <p style={item.checked ? { textDecorationLine: "line-through" } : null}>{item.category}</p>
                </div>

                <div className='Button_todo'>
                  <button onClick={
                    () => myFunction(item.id) /*()=>props.onDelete(item.id)*/} id='false'>&#10008;</button>
                  <button disabled={item.checked ? true : false} style={item.checked ? { pointerEvents: "mouse", cursor: "not-allowed", transform: "none" } : null} onClick={() => (props.onCheck(item.id))} id='true'>&#10003;</button>
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
