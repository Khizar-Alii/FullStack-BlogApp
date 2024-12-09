import React from 'react'
import styles from "../Styles/PostLists.module.css"
import PostListsItem from './PostListsItem'

const PostLists = () => {
  return (
    <div className={styles.postlists}>
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
      <PostListsItem />
    </div>
  )
}

export default PostLists
