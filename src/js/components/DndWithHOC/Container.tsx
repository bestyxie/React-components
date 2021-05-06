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
    let hoverItem = items.splice(hoverIndex, 1, dragItem)[0]
    items.splice(dragIndex, 1)
    items.splice(hoverIndex > dragIndex ? hoverIndex : hoverIndex + 1, 0, hoverItem)

    this.setState({ items: [...items] })
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