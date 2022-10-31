import React from 'react'
import deletIcon from '../../src/icons8.svg'
import returnIcon from '../../src/returnicon.svg'
const Condelet = ({delet,close}) => {
  return (
    <div  className='popup'  > 
       <h2>...Are you sure ...</h2>
       <div>
       <button onClick={delet}   >
    <img src={deletIcon} width={30} />
  </button>
  <button onClick={()=>{close(false)}}   >
    <img src={returnIcon} width={30} />
  </button>

       </div>
        
    </div>
     
    
   
  )
}

export default Condelet