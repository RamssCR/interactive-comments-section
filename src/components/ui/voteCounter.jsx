import useVoteCounter from '@hooks/useVoteCounter'
const VoteCounter = () => {
  const { count, increment, decrement, lastAction } = useVoteCounter(12)

  return (
    <div className="flex bg-grey-100 rounded-lg">
      <div className="flex flex-col p-4 gap-1">
        <button
          className="text-[20px] text-purple-200 hover:text-purple-600 cursor-pointer"
          onClick={increment}
          disabled={lastAction === 'inc'}
        >
          +
        </button>
        <span className="text-purple-600 font-bold text-md">{count}</span>
        <button
          className="text-[20px] text-purple-200 hover:text-purple-600 cursor-pointer"
          onClick={decrement}
          disabled={lastAction === 'dec'}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default VoteCounter
