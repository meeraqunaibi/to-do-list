import React from 'react'
import List from '../List'
const View = ({items,onDelet,Done,pophandel}) => {
  return (
    <>
   {items.length?
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