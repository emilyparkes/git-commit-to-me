import React from 'react'

const LoveResult = (props) => {
  return (
    <div>
      <h3>{props.result.fname}</h3>
      <h3>{props.result.sname}</h3>
      <h3>{props.result.result}</h3>
      <h3>{props.result.percentage}</h3>
    </div>
  )
}

export default LoveResult
