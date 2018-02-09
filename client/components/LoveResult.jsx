import React from 'react'

const LoveResult = (props) => {
  return (
    <div className='body'>
      <h1>Your results:</h1>
      <h3 className='text'>{props.data.fname}</h3>
      <h2> and </h2>
      <h3 className='text'>{props.data.sname}</h3>
      <h2>{props.data.percentage} % compatibility </h2>
      <h2>{props.data.result}</h2>
    </div>
  )
}

export default LoveResult
