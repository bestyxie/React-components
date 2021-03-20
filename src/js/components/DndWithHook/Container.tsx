import React, { useState, useCallback } from 'react'
import Item from './Item'

interface itemShap {
  text: string
  id: number
}

const defaultItems: itemShap[] = [
  {
    text: 'a',
    id: 1,
  },
  {
    text: 'b',
    id: 2,
  },
  {
    text: 'c',
    id: 3,
  }
]

export default function Container(): React.ReactElement {
  const [items, setItems] = useState(defaultItems)

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      let dragItem = items[dragIndex]
      items.splice(dragIndex, 1, items[hoverIndex])
      items.splice(hoverIndex, 1, dragItem)

      setItems([...items])
    },
    [items]
  )

  return (
    <div>
      {
        items.map((item: itemShap, i: number) => {
          return <Item
            text={item.text}
            index={i}
            id={item.id}
            moveItem={moveItem}
            key={item.id}
          />
        })
      }
    </div>
  )
}
