import React from 'react'
import {
  DragSource,
  ConnectDragSource,
  DragSourceSpec,
  DragSourceConnector,
  DragSourceMonitor,
  DropTarget,
  DropTargetSpec,
  DropTargetConnector,
  DropTargetMonitor,
  ConnectDropTarget
} from 'react-dnd'
import cls from 'classnames'
import './item.scss'

interface ItemDragObject {
  index: number
  id: string
}

interface ItemProps {
  text: string,
  index: number,
  id: number,
  classNames?: string,
  isDragging?: boolean
  connectDragSource?: ConnectDragSource
  connectDropTarget?: ConnectDropTarget
  isOver?: boolean
  isOverCurrent?: boolean
  canDrop?: boolean
  moveItem: (dragIndex: number, hoverIndex: number) => void
}

export const TYPE = 'item'

const itemSource: DragSourceSpec<ItemProps> = {
  beginDrag: (props: ItemProps, monitor, component): ItemDragObject => {
    return { id: props.text, index: props.index }
  },
}

const collectDragSource = (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const spec: DropTargetSpec<ItemProps> = {
  hover: (props: ItemProps, monitor: DropTargetMonitor, component) => {
    if (!component) return null
    const dragIndex = monitor.getItem<ItemDragObject>().index
    const hoverIndex = props.index
    props.moveItem(dragIndex, hoverIndex)
    monitor.getItem<ItemDragObject>().index = hoverIndex
  }
}

const collectDropTarget = (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
})

@DropTarget(TYPE, spec, collectDropTarget)
@DragSource(TYPE, itemSource, collectDragSource)
class Item extends React.Component<ItemProps> {
  constructor(props) {
    super(props)
  }
  render() {
    const { connectDragSource, classNames, isDragging, connectDropTarget } = this.props
    return connectDropTarget(connectDragSource(
      <span className={cls('item', classNames, { 'dragging': isDragging })}>{this.props.text}</span>
    ))
  }
}

export default Item