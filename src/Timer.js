import {useEffect, useState} from 'react'

const Timer = (props) => {

    const [timer, setTimer] = useState(120);

    useEffect(()=>{
      if(timer>0){
   setTimeout(()=>{
    setTimer((prev)=>prev-1);
   },1000)}
   else{
    props.setShowResult(true);
   }
  
})
  return timer
}

export default Timer
