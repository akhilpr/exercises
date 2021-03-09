import React from "react";
import "./style.css";

class App extends React.Component {
    state={
      hour : new Date().getHours(),
      minutes : new Date().getMinutes(),
      seconds : new Date().getSeconds()
    }
 
      componentDidMount():void{
        setInterval(this.update, 1000)
    }
    update = ():void => {
      this.setState({
           hour : new Date().getHours(),
           minutes : new Date().getMinutes(),
         seconds : new Date().getSeconds()
         })
    }
    render() : JSX.Element{
      return (
        <div className="time">
          <span className="center">{this.state.hour + ':' + this.state.minutes+ ':' + this.state.seconds }{ this.state.hour >= 12 ? 'pm' : 'am' }</span>
        </div>
      );
    }
  }
  
export default App;