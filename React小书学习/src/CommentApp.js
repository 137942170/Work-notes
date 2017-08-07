import React, { Component } from 'react'
import CommentInput from './CommentInput.js'
import CommentList from './CommentList.js'
import Comment from './Comment.js'
import './index.css'

// 整体结构模块组件
class CommentApp extends Component {

  // 默认属性
  static defaultProps = {
    comments: []
  }
  // 初始化构造函数
  constructor () {
    super ();
    this.state = {
      comments:[]
    }
  }

  // 发送点击事件 传递输入内容
  handleSubmitComment = (comment) => {

    if(!comment) return
    if(!comment.username) {
      return alert('请输入用户名')
    }
    if(!comment.content) {
      return alert('请输入内容')
    }
    // 把获取到的数据放入state中，修改state的值
    this.state.comments.push(comment)
    this.setState({
      comments:this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}
export default CommentApp
