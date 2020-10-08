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
            <iframe title ={"Set your exercises"} src="https://giphy.com/embed/yuQR81qEAnvh3ywfHv" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="col card flex-col"> 
            <h3 className="center">Test your limits</h3>
            <iframe title ={"Test your limits"} src="https://giphy.com/embed/OVbzotwnVoupa" frameBorder="0" className="giphy-embed" allowFullScreen ></iframe>
          </div>
          <div className="col card flex-col"> 
            <h3 className="center">Beat yourself</h3>
            <iframe title ={"Beat yourself"} src="https://giphy.com/embed/2eN0NkCvhjxqo"  frameBorder="0" className="giphy-embed" allowFullScreen></iframe>  
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home