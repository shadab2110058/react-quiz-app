import React,{useEffect, useState} from 'react'


const Timer = () => {

    const [timer, setTimer] = useState(60);

    useEffect(()=>{
   const interval = setTimeout(()=>{
    setTimer((prev)=>prev-1);
   },1000)
})
  return timer
}

export default Timer
