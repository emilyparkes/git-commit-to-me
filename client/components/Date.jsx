import React from 'react'
import {Link} from 'react-router-dom'

import locationData from './location.js'
import activityData from './activity.js'
import giftData from './gift.js'

class Date extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: [],
      activity: [],
      gift: []
    }
  }

  randomiseLocation () {
    return _.sample(locationData)
  }

  randomiseActivity () {
    return _.sample(activityData)
  }

  randomiseGift () {
    return _.sample(giftData)
  }

  render () {
    return (
      <div className='body'>
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
