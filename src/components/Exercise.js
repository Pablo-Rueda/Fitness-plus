import React from 'react';
import { Link } from 'react-router-dom';
import ClockWrapper from "./ExerciseSection/ClockWrapper"
import NextTask from "./ExerciseSection/NextTask"

const Exercise = () => {    
    return (
        <div className="exercSection flex-col">
            <div className="vnav-content container flex-col">
                <NextTask />
                <div className="center flex-col">
                    <ClockWrapper />                    
                </div>
            </div>
            <div className="center" style={{marginTop:"30px",marginBottom:"30px"}}> 
                <Link className="btn" style={{textAlign:"center",marginRight:"5px"}}to="/settings">Prev</Link>
                <Link className="btn " style={{textAlign:"center",marginLeft:"5px"}}to="/evaluation">Next</Link>
            </div>

        </div>
        
     );
}
export default Exercise;