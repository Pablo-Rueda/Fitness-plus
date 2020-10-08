import React, {createContext,useState} from 'react';

export const ClockContext = createContext();

const ClockContextProvider = (props) => {
    const [clock, setClock] = useState({
        exerciseMin: 3, 
        exerciseSec:0,
        restMin:1,
        restSec:0,
        nExercises:3,
        active:false,
        type: 1
    });
    const [copyClock, setCopyClock] = useState({
        exerciseMin: 3, 
        exerciseSec:0,
        restMin:1,
        restSec:0,
        nExercises:3,
        active:false,
        type: 0
    });
    const increaseNum = (type) => {
        let newNumClock = {...clock};
        switch(type){
            case "exercise":
                newNumClock["exerciseSec"] = newNumClock["exerciseSec"] + 1;
                if(newNumClock["exerciseSec"] === 60){
                    newNumClock["exerciseMin"] += 1;
                    newNumClock["exerciseSec"] = 0;
                }
                break;
            case "rest":
                newNumClock["restSec"] = newNumClock["restSec"] + 1;
                if(newNumClock["restSec"] === 60){
                    newNumClock["restMin"] += 1;
                    newNumClock["restSec"] = 0;
                }
                break;
            case "rounds":
                newNumClock["nExercises"] = newNumClock["nExercises"] + 1;
                break;
        }
        setClock(newNumClock);
        setCopyClock(newNumClock);
    };
    const reduceNum = (type) => {
        let newNumClock = {...clock};
        switch(type){
            case "exercise":
                if(newNumClock["exerciseMin"]>0 || newNumClock["exerciseSec"]>1){
                    newNumClock["exerciseSec"] = newNumClock["exerciseSec"] - 1;
                    if(newNumClock["exerciseSec"] < 0 ){
                        newNumClock["exerciseMin"] -= 1;
                        newNumClock["exerciseSec"] = 59;
                    }
                }
                break;
            case "rest":
                if(newNumClock["restMin"]>0 || newNumClock["restSec"]>1){
                    newNumClock["restSec"] = newNumClock["restSec"] - 1;
                    if(newNumClock["restSec"] < 0 ){
                        newNumClock["restMin"] -= 1;
                        newNumClock["restSec"] = 59;
                    }
                }
                break;
            case "rounds":
                if(newNumClock["nExercises"]>1){
                    newNumClock["nExercises"] = newNumClock["nExercises"] - 1;
                }
                break;
        }
        setClock(newNumClock);
        setCopyClock(newNumClock);   
    };

    const toggleClock = () =>{
        let toggleClock = {...copyClock};
        toggleClock.active = !toggleClock.active;
        setCopyClock(toggleClock);
    }

    const countDown = () => {
        let newNumClock = {...copyClock};
        let original = {...clock};
        
        switch(newNumClock.type){
            case 0:
                original.active = true;
                setCopyClock(original);
                break;
            case 1:
                if(newNumClock.exerciseSec === 0){
                    newNumClock.exerciseSec = 59;
                    newNumClock.exerciseMin -= 1;
                }else{
                    newNumClock.exerciseSec -= 1;
                }

                if(newNumClock.exerciseSec === 59 && newNumClock.exerciseMin === -1 && newNumClock.nExercises !== 0){
                    newNumClock.exerciseSec = original.exerciseSec;
                    newNumClock.exerciseMin = original.exerciseMin;
                    newNumClock.nExercises -= 1;
                    newNumClock.type = 2;
                } else if(newNumClock.exerciseSec === 0 && newNumClock.exerciseMin === 0 && newNumClock.nExercises === 0){
                    newNumClock.exerciseSec = original.exerciseSec;
                    newNumClock.exerciseMin = original.exerciseMin;
                    newNumClock.restSec = original.restSec;
                    newNumClock.restMin = original.restMin;
                    newNumClock.nExercises = original.nExercises;
                    newNumClock.type = 0;
                    newNumClock.active = false;
                }
                setCopyClock(newNumClock);
                break;
            case 2:
                if(newNumClock.restSec === 0){
                    newNumClock.restSec = 59;
                    newNumClock.restMin -= 1;
                }else{
                    newNumClock.restSec -= 1;
                }
                if(newNumClock.restSec === 59 && newNumClock.restMin === -1){
                    newNumClock.restSec = original.restSec;
                    newNumClock.restMin = original.restMin;
                    newNumClock.type = 1;
                } 
                setCopyClock(newNumClock);
                break;
            default:
                break;
        }
    };
    return ( 
    <ClockContext.Provider value={{clock,copyClock,increaseNum,reduceNum,toggleClock,countDown}} >
        {props.children} 
    </ClockContext.Provider>
     );
}
 
export default ClockContextProvider;