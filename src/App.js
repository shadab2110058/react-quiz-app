
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Registration from './Registration'
import Instruction from './Instruction'
import Quiz from './Quiz'

const App = () => {

  return (
    <>
    
    <BrowserRouter>
      <Routes>      
        <Route path = "/react-quiz-app/" element={ <Registration/>}/>
        <Route path = "/react-quiz-app/instruction" element={ <Instruction/>}/>
        <Route path = "/react-quiz-app/quiz" element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
   
   
    </>
  )

}

export default App
