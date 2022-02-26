import React from "react";
import Button from "./button";
import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap';

function Footer(){
  return(
    <div className="footer">
      <div className="right_text">
        <h3>Subscribe Our News Letter For More Update</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore</p>
      </div>

      <div className="left_text">
        <Form.Group classNameName="mb-3" controlId="formBasicEmail">

           <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button  message="Subscribe" />
      </div>
    </div>
  )
}
export default Footer;
