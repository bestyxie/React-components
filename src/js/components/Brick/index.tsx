import React, { useRef, useEffect, useMemo, useState, useCallback } from 'react'
import { DndProvider, useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import bricks from './mock'
import { bricksItemShape } from './types'
import { switchItem } from './util'
import _ from 'lodash'

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
    hover: _.debounce((item: Item, monitor: DropTargetMonitor) => {
      if (!ref.current || !monitor.isOver({ shallow: true })) return

      const hoverIndex = index
      const hoverParent = parent
      const { index: dragIndex, parent: dragParent } = item

      if (dragParent === hoverParent && dragIndex === hoverIndex) return

      if (dragParent === hoverParent) {
        moveItem(dragParent, dragIndex, hoverParent, hoverIndex)
        item.index = hoverIndex
        return
      }

      // moveItem(dragParent, dragIndex, parent)

      // item.index = hoverParent.length - 1
      // item.parent = hoverParent
    }, 10)
  }, [parent, moveItem])

  useEffect(() => {
    drag(drop(ref))
  }, [])

  const style = useMemo(() => ({
    opacity: isDragging ? 0.5 : 1,
    background: isOverCurrent ? 'green' : 'white'
  }), [isDragging, isOverCurrent])

  return (
    <div ref={ref} style={style} data-handler-id={handleId}>
      {
        component.component.render({
          text: component.text,
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
    if (dragParent === hoverParent && Array.isArray(dragParent)) {
      switchItem(dragParent, dragIndex, hoverIndex)
    } else {
      const dragItem = dragParent.splice(dragIndex, 1)[0]
      hoverParent.push(dragItem)
    }
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