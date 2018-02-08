import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'

import locationData from './location.js'
import activityData from './activity.js'
import giftData from './gift.js'

class Date extends React.Component {
  render () {
    const location = locationData[Math.floor(Math.random() * locationData.length)]
    const activity = activityData[Math.floor(Math.random() * activityData.length)]
    const gift = giftData[Math.floor(Math.random() * giftData.length)]
    return (
      <div className='body'>
        <div>
          <h1>Welcome to your dream date</h1>
        </div>
        <div>
          <h2>You are going to: </h2>
          <div>{location}</div>
          <h2>Your Valentines Day activity is: </h2>
          <div>{activity}</div>
          <h2>Recommended gift for your Valentine: </h2>
          <div>{gift}</div>
        </div>
        <div>
          <Link to='/result'><button type='button'>Will it go well?</button></Link>
        </div>
      </div>
    )
  }
}

export default Date
