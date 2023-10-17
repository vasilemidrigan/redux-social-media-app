import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postsSlice.jsx'
import likesReducer from '../features/likes/likesSlice.jsx'
import usersReducer from '../features/users/usersSlice.jsx'

export default configureStore({
  reducer: {
    posts: postReducer,
    likes: likesReducer,
    users: usersReducer,
  },
})
