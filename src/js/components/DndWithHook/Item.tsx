import React, { useRef } from 'react'
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import cls from 'classnames'
import '../DndWithHOC/Item.scss'

const TYPE = 'item'

interface itemPropsShap {
  text: string
  index: number
  id: number
  moveItem: (dragIndex: number, dropIndex: number) => void
}

interface ItemObject {
  index: number
  id: number
}

const Item: React.FC<itemPropsShap> = ({ text, index, id, moveItem }): React.ReactElement => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TYPE,
    item: (): ItemObject => ({ index, id }),
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  const [{ handlerId }, drop] = useDrop({
    accept: TYPE,
    hover: (item: ItemObject, monitor: DropTargetMonitor) => {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      moveItem(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
    collect: (monitor: DropTargetMonitor) => ({
      handlerId: monitor.getHandlerId()
    })
  })

  const ref = useRef<HTMLSpanElement>()
  drag(drop(ref))

  return (
    <span ref={ref} className={cls('item', { 'dragging': isDragging })} data-handler-id={handlerId}>{text}</span>
  )
}
export default Item