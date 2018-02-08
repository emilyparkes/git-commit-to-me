import React from 'react'
import {Link} from 'react-router-dom'

import request from 'superagent'

import LoveResult from './LoveResult'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fname: '',
      sname: '',
      percentage: '',
      result: ''
    }
    this.getLovePercentage = this.getLovePercentage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getLovePercentage () {
    this.props.callback(this.state.fname, this.state.sname)
    request
      .get(`https://love-calculator.p.mashape.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`)
      .set('X-Mashape-Key', 'pFxXBOWpOcmshn2bxBavtOparZrQp12vpZajsnxjT7EXRmViHZ')
      .set('Accept', 'application/json')
      .then(res =>
        this.setState({
          loveObj: res.body
        })
      )
  }

  render () {
    return (
      <div>
        <h1>Love Calculator</h1>
        <input placeholder='Name 1' name='fname' onChange={this.handleChange} value={this.state.fname} />
        <input placeholder='Name 1' name='sname' onChange={this.handleChange} value={this.state.sname} />
        {/* <Link to='/date' component={Date}>Choose your Date!</Link>
        <button type='button' onClick={this.getLovePercentage}>Load image</button>
        <LoveResult result={this.state.loveObj} /> */}
      </div>
    )
  }
}

