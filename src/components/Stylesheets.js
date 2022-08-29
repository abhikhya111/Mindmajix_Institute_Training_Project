import React from 'react';
import Button from 'react-bootstrap/Button';
import Snippet3 from './Snippet3.png'


export default function Stylesheets() {
  return (
    <div class="container">
        <h1 style={{paddingTop:"30px", paddingBottom:"20px"}}>Stylesheets</h1>
        <p>Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included CSS. However, some stylesheet is required to use these components.</p>
        <h1 style={{paddingTop:"30px", paddingBottom:"20px"}}>CSS</h1>
        <p>The following line can be included in your src/index.js or App.js </p>
        <img width="800px" src={Snippet3} alt="snippet 1"/>

     
        
    </div>
  
  )
}
