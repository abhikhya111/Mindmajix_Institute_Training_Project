import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrap from './reactBootstrap.webp';
import ReactPython from './reactPython.jpg';
import ReactPhp from './reactPhp.png';

export default function Carousal() {
  return (
    <div class="container">
      <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Buttons</h1>
      <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>

      <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Example</h1>
      <p>Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional
         utilities or custom styles to appropriately size content. While carousels support previous/next 
         controls and indicators, they’re not explicitly required. Add and customize as you see fit.</p>

         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ReactBootstrap}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ReactPython}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ReactPhp}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
