import React, {useEffect, useRef, useState} from 'react'
import Form from 'react-bootstrap/Form';

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
