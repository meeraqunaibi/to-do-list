import React,{useEffect,useState} from 'react'
import List from '../List'

const View = ({items,onDelet,Done,pophandel,loading}) => {

  const [time, settime] = useState(new Date())

  const updatetime=()=>{
    settime(new Date()) 
    console.log(time) 
  }


 useEffect(() => {

   const interval=  setInterval( updatetime, 1000); 


   return () => {
        console.log('bye bye fff')
        clearInterval(interval)//to clean and stop time  after out opf components
   }
 }, [])
 
  
  
  return (
    <>
   {time.toLocaleString()}
   { loading?'loading....' :items.length?
    <List  
        items={items} 
        onDelet={onDelet}
         Done={Done}
         pophandel={pophandel}
          />:'no items Add'}
          </>
  )
}

export default View