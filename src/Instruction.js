import React from 'react'
import "./Instruction.css"
import { useNavigate } from 'react-router-dom'

const Instruction = () => {

const navigate = useNavigate();
const goToQuiz=()=>{
  navigate('/react-quiz-app/quiz');                       

}

  return (
    <div className='instruction'>
        <div className="instructionContainer">
            <div className='heading'><h1>The instructions are as follows</h1></div>
            <p># The quiz contains the questions related to react only.</p>
            <p># The quiz contains 6 questions of 4 mark each</p>
            <p># You will be awarded 4 mark for each correct answer.</p>
            <p># 1 marks will be deducted for wrong answers.</p>
            <p># You can skip the Question</p>
            <button className='startQuiz' onClick={()=>goToQuiz()}>Start Quiz</button>
        </div>
    </div>
  )
}

export default Instruction
