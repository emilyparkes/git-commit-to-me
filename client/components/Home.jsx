import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fname: '',
      sname: ''
    }
    this.triggerCallback = this.triggerCallback.bind(this)
    this.handleChangeFName = this.handleChangeFName.bind(this)
    this.handleChangeSName = this.handleChangeSName.bind(this)
  }

  handleChangeFName (e) {
    console.log(e.target.value)
    this.setState({
      fname: e.target.value
    })
  }

  handleChangeSName (e) {
    console.log(e.target.value)
    this.setState({
      sname: e.target.value
    })
  }

  triggerCallback () {
    console.log(this.state, this.state.sname)
    this.props.callback(this.state.fname, this.state.sname)
  }

  render () {
    return (
      <div className='body'>
        <h2>Please enter your names below:</h2>
        <div className='col-md-12 nameInputs'>
          <input placeholder='Your Name' name='fname' onChange={this.handleChangeFName} value={this.state.fname} />
          <input placeholder='Their Name' name='sname' onChange={this.handleChangeSName} value={this.state.sname} />
        </div>
        <div className='col-md-12 link'>
          <Link to='/date'><button type='button' onClick={this.triggerCallback}>Generate Date</button></Link>

        </div>
      </div>
    )
  }
}
