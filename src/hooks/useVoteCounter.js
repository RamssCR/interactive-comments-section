import { useState } from 'react'

/**
 * UseVoteCounter
 *
 * Hook que mantiene un contador y registra la última acción.
 * - `increment()` incrementa el contador y establece `lastAction` en 'inc'
 * - `decrement()` decrementa el contador y establece `lastAction` en 'dec'
 *
 * @param {number} [initialCount=0]
 * @returns {{ count: number, lastAction: ('inc'|'dec'|null), increment: () => void, decrement: () => void }}
 */
const useVoteCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount)

  /** @type {('inc'|'dec'|null)} */
  const [lastAction, setLastAction] = useState(null)

  const increment = () => {
    setCount((c) => c + 1)
    setLastAction('inc')
  }

  const decrement = () => {
    setCount((c) => c - 1)
    setLastAction('dec')
  }

  return { count, increment, decrement, lastAction }
}

export default useVoteCounter
