import { useSelector } from 'react-redux'

export default function TotalLikes() {
  const likes = useSelector((state) => state.likes.amount)

  return (
    // the most useless thing I was able to think of
    <div className="TotalLikes">Total amount of likes: {likes}</div>
  )
}
