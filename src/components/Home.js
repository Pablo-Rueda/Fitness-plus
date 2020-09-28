import React from 'react';

const Home = () => {
  return (
    <div className="Home ">
      <div className="vnav-content container flex-col">
        <h1 className="center" style={{paddingTop: "5vh", textShadow:"1px 1px 1px black"}}>Your <span style ={{color: "greenyellow"}}>fitness</span> App</h1>
        <div className="center">
        <button className="btn">Try it</button>
        </div>
        <div className="flex-row" style={{paddingTop: "30px"}}>
          <div className="col card flex-col container">
            <h2 className="center">rada rada rada</h2>
            <p>Here it would go the info about the App</p>
          </div>
          <div className="col card flex-col"> 
            <h3 className="center">rada rada rada</h3>
          </div>
          <div className="col card flex-col"> 
            <h4 className="center">rada rada rada</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home