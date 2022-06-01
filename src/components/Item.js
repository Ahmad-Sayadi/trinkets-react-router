import React from 'react'
import { useParams } from 'react-router-dom'
import items from '../data'

function Item(props) {
  const { id } = useParams()

  const item = items.find((thing) => `${thing.id}` === id)
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <div>
        <p className="item-description">{item.description}</p>
      </div>
    </div>
  )
}

export default Item
