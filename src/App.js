import React,{useState} from 'react'
import "./App.css"
import data from "./Data.js"
import Result from './Result'


const App = () => {

 
  const [ currentQuestion,setCurrentQuestion ] = useState(0)
  const [ score,setScore ] = useState(0)
  const [ correctAns,setCorrectAns ] = useState(0)

    const handleNext = () =>{
      setCurrentQuestion((currentQuestion+1)%4);
    }

    const handlePrev = () =>{
      if(currentQuestion>0)
      {setCurrentQuestion((currentQuestion-1));}
    }

    const handleAnswer = (correct) =>{
      if(correct)
      {
         setScore(score+4);
         setCorrectAns(correctAns+1);
      }
      else{
        setScore(score-1);
      }
     
    }

  return (
    <>
    <div className='app'>
      <div className='top'>
        <div className='timer'>30</div>
        <div className='score'>Score <span>{score}</span></div>
        <div className='questionNumberText'>Question {correctAns} of {data.length}</div>
      </div>
      <div className='bottom'>
        <div className='questions'>{data[currentQuestion].question}</div>
        <div className='answers'>
          {data[currentQuestion].options.map((ans,i)=>{
        return <div className='options' key={i} onClick={()=>handleAnswer(ans.correct)}>{ans.text}</div>
      })}
        </div>
        <div className='button'>  
        <div><button onClick={handlePrev}>prev</button></div>
        <div><button onClick={handleNext}>next</button></div>
        </div>
      </div>
      
      </div>
    <div><Result score={score} correctAns={correctAns} /></div>
    </>
  )
 
}

export default App
