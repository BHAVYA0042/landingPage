import React from "react";
import Button from "./button";

function Intro(){
  return(
    <div className="intro">
      <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <h1>We Are Consulting For Your Business Finances</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
        <Button message="Start Now"  />
      </div>
      <img class="dp" src="images/smiling-business-people-back-to-back-arms-crossed-54774729_prev_ui.png" alt="" />
    </div>
  );
}

export default Intro;
