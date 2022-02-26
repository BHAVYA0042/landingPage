import React from "react";
import Button from "./button";
import SettingsIcon from '@mui/icons-material/Settings';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import AppleIcon from '@mui/icons-material/Apple';
import HandymanIcon from '@mui/icons-material/Handyman';

function Mid(){

  return(
    <div className="mid">
      <div className="mid_box">
        <div className="mid_text">
          <h2>We Have Many Year Experience in Consultent Business</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Egestas purus viverra accumsan in nisl nisi scelerisque</p>
          <Button message="Know More" />
        </div>

        <div className="mid_image">
          <div className="object">
              <div className="circle">
                <div className="triangle">
                </div>
              </div>
          </div>
          <img src="images/business-women-collaborate-collaboration-cooperation.jpg" alt="" />
        </div>
      </div>


      <div class="icon_line">
          <li className="services">
            <SettingsIcon className="service_icon"/>
            <p><em>Construct</em>ion</p>
          </li>
          <li className="services">
            <WbCloudyIcon className="service_icon"/>
            <p><em>Dummy</em> Logo</p>
          </li>
          <li className="services">
            <AppleIcon className="service_icon"/>
            <p>Random <em>Logo</em></p>
          </li>
          <li className="services">
            <HandymanIcon className="service_icon"/>
            <p>Random <em>Brand</em></p>
          </li>
      </div>


    </div>
  );
}

export default Mid;
