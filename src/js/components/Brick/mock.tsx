import { BrickShape, bricksItemShape } from './types'
import React from 'react'

const container: BrickShape = {
  name: 'container',
  id: 1,
  render: ({ children }) => {
    return (
      <div style={{ border: '1px solid #000' }}>
        container
        {children}
      </div>
    )
  }
}

const box: BrickShape = {
  name: 'box',
  id: 2,
  render: ({ children, text }) => {
    return (
      <div style={{ border: '1px solid #000', margin: '10px' }}>
        box
        {text}
        {children}
      </div>
    )
  }
}

const bricks: bricksItemShape[] = [
  {
    component: container,
    text: 'a',
    children: [
      { component: box, text: 'b' },
      { component: box, text: 'c' },
      {
        component: box,
        text: 'd',
        children: [{ component: box, text: 'e' }],
      }
    ]
  },
]

export default bricks