import React, { useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'

import LikeBtn from '../likes/likeBtn'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { Spinner } from '../../components/Spinner'

import { fetchPosts, selectAllPosts } from './postsSlice'

const PostExcerpt = ({ postData }) => {
  const post = postData.status ? postData.data : postData

  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <LikeBtn />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string

    const orderedPosts = posts
      .slice()
      .sort((a, b) =>
        b.status
          ? b.data.date.localCompare(a.date)
          : b.date.localeCompare(a.date)
      )

    content = orderedPosts.map((postData) => (
      <PostExcerpt key={postData.status ? postData.data.id : postData.id} postData={postData} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
