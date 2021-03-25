import React from 'react'

interface propsShap {
  children?: React.ReactElement[]
}

export interface BrickShape {
  name: string
  id: number
  render: (props: propsShap) => React.ReactElement
}

export interface bricksItemShape {
  component: BrickShape,
  children?: bricksItemShape[],
}