import React, {useContext, useEffect } from 'react';
import { ClockContext } from '../../contexts/ClockContext';
import { CounterContext } from '../../contexts/CounterContext'; 

const ClockWrapper = () => {
    const {copyClock,toggleClock,countDown} = useContext(ClockContext);
    const {counter,setCounter} = useContext(CounterContext);

    useEffect(() => { // implement timer countdown with useEffect hook
        if(copyClock.active){  // active
            const timer = setInterval(() => {
                countDown();
                if(copyClock.exerciseMin === 0 && copyClock.exerciseSec === 0){
                    const copyCounter = [...counter];
                    copyCounter.unshift({round:(counter[0].round + 1), count:0,itemsDone:[] });
                    setCounter(copyCounter);
                    console.log(copyCounter);
                }
            }, 1000);
            return () => clearInterval(timer);

        }else{   // stop = active: false
            const timer = [];
            return () => clearInterval(timer);
        }

    },[copyClock])
    
    const exerciseCountdown =(  
        <div className="circle center flex-col">
            <h1 style={{color:"greenyellow"}}>Exercise</h1>
            <h1 className="clock-nums"> 
                {(copyClock.exerciseMin<10)?"0" + copyClock.exerciseMin:copyClock.exerciseMin}:
                {(copyClock.exerciseSec<10)? "0" + copyClock.exerciseSec:copyClock.exerciseSec}
            </h1>         
            <button className="btn" onClick={toggleClock}>{copyClock.active?"STOP":"PLAY"}</button> 
        </div>  );

    const restCountdown =( 
        <div className="circle center flex-col" style={{border: "5px solid red", boxShadow: "0px 0px 10px red"}}>
            <h1 style={{color:"red"}}>Rest</h1>    
            <h1 className="clock-nums"> 
                {(copyClock.restMin<10)?"0" + copyClock.restMin:copyClock.restMin}:
                {(copyClock.restSec<10)? "0" + copyClock.restSec:copyClock.restSec}
            </h1> 
            <button className="btn red" onClick={toggleClock}>{copyClock.active?"STOP":"PLAY"}</button> 
        </div> );

    return (
         <div>{(copyClock.type === 2)?restCountdown:exerciseCountdown}</div>
    );
}
 
export default ClockWrapper;