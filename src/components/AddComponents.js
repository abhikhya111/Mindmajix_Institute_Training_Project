import React from 'react'
import Button from 'react-bootstrap/Button';
import Snippet1 from './Snippet1.png'
import Snippet2 from './Snippet2.png'

export default function AddComponents() {
  return (
    <div class="container">
        <h1 style={{paddingTop:"30px", paddingBottom:"20px"}}>Importing Components</h1>
        <p>The best way to consume React-Bootstrap is via the npm package which
           you can install with npm (or yarn if you prefer).</p>
           <p>If you plan on customizing the Bootstrap Sass files, or don't want
              to use a CDN for the stylesheet, it may be helpful to install vanilla 
              Bootstrap as well.</p>
        <img width="800px" src={Snippet1} alt="snippet 1"/>
        <br></br>
        <br></br>
        <p>You should import individual components like: react-bootstrap/Button rather 
          than the entire library. Doing so pulls in only the specific components 
          that you use, which can significantly reduce the amount of code you end
           up sending to the client.</p>
        <img width="800px" src={Snippet2} alt="snippet 2"/>

        
    </div>
  )
}
