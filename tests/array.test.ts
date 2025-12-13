import { describe, it, expect } from 'vitest'
import {hasArrayItems} from "../app/helpers/array.helper"

describe('Helpers: hasArrayItems', () => {
  it('returns false for null or undefined', () => {
    expect(hasArrayItems(null)).toBe(false)
    expect(hasArrayItems(undefined)).toBe(false)
  })
 
  it('returns false for empty array', () => {
    expect(hasArrayItems([])).toBe(false)
  })

  it('returns true for array with items', () => {
    expect(hasArrayItems(['apple'])).toBe(true)
    expect(hasArrayItems([1, 2, 3])).toBe(true)
  })
})