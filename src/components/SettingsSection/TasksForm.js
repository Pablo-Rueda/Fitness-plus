import React, {useContext,useState} from 'react'
import {TasksContext} from "../../contexts/TasksContext"

const NewTaskForm = () => {
    useContext(TasksContext)
    const { addTask } = useContext(TasksContext);
    const [task, setTasks] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTasks("");
    };
    return ( 
    <form onSubmit={handleSubmit} className="flex-row" style={{paddingTop:"25px",paddingBottom:"25px"}}>

        <input className="inputText" type="text" placeholder="New exercise" value={task} 
        onChange={(e)=>setTasks(e.target.value)} required/>
        <div className="inputButton" style={{marginLeft:"50px"}}>
            <input  type="submit" value="Add" />
            <i className="fas fa-plus"></i>
        </div>    
        
    </form>
     );
}
 
export default NewTaskForm;
