import React from 'react'
import LineItems from './LineItems'


const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (

    // props Drilling 

    <ul>
    {items.map((item) => (

        <LineItems
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />

    ))}

  </ul>

  )
}

export default ItemsList