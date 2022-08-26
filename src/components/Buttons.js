import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonCode from './buttons.png';
import OutlineButtons from './outlineButtons.png';
import BlockButton from './blockButtons.png';
export default function Buttons() {
  return (
    <div class="container">
      <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Buttons</h1>
      <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for
       multiple sizes, states, and more.</p>

       <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Example</h1>
        <p>Use any of the available button style types to quickly create a styled button. Just modify the
           variant prop.</p>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <img style={{paddingTop: "30px"}} src={ButtonCode} alt="button code"/>

      <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Outline Buttons</h1>
      <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
      <img style={{paddingTop: "30px"}} src={OutlineButtons} alt="button code"/>

      <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Block Buttons</h1>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
      <img style={{paddingTop: "30px"}} src={BlockButton} alt="button code"/>

    </div>
    </div>
  )
}
