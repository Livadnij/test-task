export const isNonEmptyString = (value: unknown): value is string => {
  if (typeof value !== 'string') return false
  return value.trim().length > 0
}
