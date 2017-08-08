
import React, { Component } from 'react'

class Input extends Component {
  handleInput=(e)=>{
    this.props.setNum(e.target.value);
  }
  render () {
    return (
      <div>
        <input type='number' onChange={this.handleInput}  />
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {

    const num =this.props.num*100;
    const percent = num.toFixed(2);
    return (
      <div>
        {percent}%
      </div>
    )
  }
}

class PercentageApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num:0
    }
  }

  handleInput= (val)=> {
    this.setState({num: val} );
  }

  render () {
    return (
      <div>
        <Input setNum={this.handleInput}/>
        <PercentageShower num={this.state.num}/>
      </div>
    )
  }
}

export default PercentageApp
