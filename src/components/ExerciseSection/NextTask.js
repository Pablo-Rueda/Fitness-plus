import React,{useContext} from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import SumTask from "./SumTask";

const NextTask = () => {
    const {tasks,removeTask} = useContext(TasksContext);
    return tasks.length ?(
        <div className="center flex-col" >
            <div className="center">
                <SumTask tasks={tasks} removeTask={removeTask}/>   
            </div>
        </div>
     ):(
        <div className="center flex-col" >
        <div className="center nextTask" style={{color:"yellowgreen"}}>
            <h1 className="center">No Tasks Left</h1>   
        </div>
    </div>
     );
}
 
export default NextTask;