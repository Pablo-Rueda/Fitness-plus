import React, {createContext,useState} from 'react';
export const CounterContext = createContext();
const CounterContextProvider = (props) => {
    const [counter, setCounter] = useState([
        {round:1, count:0,itemsDone:[]}
    ]);
    return ( 
    <CounterContext.Provider value={{counter,setCounter}} >
        {props.children} 
    </CounterContext.Provider>
     );
}
 
export default CounterContextProvider;