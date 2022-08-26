
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function StateHook({ text, maxLength }) {

  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <>
    <div className='container'>
    <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>What Does the React.useState Hook Do?</h2>
    <p>The useState hook lets you add state to function components.
        (Not sure what a “hook” is? Read this intro to hooks!)
        By calling React.useState inside a function component, you create a single piece of state associated with that component. (every hook starts with the word “use”; a call to useState literally lets you “use state” in a function component)

        In class components, the state was always an object, and you could store multiple values in that objec</p>
        <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>Example: Show/Hide a Component (useState with a boolean)</h2>

        <span style={{color:"red"}}>
        {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
        {hidden ? (
        <Button onClick={() => setHidden(false)}> read more</Button>
        ) : (
        <Button variant="success" onClick={() => setHidden(true)}> read less</Button>
        )}
        </span>
    </div>
          
    </>
  
  );
}