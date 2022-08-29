import React from 'react'
import Ss12 from './ss12.png' 
import Ss14 from './ss14.png'
import Ss15 from './ss15.png'
import Ss16 from './ss16.png'
export default function PropTypes  
() {
  return (
    <div className="container"> 
    <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>Typechecking with Props</h2>
    <p>As your app grows, you can catch a lot of bugs with typechecking. For some
         applications, you can use JavaScript extensions like Flow or TypeScript to 
         typecheck your whole application. But even if you don’t use those, React has
          some built-in typechecking abilities. To run typechecking on the props for a 
          component, you can assign the special propTypes property</p>
    <img src={Ss12} width="420px"/>
    <p style={{paddingTop:"30px", paddingBottom:"10px"}}>PropTypes exports a range of validators that can be used to make sure the data 
        you receive is valid. In this example, we’re using PropTypes.string. When an 
        invalid value is provided for a prop, a warning will be shown in the JavaScript
         console. For performance reasons, propTypes is only checked in development 
         mode
    </p>

    <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>Default Prop Values</h2>
    <p>You can define default values for your props by assigning to the special 
       defaultProps property:</p>
    <img src={Ss12} width="420px"/>
    <p style={{paddingTop:"30px", paddingBottom:"10px"}}>The defaultProps will be used to ensure that this.props.name will have a
         value if it was not specified by the parent component. The propTypes 
         typechecking happens after defaultProps are resolved, so typechecking will 
         also apply to the defaultProps.
    </p>

    <h2 style={{paddingTop:"30px", paddingBottom:"10px"}}>Function Components</h2>
    <p>If you are using function components in your regular development, you may 
      want to make some small changes to allow PropTypes to be properly applied.
       Let’s say you have a component like this:</p>
    <img src={Ss14} width="600px"/>

    <p style={{paddingTop:"30px", paddingBottom:"10px"}}>To add PropTypes, you may want to declare the component in a separate
       function before exporting, like this:</p>
    <img src={Ss15} width="500px"/>

    <p style={{paddingTop:"30px", paddingBottom:"10px"}}>Then, you can add PropTypes directly to the HelloWorldComponent:</p>
    <img src={Ss16} width="600px"/>
    </div>
  )
}
