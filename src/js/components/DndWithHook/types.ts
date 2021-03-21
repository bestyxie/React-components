
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