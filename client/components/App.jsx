import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import request from 'superagent'
import Home from './Home'
import Date from './Date'
import LoveResult from './LoveResult'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loveObj: {
        fname: '',
        sname: '',
        percentage: '',
        result: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.homeCallback = this.homeCallback.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  homeCallback (fname, sname) {
    request
      .get(`https://love-calculator.p.mashape.com/getPercentage?fname=${fname}&sname=${sname}`)
      .set('X-Mashape-Key', 'pFxXBOWpOcmshn2bxBavtOparZrQp12vpZajsnxjT7EXRmViHZ')
      .set('Accept', 'application/json')
      .then(res => {
        this.setState({
          loveObj: res.body
        })
      })
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() => <Home callback={this.homeCallback}/> }/>
          <Route exact path='/date' render={() => <Date />} />
          <Route path='/result' result={this.state.loveObj} render={() => <LoveResult data={this.state.loveObj} />} />
        </div>
      </Router>
    )
  }
}

export default App
