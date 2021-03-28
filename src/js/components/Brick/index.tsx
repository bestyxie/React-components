import React, { useRef, useEffect, useMemo, useState, useCallback } from 'react'
import { DndProvider, useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import bricks from './mock'
import { bricksItemShape } from './types'
import { switchItem } from './util'

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
  moveItem: (dragParent: bricksItemShape[],
    dragIndex: number,
    hoverParent: bricksItemShape[],
    hoverIndex?: number) => void
}

const BrickWrapper: React.FC<BrickWrapperProps> = ({ component, parent, index, moveItem }): React.ReactElement => {
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

  const [{ handleId, isOverCurrent }, drop] = useDrop({
    accept: TYPE,
    collect: (monitor: DropTargetMonitor) => ({
      handleId: monitor.getHandlerId(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    hover: (item: Item, monitor: DropTargetMonitor) => {
      if (!monitor.isOver({ shallow: true })) return
      const { index: dragIndex, parent: dragParent } = item
      if (dragParent === parent) {
        moveItem(dragParent, dragIndex, parent, index)
        monitor.getItem<Item>().index = index
        return
      }
      moveItem(dragParent, dragIndex, parent)

      const draggingItem = monitor.getItem<Item>()
      draggingItem.index = parent.length
      draggingItem.parent = parent
    }
  }, [parent, moveItem])

  useEffect(() => {
    drag(drop(ref))
  }, [])

  const style = useMemo(() => ({
    opacity: isDragging ? 0 : 1,
    background: isOverCurrent ? 'green' : 'white'
  }), [isDragging, isOverCurrent])

  return (
    <div ref={ref} style={style} data-handler-id={handleId}>
      {
        component.component.render({
          children: component.children && component.children.map((child, index) => {
            return (
              <BrickWrapper
                component={child}
                parent={component.children}
                index={index}
                key={index}
                moveItem={moveItem}
              />
            )
          })
        })
      }
    </div>
  )
}

export default function Brick() {
  const [brickList, setBrickList] = useState(bricks)
  const moveItem = useCallback((dragParent, dragIndex, hoverParent, hoverIndex) => {
    if (!dragParent.length) return
    if (dragParent === hoverParent) {

    } else {
      const dragItem = dragParent.splice(dragIndex, 1)[0]
      hoverParent.push(dragItem)
    }
    console.log(brickList)
    setBrickList([...brickList])
  }, [brickList, setBrickList])
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {brickList.map((b, index) => (
          <BrickWrapper
            component={b}
            parent={brickList}
            index={index}
            key={index}
            moveItem={moveItem}
          />
        ))}
      </DndProvider>
    </div>
  )
}