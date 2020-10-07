import React, {createContext,useState} from 'react';

export const ClockContext = createContext();

const ClockContextProvider = (props) => {
    const [clock, setClock] = useState({
        exerciseMin: 0, 
        exerciseSec:5,
        restMin:0,
        restSec:3,
        nExercises:3,
        active:false,
        type: 1
    });
    const [copyClock, setCopyClock] = useState({
        exerciseMin: 0, 
        exerciseSec:0,
        restMin:0,
        restSec:0,
        nExercises:0,
        active:false,
        type: 0
    });
    const increaseNum = (increaseNum) => {
        let newNumClock = {...clock};
        newNumClock[increaseNum] = newNumClock[increaseNum] + 1;
        setClock(newNumClock);
        setCopyClock(newNumClock);
    };
    const reduceNum = (reduceNum) => {
        let newNumClock = {...clock};
        if(newNumClock[reduceNum]>0){
            newNumClock[reduceNum] = newNumClock[reduceNum] - 1;
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
                    newNumClock.type = 0;
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
                    newNumClock.active = false;
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