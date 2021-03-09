import React from "react";
import "./style.css";
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
class Clicks {
  totalClicks = 0

  constructor() {
      makeAutoObservable(this)
  }

  increase():void {
      this.totalClicks += 1
  }
  decrease():void {
    this.totalClicks === 0 ? this.totalClicks = 0 : this.totalClicks -= 1
  }

}
const myClicks = new Clicks()
const IncreaseBtn = observer(({ click }) =>  <button className="btn1" onClick={():void => click.increase()}>Increment</button>)
const DecreaseBtn = observer(({ click }) =>  <button className="btn2" onClick={():void => click.decrease()}>Decrement</button>)
const Count = observer(({ click }) => <span>Clicks: {click.totalClicks}</span>)

class App extends React.Component {
    render() : JSX.Element{
      return (
        <div>
          <div className="time">
          <span className="center"><Count click={myClicks}/></span>
          <IncreaseBtn  click={myClicks} />
         <DecreaseBtn  click={myClicks} />
        </div>
        </div>
      );
    }
  }
  
export default App;