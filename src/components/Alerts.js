import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Alerts() {
  return (
    <div class="container">
        <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Alerts</h1>
        <p>Provide contextual feedback messages for typical user actions 
        with the handful of available and flexible alert messages.</p>
        <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Examples</h1>
        <p>Alerts are available for any length of text, as well as an optional
         dismiss button. For proper styling, use one of the eight variants.</p>
         {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <h1 style={{paddingTop:"30px", paddingBottom:"20px"}}>Links in Alerts</h1>

      <p>For links, use the Alert.Link component to provide matching colored links within any alert.</p>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </div>
  )
}
