import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Registration.css"

const Registration = () => {
   const navigate = useNavigate();
    const goToInstruction = () =>{
        navigate("/react-quiz-app/instruction");
    }
  return (
    <div className='registrationForm'>
        <div>
      <form>
       <div className='formInput'> <input placeholder='Full Name'></input></div>
       <div className='formInput'><input placeholder='Student No.'></input></div>
       <div className='formInput'> <input placeholder='Email'></input></div>
       <button onClick={()=>{goToInstruction()}} className="registrationButton">Register</button>
      </form>
        </div>
    </div>
  )
}

export default Registration
