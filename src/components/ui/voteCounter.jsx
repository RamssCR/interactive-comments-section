import useVoteCounter from '@hooks/useVoteCounter'

const VoteCounter = () => {
  const { count, increment, decrement, lastAction } = useVoteCounter(12)

  return (
    <div className="flex bg-grey-100 rounded-lg md:max-w-11">
      <div className="flex flex-row justify-evenly md:flex-col p-3 gap-3 md:gap-0.5 w-35 md:w-10">
        <button
          type="button"
          className="text-[20px] text-purple-200 hover:text-purple-600 cursor-pointer"
          onClick={increment}
          disabled={lastAction === 'inc'}
        >
          +
        </button>
        <span className="text-purple-600 font-bold text-md">{count}</span>
        <button
          type="button"
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
