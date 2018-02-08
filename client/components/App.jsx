import React from 'react'

import Date from './Date'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: [],
      activity: [],
      gift: []
    }
  }
  render () {
    return (
      <Date location={this.state.location} activity={this.state.activity} gift={this.state.gift} />
    )
  }
}

export default App
