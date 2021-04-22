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
    children: [
      { component: box },
      { component: box },
      {
        component: box,
        children: [{ component: box }],
      }
    ]
  },
]

export default bricks