import Replies from '@components/ui/Replies'
import ReplyButton from '@components/ui/ReplyButton'
import VoteCounter from '@components/ui/VoteCounter'
import { useState } from 'react'

const CommentItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="flex rounded-lg p-6 shadow-md w-[92%] md:w-[60%] bg-white">
      <div className="flex flex-col-reverse md:flex-row items-start gap-6 w-full">
        <div className="flex flex-row justify-between items-center w-full md:w-auto">
          <VoteCounter />
          <ReplyButton classes="md:hidden" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
            <img
              src={item.user.image.png}
              alt={item.user.username}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-purple-600">
              {item.user.username}
            </span>
            <span className="text-grey-500 text-sm">{item.createdAt}</span>
            <ReplyButton classes="hidden md:flex ml-auto" />
          </div>
          <p className="text-grey-500">{item.content}</p>
          <div className="flex flex-col mt-3">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-600 hover:text-purple-200 self-start font-medium cursor-pointer"
            >
              Show replies
            </button>
            {isOpen && <Replies comment={item} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommentItem
