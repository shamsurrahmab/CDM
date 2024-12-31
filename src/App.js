// import logo from './logo.svg';
// import Render from './Render';
import './App.css';
 import React from 'react';
 class App extends React.Component{
constructor()
{
  super();
  // console.warn("Constructore (Must Call First)")
  this.state={name:"Sir Hammad"}
}
componentDidMount()
{
  console.warn("Componentdidmount (Must Call at Last)")
}
render()
{
  console.warn("Render (Must Call Second)")
  // const[name,setName]=React.useState("Hammad Khan")
  return(
    <div className="App">
    <h1 style={{color:"red"}}>Component Did_Mount {this.state.name}</h1>
    <p>In case of state componentDidMount will Not work while Render will work</p>
    <button style={{borderRadius:"30%",color:"blue",height:"40px",fontFamily:"impact",fontSize:"20px",width:"150px"}} onClick={()=>this.setState({name:"Sir Hammad Khan"})}>Update Name</button>
    {/* <Render /> */}
    {/* <button onClick={()=>setName("Sir Hammad Khan")}>update teacher</button> */}
    </div>
  );
}
}
export default App;