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
      <div>
        <h1>Love Calculator</h1>
        <div className='nameInputs'>
          <input placeholder='Name 1' name='fname' onChange={this.handleChangeFName} value={this.state.fname} />
          <input placeholder='Name 1' name='sname' onChange={this.handleChangeSName} value={this.state.sname} />
        </div>
        <div className='link'>
          <Link to='/date'><button type='button' onClick={this.triggerCallback}>Go to date</button></Link>

        </div>
      </div>
    )
  }
}
