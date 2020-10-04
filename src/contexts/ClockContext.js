import React, {createContext,useState} from 'react';

export const ClockContext = createContext();

const ClockContextProvider = (props) => {
    const [time, setTime] = useState([
        {exerciseMin: 3,exerciseSec: 0 },
        {restMin:1, restSec:0 },
        
    ]);
    const addTask = (todo) => {
        setTasks([...tasks,{todo, id: uuid() }]);
    };

    return (  );
}
 
export default ClockContextProvider;