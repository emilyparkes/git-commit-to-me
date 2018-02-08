import React from 'react'

class Date extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: null
    }
  }

  render () {
    return (
      <div>
        <div>
          <h1>Welcome to your dream date</h1>
        </div>
        <div>
          <h2>You are going to: </h2>
          <div>{this.props.location}</div>
          <h2>Your Valentines Day activity is: </h2>
          <div>{this.props.activity}</div>
          <h2>You have bought this for your Valentine: </h2>
          <div>{this.props.gift}</div>
        </div>
        <div>
          <button type='button'
            onClick={Result}>Will it go well?</button>
        </div>
      </div>
    )
  }
}

export default Date
