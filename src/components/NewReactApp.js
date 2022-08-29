import React from 'react'
import Button from 'react-bootstrap/Button';
import Snippet4 from './Snippet4.png'
export default function NewReactApp() {
  return (
    <div class="container">
        <h1 style={{paddingTop:"30px", paddingBottom:"20px"}}>Create React App</h1>
        <span>Create React App is a comfortable environment for </span><span style={{fontWeight:700}}>learning React</span><span>, and is the best way to start building a </span><span style={{fontWeight:700}}>new single-page application in React.</span>
        <p style={{paddingTop:"15px"}}>A new React Application can be created by following these commands.</p>
        <img src={Snippet4} width="800px" alt="Sinppet 4"/>
    </div>
  )
}
