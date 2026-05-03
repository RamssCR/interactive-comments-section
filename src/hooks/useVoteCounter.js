import { useState } from 'react'

const useVoteCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount)
  const [lastAction, setLastAction] = useState(null)

  const increment = () => {
    setCount(count + 1)
    setLastAction('inc')
  }

  const decrement = () => {
    setCount(count - 1)
    setLastAction('dec')
  }

  return { count, increment, decrement, lastAction }
}

export default useVoteCounter
