import React from 'react'

import Item from './Item'

const List = ({ items,onDelet,Done,pophandel }) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <Item   item={item}
              onDelet={onDelet} 
              Done={Done} 
              key={item.id}
              pophandel={pophandel}
               />
           )
        })}
      </ul>
    </>
  )
}

export default List