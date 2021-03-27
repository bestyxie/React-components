import React, { useEffect, useRef } from 'react'
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import cls from 'classnames'
import { XYCoord } from 'dnd-core'
// import '../DndWithHOC/Item.scss'

const TYPE = 'item'

const Item: React.FC<itemPropsShap> = ({ text, index, id, moveItem }): React.ReactElement => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TYPE,
    item: (): ItemObject => ({ index, id }),
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [index])

  const [{ handlerId }, drop] = useDrop({
    accept: TYPE,
    hover: (item: ItemObject, monitor: DropTargetMonitor) => {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      console.log('item', item.id)
      moveItem(dragIndex, hoverIndex)

      item.index = hoverIndex
      console.log('change index')
    },
    collect: (monitor: DropTargetMonitor) => ({
      handlerId: monitor.getHandlerId()
    })
  })

  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    drag(drop(ref))
  })

  return (
    <div ref={ref} className={cls('item', { 'dragging': isDragging })} data-handler-id={handlerId}>{text}</div>
  )
}
export default Item