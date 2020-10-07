import React from 'react';
import ClockWrapper from "./ExerciseSection/ClockWrapper"
import NextTask from "./ExerciseSection/NextTask"

const Exercise = () => {    
    return (
        <div className="exercSection flex-col">
            <div className="vnav-content container flex-col">
                <div className="center flex-col">
                    <ClockWrapper />
                    <NextTask />
                </div> 
            </div>
        </div>
        
     );
}
export default Exercise;