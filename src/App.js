import React,{useState} from 'react'
import "./App.css"
import data from "./Data.js"
import Result from './Result'


const App = () => {

  const [ currentQuestion,setCurrentQuestion ] = useState(0)
  const [ score,setScore ] = useState(0)
  const [ correctAns,setCorrectAns ] = useState(0)
  const [ selectedAnswer,setSelectedAnswer ] = useState(null)
  const [ showResult,setShowResult ] = useState(false)
  const [ className,setClassName ] = useState("options");


    const handleNext = () =>{
      if(currentQuestion<data.length-1)
      {
        setCurrentQuestion((currentQuestion+1));
      }
      else{
        setShowResult(true);
      }
    }

    const handlePrev = () =>{
      if(currentQuestion>0)
      {setCurrentQuestion((currentQuestion-1));}
    }

    const handleAnswer = (ans) =>{
      setClassName("options active")
      setSelectedAnswer(ans);
     

      if(ans.correct)
      {
         setScore(score+4);
         setClassName("options correct");
         setCorrectAns(correctAns+1);
      }
      else{
        setScore(score-1);
        setClassName("options wrong");
      }
     
    }

  return (

<div className='app'>
    {showResult?(<Result score={score} correctAns={correctAns}/>):( 
      <>
        <div className='top'>
          <div className='timer'>30</div>
          <div className='score'>Score <span>{score}</span></div>
          <div className='questionNumberText'>Question {correctAns} of {data.length}</div>
        </div>
        <div className='bottom'>
          <div className='questions'>{data[currentQuestion].question}</div>
          <div className='answers'>
            {data[currentQuestion].options.map((ans,i)=>{
          return <div className={selectedAnswer===ans ? className: "options"} key={i} onClick={()=>handleAnswer(ans)}>
          {ans.text}
            </div>
            
            
        })}
          </div>
          <div className='button'>  
          <div className='prev'><button onClick={handlePrev}>Prev</button></div>
          <div className='next'><button onClick={handleNext}>Next</button></div>
          
          </div>
        </div>
        
        </>
        )}
        </div>
      
  )
   
  
 
}

export default App
