import React from 'react'

const List = ({items}) => {
  return (
    <>
        <ul>
        {items.map((item,index)=>{
            return(
             <li key={item.id}>
              <span>{item.title}</span>  
               <span>{item.task}</span> 
               <span>{item.urgent?'Urgent':'you can delay'}</span> 
               <button>Action</button>
              
             </li>)})}
             </ul>
    </>
  )
}

export default List