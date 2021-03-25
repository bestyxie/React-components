import React from 'react'
import bricks from './mock'
import { bricksItemShape } from './types'

interface BrickWrapperProps {
  component: bricksItemShape
}

const BrickWrapper: React.FC<BrickWrapperProps> = ({ component }): React.ReactElement => {
  return (
    <div>
      {
        component.component.render({
          children: component.children && component.children.map(child => {
            return (
              <BrickWrapper component={child} />
            )
          })
        })
      }
    </div>
  )
}

export default function Brick() {
  return (
    <div>
      {bricks.map(b => (
        <BrickWrapper component={b} />
      ))}
    </div>
  )
}