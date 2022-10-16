import React from "react";

class App extends React.Component{
  render(){
    console.log(this.props?.status);
    return(
    <div>
      <div>Hi {this.props?.data?.title}</div>
      <h3>React is Js library</h3>
      <h4>{this.props?.data?.title} is {this.props?.data?.status || 'unknown'}</h4>
    </div>
    );
  }
}

export default App;