
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Instruction from './Instruction'
import Result from './Result'
import Timer from './Timer'
import Quiz from './Quiz'


const App = () => {

  return (
    <>
    
    <BrowserRouter>
      <Routes>      <Route path = "/react-quiz-app/" element={ <Instruction/>}/>
        <Route path = "/react-quiz-app/quiz" element={<Quiz/>}/>
       
      </Routes>
    </BrowserRouter>
   
   
    </>
  )

}

export default App
