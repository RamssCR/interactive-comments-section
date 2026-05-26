import CommentItem from '@components/ui/CommentItem'
import data from '@data/data.json'

const Comments = () => {
  return (
    <main className="flex flex-col items-center gap-10 w-full">
      {data.comments.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
    </main>
  )
}

export default Comments
