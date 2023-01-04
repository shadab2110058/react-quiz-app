import React,{useState} from 'react'
import "./App.css"
import data from "./Data.js"


const App = () => {

  const [ currentQuestion,setCurrentQuestion ] = useState(0)

    const handleNext = () =>{
      setCurrentQuestion((currentQuestion+1)%4);
    }

    const handlePrev = () =>{
      if(currentQuestion>0)
      {setCurrentQuestion((currentQuestion-1));}
    }
  


  return (
    <div className='app'>
      {/* <div className='container'> */}
      <div className='top'>
       timer
      </div>
      <div className='bottom'>
        <div className='questions'>{data[currentQuestion].question}</div>
        <div className='answers'>
          {data[currentQuestion].options.map((ans,i)=>{
        return <div className='options' key={i}>{ans.text}</div>
      })}
        </div>
        <div className='button'>  
        <div><button onClick={handlePrev}>prev</button></div>
        <div><button onClick={handleNext}>next</button></div>
        </div>
      </div>
      </div>
    
  )
}

export default App
