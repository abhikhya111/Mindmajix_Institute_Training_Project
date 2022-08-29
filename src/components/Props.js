import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';
import Ss5 from './ss5.png';
import Ss6 from './ss6.png';
import Ss8 from './ss8.png';
import Ss9 from './ss9.png';
import Ss10 from './ss10.png';

 function Props(props) {
  return (
    <div>

        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{props.title}</Nav.Link>
            <Nav.Link href="#link">{props.aboutText}</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container'>
        
   
    <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Components and Props</h1>
    <p>Components let you split the UI into independent, reusable pieces, and think 
        about each piece in isolation.</p>

    <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>Functional Components with Props</h3>
    <p>The simplest way to define a component is to write a JavaScript function:</p>
    <img src={Ss5} width="400px"/>

    <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>Class Components with Props</h3>
    <p>The above two components are equivalent from React’s point of view.</p>
    <img src={Ss6} width="500px"/>

    <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>Default Prop Values</h3>
    <p>You can define default values for your props by assigning to the special defaultProps 
    property:</p>

    <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>Composing Components</h3>
    <p>Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

    For example, we can create an App component that renders Welcome many times:</p>
    <img src={Ss8} width="500px"/>

    <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>Props are Read-Only</h3>
    <p>Whether you declare a component as a function or a class, it must never modify 
        its own props. Consider this sum function:</p>
    <img src={Ss9} width="330px"/>

    <p style={{paddingTop:"20px"}}>Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
    In contrast, this function is impure because it changes its own input:</p>
    <img src={Ss10} width="480px"/>
    <p style={{paddingTop:"20px"}}>React is pretty flexible but it has a single strict rule:

All React components must act like pure functions with respect to their props.</p>






    </div>
    </div>
  )
}

Props.propTypes = {
    title: PropTypes.string
  }

export default Props;
