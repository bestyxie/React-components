import React, { useRef, useEffect } from 'react'
import { DndProvider, useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import bricks from './mock'
import { bricksItemShape } from './types'

const TYPE = 'card'

interface DragItem {
  component: bricksItemShape
}

interface BrickWrapperProps {
  component: bricksItemShape
}

const BrickWrapper: React.FC<BrickWrapperProps> = ({ component }): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ isDragging }, drag] = useDrag({
    type: TYPE,
    item: (): DragItem => ({
      component: component
    }),
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    }),
  })

  const [{ handleId }, drop] = useDrop({
    accept: TYPE,
    collect: (monitor: DropTargetMonitor) => ({
      handleId: monitor.getHandlerId(),
    }),
    hover: (item: DragItem, monitor: DropTargetMonitor) => {
      console.log(item)
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
              <BrickWrapper component={child} key={index} />
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
          <BrickWrapper component={b} key={index} />
        ))}
      </DndProvider>
    </div>
  )
}