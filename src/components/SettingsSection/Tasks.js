import React, {useContext} from 'react';
import NewTaskForm from './TasksForm';
import TasksList from './TasksList'; 
import { Link } from 'react-router-dom';
import { TasksContext } from '../../contexts/TasksContext';

const Tasks = () => {
    const {tasks} = useContext(TasksContext);
    return tasks.length ? (
        <div className="flex-col">
            <TasksList /> 
            <NewTaskForm />
            <Link className="btn center" style={{marginBottom:"50px"}} to="/exercise">Start</Link>
        </div>
    ) : (
        <div className="flex-col">
            <h2 style={{marginTop:"25px", textShadow:"1px 1px black"}}> Add at least one task to continue</h2>
            <NewTaskForm />
        </div>
    );
}
 
export default Tasks;