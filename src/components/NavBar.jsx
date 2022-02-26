import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';

function Navigate(){
  return(
    <div>
      <Navbar className="top_bar" bg="light" variant="light" sticky="top" expand="md" collapseOnSelect>
         <Navbar.Brand className="logo">
           <div className="square"></div>
            Bisnes
         </Navbar.Brand>

         <Navbar.Toggle className="coloring" />
         <Navbar.Collapse className="tabs">
           <Nav >
             <Nav.Link href="#blog">Home</Nav.Link>
             <Nav.Link href="#about-us">About</Nav.Link>
             <Nav.Link href="#contact-us">Project</Nav.Link>
             <Nav.Link href="#blog">Blog</Nav.Link>
             <Nav.Link href="#about-us">Services</Nav.Link>
             <Nav.Link href="#contact-us">Contact </Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
     </div>
  );
}



export default Navigate;
