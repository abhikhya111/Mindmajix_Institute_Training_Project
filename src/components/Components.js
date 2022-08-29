import React from 'react'
import Functional from './functional.png'
import Class from './class.png'

export default function 
 Components() {
  return (
    <div class="container">
      <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Functional Component</h1>
      <p>Functional components are some of the more common components that will come 
        across while working in React. These are simply JavaScript functions. We can 
        create a functional component to React by writing a JavaScript function. These
         functions may or may not receive data as parameters. In the functional
          Components, the return value is the JSX code to render to the DOM tree.</p>
      <img src={Functional}/>

       <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Class Components</h1>
       <p>Before React 16.8, Class components were the only way to track state and
         lifecycle on a React component. Function components were considered "state-less".
         With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.
        Even though Function components are preferred, there are no current plans on removing 
        Class components from React.</p>
        <img src={Class}/>

    </div>
  )
}
