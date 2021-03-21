import React, { useState, useCallback } from 'react'
import Item from './Item'

interface itemShap {
  text: string
  id: number
}

const defaultItems: itemShap[] = [
  {
    text: 'a',
    id: 11,
  },
  {
    text: 'b',
    id: 12,
  },
  {
    text: 'c',
    id: 13,
  }
]

export default function Container(): React.ReactElement {
  const [items, setItems] = useState(defaultItems)

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      let dragItem = items[dragIndex]

      if (hoverIndex > dragIndex) {
        let hoverItem = items.splice(hoverIndex, 1, dragItem)[0]
        items.splice(dragIndex, 1)
        items.splice(hoverIndex - 1, 0, hoverItem)
      } else {
        let hoverItem = items.splice(hoverIndex, 1, dragItem)[0]
        items.splice(dragIndex, 1)
        items.splice(hoverIndex + 1, 0, hoverItem)
      }

      setItems([...items])
    },
    [items, setItems]
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
