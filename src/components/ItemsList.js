import React from 'react'
import { Routes, Link } from 'react-router-dom'

import ItemCard from './ItemsCard'
import '../styles.css'

const ItemsList = (props) => {
  return (
    <div className="items-list-wrapper">
      {props.item.map((items) => {
        return (
          <div className="item-card" key={items.id}>
            <Link to={`/item/${items.id}`}>
              <img
                src={items.imageUrl}
                alt={items.name}
                className="item-list-image"
              />
              <p> Name {items.name}</p>

              <p> $ {items.price}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default ItemsList
