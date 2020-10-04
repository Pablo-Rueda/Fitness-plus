import React, {useContext}  from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import TaskItem from "./TaskItem";


const TasksList = () => {
    const {tasks} = useContext(TasksContext);
    return ( 
        <div>
            <ul>
                {tasks.map(task => {
                    return(
                        <TaskItem task={task} key= {task.id} />
                    )
                })}
            </ul>
        </div>
     );
}
 
export default TasksList;