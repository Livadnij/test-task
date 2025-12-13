export const hasArrayItems = (arr: string[]| number[] | null | undefined): boolean => {
  if (!Array.isArray(arr)) return false
  return arr.length >= 1
}