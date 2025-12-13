import { describe, it, expect } from 'vitest'
import { isNonEmptyString } from '../app/helpers/string.helper'

describe('Helpers: isNonEmptyString', () => {
  it('returns false for non-strings', () => {
    expect(isNonEmptyString(null)).toBe(false)
    expect(isNonEmptyString(undefined)).toBe(false)
    expect(isNonEmptyString(123)).toBe(false)
    expect(isNonEmptyString({})).toBe(false)
  })

  it('returns false for empty or whitespace strings', () => {
    expect(isNonEmptyString('')).toBe(false)
    expect(isNonEmptyString('   ')).toBe(false)
  })

  it('returns true for non-empty strings', () => {
    expect(isNonEmptyString('hello')).toBe(true)
    expect(isNonEmptyString('  hi ')).toBe(true)
  })
})
