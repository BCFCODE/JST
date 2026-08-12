import { formatArgsForDisplay, J } from "../../../utils"

export const insertDescription = (values) => {
  const insertText = values.map((value) =>
    `\n\tmyHeap.insert(${JSON.stringify(value)})`
  ).join``
  return `\n\tlet myHeap = new Heap()${insertText}`
}