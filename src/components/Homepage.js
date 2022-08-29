import React from 'react'
import Background from './backimg.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Homepage.css';
import Nav from 'react-bootstrap/Nav';

export default function Homepage() {

  return (
   
    <div>
      <h1 style={{textAlign:"center",backgroundColor:"cyan"}}>Learn how to include React Bootstrap in your project.</h1>
    <div className='container'>
      <img src={Background} width="100%" height="80%"/>
    </div>  
    
    <h3 style={{marginTop:"20px",textAlign:"center"}}>Getting Started</h3>
     {/* Bootstrap Card 1 for installation starts */}
     <div className="cardBody">
      <div className='cardContent'>
    <Card style={{ width: '18rem',margin:"20px" }} className="cardColor">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Installation</Card.Title>
        <Card.Text>
        The best way to consume React-Bootstrap is via the npm package which you can install...
        </Card.Text>
        <Button variant="success" ><Nav.Link href="/install">Read more</Nav.Link></Button>
        
      </Card.Body>
    </Card>
    </div>
    {/* Bootstrap Card 1 Ends */}
     {/* Bootstrap Card 2 starts */}
     <div className='cardContent'>

     <Card style={{ width: '18rem',margin:"20px" }} className="cardColor">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Create a new React App</Card.Title>
        <Card.Text>
        Create React App is a comfortable environment for learning React  and is the best...
        </Card.Text>
        <Button variant="success" ><Nav.Link href="/createApp">Read more</Nav.Link></Button>
      </Card.Body>
    </Card>
    </div>
    {/* Bootstrap Card 2 Ends */}
     {/* Bootstrap Card 3 starts */}
     <div className='cardContent'>
     <Card style={{ width: '18rem',margin:"20px" }} className="cardColor">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Importing Components</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" ><Nav.Link href="/components">Read more</Nav.Link></Button>
      </Card.Body>
    </Card>
    </div>
    {/* Bootstrap Card 3 Ends */}
     {/* Bootstrap Card 4 starts */}
     
     <Card style={{ width: '18rem',margin:"20px" }} className="cardColor">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Stylesheets</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" ><Nav.Link href="stylesheets">Read more</Nav.Link></Button>
      </Card.Body>
    </Card>
    </div>
    {/* Bootstrap Card 4 Ends */}
    </div>
  )
}
