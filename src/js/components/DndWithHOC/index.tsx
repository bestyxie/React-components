import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from './Container'

export default class DNDTest extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
      </div>
    )
  }
}