import React , {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';


export default function UseEffect() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[resourceType])
  return (
    <>
    <div className='container'>
              <h1 style={{paddingTop:"30px", paddingBottom:"10px"}}>React useEffect</h1>
        <p>The useEffect Hook allows you to perform side effects in your components.

        Some examples of side effects are: fetching data, directly updating the DOM, and timers.

        useEffect accepts two arguments. The second argument is optional.

        </p>
        <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>UseEffect Example</h2>

        <Button variant="success" onClick={() => setResourceType('posts')}>Posts</Button>{'  '}
        <Button onClick={() => setResourceType('users')}>Users</Button>{'  '}
        <Button variant="success" onClick={() => setResourceType('comments')}>Comments</Button>
        <h3 style={{paddingTop:"20px"}}>This is {resourceType} page</h3>
        {items.map(items => {
            return <pre>{JSON.stringify(items)}</pre>

        })
        }
        
        
    </div>
   </>
   

  )
}
