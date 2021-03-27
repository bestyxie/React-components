import React, { useRef, useEffect } from 'react'
import { DndProvider, useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import bricks from './mock'
import { bricksItemShape } from './types'

const TYPE = 'card'

interface Item {
  component: bricksItemShape
  parent: bricksItemShape[]
  index: number
}

interface BrickWrapperProps {
  component: bricksItemShape
  parent: bricksItemShape[]
  index: number
}

const BrickWrapper: React.FC<BrickWrapperProps> = ({ component, parent, index }): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ isDragging }, drag] = useDrag({
    type: TYPE,
    item: (): Item => ({
      component: component,
      parent: parent,
      index: index,
    }),
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    }),
  }, [component, parent, index])

  const [{ handleId }, drop] = useDrop({
    accept: TYPE,
    collect: (monitor: DropTargetMonitor) => ({
      handleId: monitor.getHandlerId(),
    }),
    hover: (item: Item, monitor: DropTargetMonitor) => {
      const {index: dragIndex, parent: dragParent} = item
      const {index: hoverIndex, parent: hoverParent} = monitor.getItem<Item>()
      if (dragParent !== hoverParent) {
        const dragItem = dragParent.splice(dragIndex, 1)[0]
        hoverParent.push(dragItem)
      }
      console.log('dragParent', dragParent)
      console.log('hoverParent', hoverParent)
    }
  })

  useEffect(() => {
    drag(drop(ref))
  }, [])

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} data-handler-id={handleId}>
      {
        component.component.render({
          children: component.children && component.children.map((child, index) => {
            return (
              <BrickWrapper component={child} parent={component.children} index={index} key={index} />
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
      <DndProvider backend={HTML5Backend}>
        {bricks.map((b, index) => (
          <BrickWrapper component={b} parent={bricks} index={index} key={index} />
        ))}
      </DndProvider>
    </div>
  )
}