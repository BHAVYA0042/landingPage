import React from "react";

function Card(props){


  return(
    <div className="card">
      <div className="crown">
        <img src={props.icon} />
      </div>
      <div className="card_content">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>


    </div>
  );
}

export default Card;
