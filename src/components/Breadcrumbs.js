import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Breadcrumbs() {
  return (
    <div class="container">
        <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Breadcrumbs</h1>
        <p>Indicate the current page’s location within a navigational hierarchy 
        that automatically adds separators via CSS.</p>
        <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>Examples</h1>
        <p>Add active prop to the active Breadcrumb.Item. Do not set both 
            active and href attributes. active overrides href and span 
            element is rendered instead of a.</p>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>


    </div>
  )
}
