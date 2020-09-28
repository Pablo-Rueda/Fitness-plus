import React, {createContext,useState} from 'react';

export const TasksContext = createContext();

const TasksContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {todo:"25 abs", id:1},
        {todo:"25 push-ups", id:2},
        {todo:"25 jumping", id:3},
        {todo:"25 jumping", id:4}
    ]);
    return ( 
        <TasksContext.Provider value={{tasks}} >
            {props.children} 
        </TasksContext.Provider>
     );
}

export default TasksContextProvider;