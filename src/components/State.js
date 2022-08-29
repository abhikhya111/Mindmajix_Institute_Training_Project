import React from 'react'
import Ss17 from './ss17.png'
import Ss18 from './ss18.png'
import Ss19 from './ss19.png'
export default function () {
  return (
    <div class="container">
        <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>Component State</h2>
        <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>What does State do?</h3>
        <p>setState() schedules an update to a component’s state object. When state 
            changes, the component responds by re-rendering.</p>
        <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>What is the difference between State and Props?</h3>
        <p>props (short for “properties”) and state are both plain JavaScript objects.
        While both hold information that influences the output of render, they are 
        different in one important way: props get passed to the component (similar to 
        function parameters) whereas state is managed within the component (similar to 
        variables declared within a function).Here are some good resources for further 
        reading on when to use props vs state:</p>
        <img src={Ss17} width="800px"/>

        <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>Why is setState() giving
        me the wrong value?</h3>
        <p>In React, both this.props and this.state represent the rendered values, i.e. what’s currently on the screen.
        Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState. Pass an updater function instead of an object if you need to compute values based on the current state (see below for details).
        Example of code that will not behave as expected:</p>
        <img src={Ss18} width="800px"/>

        <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>How do I update state
         with values that depend on the current state?</h3>
         <p>Pass a function instead of an object to setState to ensure the call 
             always uses the most updated version of state (see below).</p>

        <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>What is the difference
         between passing an object or a function in setState?</h3>
         <p>Passing an update function allows you to access the current state value 
         inside the updater. Since setState calls are batched, this lets you chain
          updates and ensure they build on top of each other instead of conflicting:</p>
          <img src={Ss19} width="600px"/>

        <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>When is setState asynchronous?</h3>
        <p>Currently, setState is asynchronous inside event handlers.This ensures, for 
             that if both Parent and Child call setState during a click event, Child isn’t 
             re-rendered twice. Instead, React “flushes” the state updates at the end of the 
             browser event. This results in significant performance improvements in larger 
             apps.This is an implementation detail so avoid relying on it directly. In the 
             future versions, React will batch updates by default in more cases.</p>
        
        <h3 style={{paddingTop:"30px", paddingBottom:"10px"}}>Why doesn’t React update 
        this.state synchronously?</h3>
        <p>As explained in the previous section, React intentionally “waits” until all
         components call setState() in their event handlers before starting to 
         re-render. This boosts performance by avoiding unnecessary re-renders.However,
          you might still be wondering why React doesn’t just update this.state immediately without re-rendering.
        There are two main reasons:
        <ul>
            <li>This would break the consistency between props and state, causing issues
                 that are very hard to debug.</li>
            <li>This would make some of the new features we’re working on impossible to 
                implement.</li>
        </ul>
</p>




        


        

    </div>
  )
}
