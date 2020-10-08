import React, {createContext,useState} from 'react';
import uuid from "uuid/v1";

export const TasksContext = createContext();

const TasksContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {todo:"30 Knee crunches", id:1},
        {todo:"30 Cross crunches", id:2},
        {todo:"20 Leg raises", id:3},
        {todo:"20 Cycling cross crunches", id:4}
    ]);
    const addTask = (todo) => {
        setTasks([...tasks,{todo, id: uuid() }]);
    };
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return ( 
        <TasksContext.Provider value={{tasks,addTask,removeTask}} >
            {props.children} 
        </TasksContext.Provider>
     );
}

export default TasksContextProvider;