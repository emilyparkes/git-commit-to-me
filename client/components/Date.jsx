import React from 'react'
import {Link} from 'react-router-dom'

// import data 1, 2, 3

class Date extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: [],
      activity: [],
      gift: []
    }
  }

  // random fn 

  render () {
    return (
      <div>
        <div>
          <h1>Welcome to your dream date</h1>
        </div>
        <div>
          <h2>You are going to: </h2>
          <div>{this.state.location}</div>
          <h2>Your Valentines Day activity is: </h2>
          <div>{this.state.activity}</div>
          <h2>You have bought this for your Valentine: </h2>
          <div>{this.state.gift}</div>
        </div>
        <div>
          <Link to='/result'><button type='button'>Will it go well?</button></Link>
        </div>
      </div>
    )
  }
}

export default Date
