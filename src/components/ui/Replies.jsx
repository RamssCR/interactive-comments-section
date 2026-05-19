const Replies = ({ comment }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {!comment.replies.length && (
        <p className="text-grey-500 text-sm">
          Este comentario no tiene respuestas.
        </p>
      )}
      {comment.replies.map((item) => (
        <section key={item.id}>
          <div className="flex items-center">
            <div className="flex flex-col w-full bg-background p-10 rounded-lg">
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
              </div>
              <p className="text-grey-500">{item.content}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Replies
