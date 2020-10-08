import React, {useContext} from 'react';
import { ClockContext } from '../../contexts/ClockContext';

const ClockSettings = () => {
    const {clock, increaseNum,reduceNum} = useContext(ClockContext);
    return ( 
        <div className="flex-col">
            <ul>
            <li >
                <div className="flex-row" style={{justifyContent: "flex-start"}}>
                    <div className="icons flex-row">
                        <i className="fas fa-plus"  onClick={()=>increaseNum("exercise")}></i>
                        <i className="fas fa-minus"  onClick={()=>reduceNum("exercise")}></i>
                    </div>
                    <div className="flex-row clock-text" >Exercise =   
                        {clock.exerciseMin<10?(" 0" + clock.exerciseMin):clock.exerciseMin}:
                        {clock.exerciseSec<10?("0" + clock.exerciseSec):clock.exerciseSec} mins
                    </div>
                </div>  
            </li>
            <li >
                <div className="flex-row" style={{justifyContent: "flex-start"}}>
                    <div className="icons flex-row">
                        <i className="fas fa-plus"  onClick={()=>increaseNum("rest")}></i>
                        <i className="fas fa-minus"  onClick={()=>reduceNum("rest")}></i>
                    </div>
                    <div className="flex-row clock-text" >Resting = 
                        {clock.restMin<10?(" 0" + clock.restMin):clock.restMin}:
                        {clock.restSec<10?("0" + clock.restSec):clock.restSec} mins
                    </div>
                </div>  
            </li>
            <li >
                <div className="flex-row" style={{justifyContent: "flex-start"}}>
                    <div className="icons flex-row">
                        <i className="fas fa-plus" onClick={()=>increaseNum("rounds")}></i>
                        <i className="fas fa-minus"  onClick={()=>reduceNum("rounds")}></i>
                    </div>  
                    <div className="flex-row clock-text" > Rounds = {clock.nExercises} </div>
                </div>  
            </li>

            </ul>
        </div>
    );
}
 
export default ClockSettings;