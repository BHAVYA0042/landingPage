import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


function Bar(){
  return(
    <div className="upperBar">
    <div className= "left_content">
      <ul>
        <li><AccessTimeIcon /></li>
        <p>We are open 24/7</p>
        <em>|</em>
        <li><MailIcon /></li>
        <p> mail.gmail.com </p>
      </ul>
    </div>
    <div className= "right_content">
      <ul>
        <li><TwitterIcon /></li>
        <li><LinkedInIcon /></li>
        <li><FacebookOutlinedIcon /></li>
      </ul>

    </div>

    </div>
  );
}



export default Bar;
