// import logo from './logo.svg';
// import Render from './Render';
import './App.css';
 import React from 'react';
 class App extends React.Component{
constructor()
{
  super();
  console.warn("Constructore (Must Call First)")
  this.state={count:0}
}
componentDidUpdate(preProps,preState,snapShot)
{
  console.warn("Component Did_Update (Will Update after defininng of props or state)",preState,preProps,snapShot)
  if(this.state.count<10)
  {
    this.setState({count:this.state.count+1})
  }
}
render()
{
  console.warn("Render (Must Call Second)")
  return(
    <div className="App">
    <h1 style={{color:"brown"}}>Component Did_Update {this.state.count}</h1>
    <p>Will update after defining of props or states </p>
    { <button style={{borderRadius:"30%",color:"blue",height:"40px",fontFamily:"impact",fontSize:"20px",width:"150px"}} onClick={()=>this.setState({count:1})}>Update Name</button> }
    </div>
  );
}
}
export default App;