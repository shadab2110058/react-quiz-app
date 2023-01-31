import React, { useEffect, useState } from 'react'
import "./App.css"
import data from "./Data.js"
import useSound from 'use-sound'
import Result from './Result'
import Timer from './Timer'
import cor from "./sound/correct.mp3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [correctAns, setCorrectAns] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [className, setClassName] = useState("options");
  const [letsPlay] = useSound()


  const handleNext = () => {

    if (currentQuestion < data.length - 1) {
      setCurrentQuestion((currentQuestion + 1));
    }
    else {
      setShowResult(true);
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) 
    { setCurrentQuestion((currentQuestion - 1)); }
  }

  const handleAnswer = (ans) => {
    setClassName("options active")
    setSelectedAnswer(ans);
    if (ans.correct) {
      setScore(score + 4);
      setClassName("options correct");
      setCorrectAns(correctAns + 1);
      toast.success('Correct Answer');
    }
    else {
      setScore(score - 1);
      setClassName("options wrong");
      toast.error('Wrong Answer');
    }
  }

  const handleRestart = () => {
    setCorrectAns(0);
    setScore(0);
    setCurrentQuestion(0)
    setShowResult(false)
  }

  useEffect(() => {
    letsPlay(cor);
  }, [letsPlay])


  return (
    <>

      <div className='app'>

        {showResult ? (<Result score={score} correctAns={correctAns} handleRestart={handleRestart} />) : (
          <>
            <div className='top'>
              <div className='timer'><Timer setShowResult={setShowResult} /></div>
            </div>
            <div className='bottom'>
              <div className='questions'>{data[currentQuestion].question}</div>
              <div className='answers'>
                {data[currentQuestion].options.map((ans, i) => {
                  return <div className={selectedAnswer === ans ? className : "options"} key={i} onClick={() => handleAnswer(ans)}>
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
      <ToastContainer position='top-center' autoClose={1000} />
    </>
  )
}

export default Quiz
