import React, { Component } from 'react'

class Clock extends Component {
    constructor () {
      super()
      this.state = {
        date:new Date()
      }
    }

    componentWillMount = () => {
      this.timer = setInterval(()=>{
        this.setState({
          date:new Date()
        })
      },1000)
    }

    componentWillUnmount = () => {
      clearInterval(this.timer)
    }

    render () {
      return (
        <div>
          <p>当前时间:{this.state.date.toLocaleTimeString()}</p>
        </div>
      )
    }
}

class IndexClock extends Component {

  constructor () {
    super()
    this.state = {
      isShow:true
    }
  }


  handleClick = () => {
    this.setState({
      isShow:!this.state.isShow
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>显示/隐藏</button>
        { this.state.isShow?<Clock />:null }
      </div>
    )
  }
}


export default IndexClock
