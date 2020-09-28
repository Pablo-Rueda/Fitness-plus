import React, {useContext}  from 'react';
import { TasksContext } from '../contexts/TasksContext';

const Tasks = () => {
    const {tasks} = useContext(TasksContext);
    return ( 
        <div className="section">
            <div className="vnav-content container flex-col">
                <div className="center tasks-list">
                    <div>
                        <h1>EXERCISES</h1>
                        <h2> Please, input here the exercises you would like to realise</h2>
                    </div>
                    <ul>
                {tasks.map(task => {
                    return(
                        <li key={task.id} >{task.todo}</li>
                    )
                })}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Tasks;