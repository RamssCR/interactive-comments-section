import { describe, expect, test } from 'vitest'

describe('Example Test Suite', () => {
  test('successfully adds two numbers', () => {
    const sum = (a, b) => a + b
    expect(sum(2, 3)).toBe(5)
  })

  test('throws an error without crashing', () => {
    const throwError = () => {
      throw new Error('This is an error')
    }

    expect(throwError).toThrow('This is an error')
  })

  test('handles asynchronous code correctly', async () => {
    const fetchData = () => Promise.resolve('data')
    const data = await fetchData()
    expect(data).toBe('data')
  })
})
