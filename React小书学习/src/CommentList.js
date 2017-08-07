import React, { Component } from 'react'
import  Comment  from './Comment.js'

// 评论区列表组件
class CommentList extends Component {
  render() {
    return (
      <div>
          {this.props.comments.map((comment,i)=>{
            return (
              <Comment comment={comment} key={i} />
            )
          })}
      </div>
    )
  }
}
export default CommentList
