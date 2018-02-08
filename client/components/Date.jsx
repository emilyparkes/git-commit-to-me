import React from 'react'
import {Link} from 'react-router-dom'

import LoveResult from './LoveResult'


class Date extends React.Component {
  render () {
    return (
      <div>
        <h1>Date</h1>
        <Link to='/result' component={LoveResult}>Get Result</Link>
      </div>
    )
  }
}

export default Date
