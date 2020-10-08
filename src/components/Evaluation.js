import React, {useContext} from 'react';
import RoundItem from './EvaluationSection/RoundItem';
import { CounterContext } from '../contexts/CounterContext'; 

const Evaluation = () => {
    const {counter} = useContext(CounterContext);
    return ( 
        <div className="evalSection vnav-content flex-col">
            <h1 className="center" style={{fontSize:"72px", textShadow:"1px 2px 2px black"}}> Your <span style ={{color: "greenyellow"}}>Results</span></h1>
                <div className="center">
                    {counter.slice(0).reverse().map( (round)=>{
                        return(<RoundItem round={round} key={round}/>)
                    })}
                </div>
        </div>
     );
}
 
export default Evaluation;