import React from 'react'
import data from './Data'
import "./Result.css"

const Result = (props) => {
  return (
    <div className='result'>
        <div className='resultContainer'>
            <div className='congratulationsText'><h1>Congratulations</h1></div>
            <div className='resutScore'><h2>Your Score is : { props.score }</h2></div>
            <div className='resutText'><h2>You attemped  { props.correctAns } correct Questions of {data.length} </h2></div>
        </div>
    </div>
  )
}

export default Result
