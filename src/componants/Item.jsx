import React from 'react'
import deletIcon from '../../src/icons8.svg'
import doneicon from '../../src/done.svg'
import data from '../data'


const Item = ({item,Done,pophandel}) => {
  return (
    <>
   
    <li    className={item.urgent?'unr':null}
    >
     <span 
     style={{textDecoration:item.done?'line-through':'none'}} >
       {item.title}
       </span>
     <span style={{textDecoration:item.done?'line-through':'none'}}>
       {
       data.filter(cat => {
         return cat.value === item.task
       })[0]?.label
       }
       </span>
     <span>{item.urgent ? 'Urgent' : 'you can delay'}</span>
   <span> 
    <button onClick={()=>pophandel(item.id)}>
       <img src={deletIcon} width={30} />
     </button>
     <button  disabled={item.done}
     onClick={()=>Done(item.id)} >
       <img src={doneicon} width={30} />
     </button>
   </span>
  
   </li>

   </>
  )
}

export default Item