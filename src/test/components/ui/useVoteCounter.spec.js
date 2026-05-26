import { act, renderHook } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import useVoteCounter from '@hooks/useVoteCounter'

describe('useVoteCounter', () => {
  test('debe usar 0 como valor inicial por defecto', () => {
    const { result } = renderHook(() => useVoteCounter())

    expect(result.current.count).toBe(0)
    expect(result.current.lastAction).toBe(null)
  })

  test('debe inicializar con el valor proporcionado', () => {
    const { result } = renderHook(() => useVoteCounter(12))

    expect(result.current.count).toBe(12)
  })

  test('debe incrementar el contador y actualizar lastAction', () => {
    const { result } = renderHook(() => useVoteCounter(10))

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(11)
    expect(result.current.lastAction).toBe('inc')
  })

  test('debe decrementar el contador y actualizar lastAction', () => {
    const { result } = renderHook(() => useVoteCounter(10))

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(9)
    expect(result.current.lastAction).toBe('dec')
  })
})
