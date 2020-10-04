import React from 'react';
import taskImg from "../images/tasksSection.PNG";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="Home ">
      <div className="vnav-content container flex-col">
        <h1 className="center" style={{paddingTop: "5vh", textShadow:"1px 1px 1px black"}}>Your <span style ={{color: "greenyellow"}}>fitness</span> App</h1>
        <div className="center">
        <Link className="btn" to="/tasks">Try it</Link>
        </div>
        <div className="flex-row" style={{paddingTop: "30px"}}>
          <div className="col card flex-col container">
            <h3 className="center">Set your exercises</h3>
            <img src={taskImg} className="card-img" alt="Set exercises section" />
          </div>
          <div className="col card flex-col"> 
            <h3 className="center">Set your time</h3>
          </div>
          <div className="col card flex-col"> 
            <h3 className="center">Test your limit</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home