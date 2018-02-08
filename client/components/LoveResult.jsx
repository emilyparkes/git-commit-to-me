import React from 'react'

const LoveResult = (props) => {
  return (
    <div>
      <h1>text</h1>
      <h3>{props.data.fname}</h3>
      <h3>{props.data.sname}</h3>
      <h3>{props.data.result}</h3>
      <h3>{props.data.percentage}</h3>
    </div>
  )
}

export default LoveResult
