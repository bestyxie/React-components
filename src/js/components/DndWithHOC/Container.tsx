import React from 'react'
import Item from './Item'

interface itemShap {
  text: string
  id: number
}

const items: itemShap[] = [
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

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    items: items,
  }

  moveItem = (dragIndex, hoverIndex) => {
    const { items } = this.state
    let dragItem = items[dragIndex]
    items[dragIndex] = items[hoverIndex]
    items[hoverIndex] = dragItem

    this.setState({ items })
  }

  render(): React.ReactNode {
    return (
      <div>
        {
          this.state.items.map((item, i) => {
            return <Item
              text={item.text}
              index={i}
              id={item.id}
              moveItem={this.moveItem}
              key={item.id}
            />
          })
        }
      </div>
    )
  }
}

export default Container