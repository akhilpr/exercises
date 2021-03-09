import React from "react";
import "./style.css";
import CountrySelect  from "./components/Country";
import Continent  from "./components/Continent";
class App extends React.Component {
    render() : JSX.Element{
      return (
        <div className="row">
          <div className="col-md-6">
          <div className="card">
  <div className="card-body center">
  <CountrySelect/>
  </div>
</div>
</div>
<div className="col-md-6">
          <div className="card">
  <div className="card-body center">
  <Continent />
  </div>
</div>
</div>
         
        </div>
      );
    }
  }
  
export default App;