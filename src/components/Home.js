import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="Home ">
      <div className="vnav-content container flex-col">
        <h1 className="center" style={{paddingTop: "5vh",paddingBottom: "5vh", textShadow:"1px 1px 1px black"}}>Your <span style ={{color: "greenyellow"}}>fitness</span> App</h1>
        <div className="center">
        <Link className="btn" to="/settings">Try it</Link>
        </div>
        <div className="flex-row toCol" style={{paddingTop: "30px"}}>
          <div className="col card flex-col container">
            <h3 className="center">Set your exercises</h3>
            <p style={{fontSize:"20px",padding:"0px 15px"}}> Set which exercises you would like to realise, in how many rounds, the duration of the rounds and the rest time</p>
          </div>
          <div className="col card flex-col"> 
            <h3 className="center">Test your limits</h3>
            <iframe title ={"Beat yourself"} src="https://giphy.com/embed/2eN0NkCvhjxqo"  frameBorder="0" className="giphy-embed" allowFullScreen></iframe>  
          </div>
          <div className="col card flex-col"> 
            <h3 className="center">Beat yourself</h3>
            <p style={{fontSize:"20px",padding:"0px 15px"}}> See your results per round, the number of exercises you did and which ones you completed per round</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home