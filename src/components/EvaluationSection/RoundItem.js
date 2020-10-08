import React from 'react';
const RoundItem = ({round}) => {

    return (
        <div className="card-list center" style={{minHeight:"200px"}}>
            <div className="title">
                <h1>ROUND {round.round}</h1>
                <h2> Total: {round.count} </h2>
            </div>
            <ul > {round.itemsDone.map(
                (item)=>{return(
                        <li className="list-text" > 
                            <div style={{marginLeft:"30px"}}> {item} </div>
                        </li>
                    )})}
            </ul>
        </div>
     );
}
 
export default RoundItem;