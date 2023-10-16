import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addLike } from './likesSlice.jsx'

export default function LikeBtn() {
  const dispatch = useDispatch()
  const [localLikes, setLocalLikes] = useState(0)

  function runEvents() {
    setLocalLikes((prev) => prev + 1)
    dispatch(addLike())
  }

  return (
    <div className="LikeBtn">
      <span>post likes: {localLikes}</span>
      <button onClick={runEvents}>like</button>
    </div>
  )
}
