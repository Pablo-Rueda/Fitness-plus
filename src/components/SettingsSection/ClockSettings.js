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
                        <i className="fas fa-plus"  onClick={()=>increaseNum("exerciseMin")}></i>
                        <i className="fas fa-minus"  onClick={()=>reduceNum("exerciseMin")}></i>
                    </div>
                    <div className="flex-row clock-text" >Exercise: {clock.exerciseMin}:00 mins</div>
                </div>  
            </li>
            <li >
                <div className="flex-row" style={{justifyContent: "flex-start"}}>
                    <div className="icons flex-row">
                        <i className="fas fa-plus"  onClick={()=>increaseNum("restMin")}></i>
                        <i className="fas fa-minus"  onClick={()=>reduceNum("restMin")}></i>
                    </div>
                    <div className="flex-row clock-text" >Resting: {clock.restMin}:00 mins</div>

                </div>  
            </li>
            <li >
                <div className="flex-row" style={{justifyContent: "flex-start"}}>
                    <div className="icons flex-row">
                        <i className="fas fa-plus" onClick={()=>increaseNum("nExercises")}></i>
                        <i className="fas fa-minus"  onClick={()=>reduceNum("nExercises")}></i>
                    </div>  
                    <div className="flex-row clock-text" > Routines: {clock.nExercises} repetitions</div>
                </div>  
            </li>

            </ul>
        </div>
    );
}
 
export default ClockSettings;