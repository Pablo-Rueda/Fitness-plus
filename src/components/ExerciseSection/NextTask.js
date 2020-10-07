import React, {useContext} from 'react';
import { TasksContext } from '../../contexts/TasksContext';

const NextTask = () => {
    const {tasks,removeTask} = useContext(TasksContext);

    return tasks.length ?(
        <div className="center flex-col" >
            <div className="center nextTask nextTask-hover">
                <h1 className="center" onClick={() => removeTask(tasks[0].id)}>{tasks[0].todo}</h1>   
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