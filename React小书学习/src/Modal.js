import React, { Component } from 'react'

class Header extends Component {
  
  componentWillUnmount = ()=>{
    console.log('componentWillUnmount')
  }
  render () {
    return (
      <h1>React小书</h1>
    )
  }
}


class Modal extends Component {
  constructor () {
    super()
    console.log('constructor')
    this.state={
      isShow:true
    }
  }

  componentWillMount = ()=>{
    console.log('componentWillMount')
  }

  componentDidMount = ()=>{
    console.log('componentDidMount')
  }



  handleShowOther = () =>{
    this.setState({
      isShow:!this.state.isShow
    })
  }

  render () {
    console.log('render')
    return (
      <div>
        <button className='title' onClick={this.handleShowOther}></button>
        {this.state.isShow?<Header />:null}
      </div>
    )
  }
}

export default Modal
