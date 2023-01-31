
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
        <Route path = "/" element={ <Registration/>}/>
        <Route path = "/instruction" element={ <Instruction/>}/>
        <Route path = "/quiz" element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
   
   
    </>
  )

}

export default App
