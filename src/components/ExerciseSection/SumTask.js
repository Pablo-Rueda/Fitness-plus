import React, {useContext} from 'react';
import { ClockContext } from '../../contexts/ClockContext';
import {CounterContext} from "../../contexts/CounterContext"

const SumTask = ({tasks,removeTask}) => {
    const {copyClock} = useContext(ClockContext);
    const {counter, setCounter} = useContext(CounterContext);
    const handleClick = () =>{
        const newCounter = counter;
        newCounter[0].count += 1;
        newCounter[0].itemsDone.push(tasks[0].todo)
        removeTask(tasks[0].id);
        setCounter(newCounter);
        console.log(newCounter[0]);

    };
    return (copyClock.active && copyClock.type === 1) ?(
        <h1 className="center nextTask nextTask-hover" onClick={() => handleClick()}>{tasks[0].todo}</h1>   
     ):(
        <h1 className="center nextTask" style={{border:"2px solid red",color:"red"}}>{tasks[0].todo}</h1>
     );
}
 
export default SumTask;