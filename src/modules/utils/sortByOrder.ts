// function to sort the pages by index
export const sortByOrder = (a: Page, b: Page) => {
  if (a.order < b.order) {
    return -1
  }
  if (a.order > b.order) {
    return 1
  }
  return 0
}
