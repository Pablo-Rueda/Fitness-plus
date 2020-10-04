import React, {useContext} from 'react';
import { TasksContext } from '../../contexts/TasksContext';

const TaskItem = ({task}) => {
    const {removeTask} = useContext(TasksContext);
    return ( 
        <li >
            <div className="flex-row" style={{justifyContent: "flex-start"}}>
                <i className="fas fa-trash-alt" style={{paddingLeft:"50px"}} onClick={() => removeTask(task.id)}></i>
                <div className="flex-row" style={{paddingLeft:"100px"}}>{task.todo}</div>
            </div>

            
        </li>
     );
}
 
export default TaskItem;
