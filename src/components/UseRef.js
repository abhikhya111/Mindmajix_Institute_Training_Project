import React, {useEffect, useRef, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Ss2 from './ss2.png';
import Ss3 from './ss3.png';
import Ss4 from './ss4.png';

export default function UseRef() {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef();

  function focus(){
    inputRef.current.focus();
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  return (
    <div className='container'>
        <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>React useRef Hook</h1>
        <p>The useRef Hook allows you to persist values between renders.

        It can be used to store a mutable value that does not cause a re-render when updated.

        It can be used to access a DOM element directly.</p>



        <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>Does Not Cause Re-renders</h2>
        <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

           To avoid this, we can use the useRef Hook.</p>
        <img src={Ss2} alt="..." width="600px"/>


        <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Accessing DOM Elements</h1>
        <p>The useRef Hook allows you to persist values between renders.

        It can be used to store a mutable value that does not cause a re-render when updated.

        It can be used to access a DOM element directly.</p>
        <img src={Ss3} alt="..." width="600px"/>

        <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Tracking State Changes</h1>
        <p>The useRef Hook can also be used to keep track of previous state values.

        This is because we are able to persist useRef values between renders.

        </p>
        <img src={Ss4} alt="..." width="600px"/>


        <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>React useRef Example</h2>
        
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>My Email Address is {name}</Form.Label>
        <Form.Control type="email" value={name} onChange={e => { setName(e.target.value)}} placeholder="Enter email" />
        <Form.Label>Changed Email Address {renderCount.current} times</Form.Label>

      </Form.Group> 
    </Form>
    </div>
  )
}
