import { useState } from "react"
import data from '../data'
const Form=({add})=>{
   const[title,settitle] =useState('')
   const [task,settask]=useState('')
   const [urgent,seturgent]=useState(false)

    const handelsubmit=(e)=>{
        e.preventDefault()
    const newItem={
        title,task,urgent,
        id:Math.random()*100,
        done:false
    }
    add(newItem);
        settitle('');
        settask('');
        seturgent(false)

    }
    const handlechange=(e)=>{


        let title=e.target.value
        //title=title.replace('.','-')
      settitle(title)

    }
    return(
        <>
         <form onSubmit={handelsubmit}>
            <input type='text'
             name='title'
             value={title}
             placeholder='Task...'
             required
             //onChange={(e)=>handlechange(e)}
             onChange={handlechange}

             />
            <select name="task"   required  value={task} 
             onChange={(e)=>{settask(e.target.value)}}>
                 <option value="select">select</option>
                { data.map((item,i)=>{
                    return   <option 
                    key={i} 
                     value={item.value}>
                        {item.label}
                        </option>
                })}
               
            </select>
            <input type="checkbox" name="urgent"  checked={urgent} 
             onChange={e=>{seturgent(e.target.checked)}} />
            <button type="submit"> Add</button>
         </form>
        </>
    )
}
export default Form