const CommentForm = () => {
  return (
    <section className="flex fixed bottom-4 left-1/2 -translate-x-1/2  rounded-lg p-6 shadow-md w-[92%] md:w-[50%] bg-white h-55 md:h-35 z-50">
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-4">
        <img
          src="images/avatars/image-juliusomo.png"
          alt="Juliusomo"
          className="w-10 h-10 rounded-full"
        />

        <div className="w-full md:w-[80%] h-25 border-2 border-gray-100 rounded-lg mx-2">
          <input
            className="p-3 w-full rounded-lg focus:outline-none"
            type="text"
            placeholder="Add a comment..."
          />
        </div>

        <button
          type="button"
          className="bg-purple-600 text-white rounded-lg w-25 h-12 cursor-pointer hover:bg-purple-200 order-last md:order-0 font-semibold uppercase text-sm"
        >
          Send
        </button>
      </div>
    </section>
  )
}

export default CommentForm
