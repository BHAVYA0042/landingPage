import React from "react";
import data from "./serviceData";
import Card from "./serviceCard";
import Button from "./button";


function Service(){
  function createCard(obj){
    console.log(obj.icon);
    return(
      <Card
        title={obj.title}
        content={obj.content}
        icon={obj.icon}
      />
    )
  }
  return(
    <div class="card_sec">
      <div class="card_heading">
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc
          consequat interdum varius.</p>

      </div>
      <div className="grid_box">
        {data.map(createCard)}
      </div>
      <Button message="All Services" />


    </div>
  );
}



export default Service;
