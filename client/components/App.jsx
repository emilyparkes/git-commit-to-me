import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Date from './Date'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fname: '',
      sname: '',
      percentage: '',
      result: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.homeCallback = this.
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  homeCallback (fname, sname, percentage, result) {
    this.setState({
      fname: fname,
      sname: sname,
      percentage: percentage,
      result: result,
    })
  }

  render () {
    return (
      <Router>
        <div>
          <h1>Love Calculator</h1>
          <Route exact path='/' render={() => <Home callback={homeCallback}/> }/>
          <Route exact path='/date' render={() => <Date />} />
          <Route exact path='/result' render={() => <Result/>} />
        </div>
      </Router>
    )
  }
}
