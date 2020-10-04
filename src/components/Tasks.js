import React, {useContext} from 'react';
import NewTaskForm from './TasksSection/TasksForm';
import TasksList from './TasksSection/TasksList'; 
import { Link } from 'react-router-dom';
import { TasksContext } from '../contexts/TasksContext';

const Tasks = () => {
    const {tasks} = useContext(TasksContext);
    return tasks.length ? (
        <div className="tasksSection">
            <div className="vnav-content container flex-col">
                <div className="center card-list">
                    <div className="title">
                        <h1>EXERCISES</h1>
                        <h2> Please, input here the exercises you would like to realise</h2>
                    </div>
                    <div className="flex-col">
                        <TasksList /> 
                        <NewTaskForm />
                    <Link className="btn center" style={{marginBottom:"50px"}} to="/clock">Next</Link>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="tasksSection">
            <div className="vnav-content container flex-col">
                <div className="center card-list">
                    <div className="title">
                        <h1>EXERCISES</h1>
                        <h2> Please, input here the exercises you would like to realise</h2>
                    </div>
                    <div className="flex-col">
                    <h2 style={{marginTop:"25px", textShadow:"1px 1px black"}}> Add at least one task to continue</h2>
                        <TasksList /> 
                        <NewTaskForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Tasks;