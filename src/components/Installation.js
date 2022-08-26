import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Installation() {
  return (
    <div class="container">
        <h1 style={{paddingTop:"30px", paddingBottom:"20px"}}>Software Setup</h1>
        <p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and 
            optimizes your app for production. You’ll need to have</p><p style={{fontWeight: 700}}> Node &lt;= 14.0.0 and npm &gt;= 5.6 </p><p>on your machine.</p>
             
             <p>To install node just go to the following link: </p> <Button href="https://nodejs.org/en/download/">Install Node</Button>
             <p style={{paddingTop:"20px"}}>To run a React Application you must have Node and NPM installed in your system.</p>
    </div>
  )
}
