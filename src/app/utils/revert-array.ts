export const revertArray = (array: any[]) => {
  const arrayReverted: any[] = []

  array.map(item => arrayReverted.splice(0, 0, item))

  return arrayReverted
}
