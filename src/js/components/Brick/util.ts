export const switchItem = <T extends Array<any>>(arr: T, from: number, to: number): T => {
  if (!arr || arr.length === 0) return
  let targetItem = arr[from]

  if (to > from) {
    let hoverItem = arr.splice(to, 1, targetItem)[0]
    arr.splice(from, 1)
    arr.splice(to - 1, 0, hoverItem)
  } else {
    let hoverItem = arr.splice(to, 1, targetItem)[0]
    arr.splice(from, 1)
    arr.splice(from + 1, 0, hoverItem)
  }
  return arr
}