import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
  return (
    <div class="container">
              <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Cards</h1>
              <p>Bootstrap’s cards provide a flexible and extensible content 
                container with multiple variants and options.</p>

            <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Example</h1>
            <div style={{display: "flex"}}>
            <Card style={{ width: '18rem', margin: "20px" }}>
                <Card.Img variant="top" width="300px" src="https://xtrapowertools.com/wp-content/uploads/2022/03/drill-chuck-1-600x600.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: "20px" }}>
                <Card.Img variant="top" width="300px" src="https://xtrapowertools.com/wp-content/uploads/2022/03/drill-chuck-1-600x600.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: "20px" }}>
                <Card.Img variant="top" width="300px" src="https://xtrapowertools.com/wp-content/uploads/2022/03/drill-chuck-1-600x600.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: "20px" }}>
                <Card.Img variant="top" width="300px" src="https://xtrapowertools.com/wp-content/uploads/2022/03/drill-chuck-1-600x600.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            

    </div>
  )
}
