import React from 'react'
import './PostContentWrapper.css'

const PostContentWrapper: React.SFC = props => (
  <div className="PostContentWrapper">{props.children}</div>
)

export default PostContentWrapper
