import React from 'react'
import Sound from 'react-sound'

const LoveResult = (props) => {
  return (
    <div className='body'>
    <Sound url='cheer.wav' playStatus={Sound.status.PLAYING} />
      <h1>Your results:</h1>
      <h3 className='text'>{props.data.fname}</h3>
      <h2> and </h2>
      <h3 className='text'>{props.data.sname}</h3>
      <h2>{props.data.percentage} % chance of succesful date </h2>
      <h2>{props.data.result}</h2>
    </div>
  )
}

export default LoveResult
