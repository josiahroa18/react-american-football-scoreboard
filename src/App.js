import React from "react";
import "./App.css";
import BottomRow from "./components/BottomRow";
import Home from "./components/Home";
import Away from "./components/Away";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      homeScore: 0,
      awayScore: 0,
      quarter: 1
    };
  }

  handleClick(teamName, scoreIncrease){
    if(teamName === "home"){
      this.setState({homeScore: this.state.homeScore + scoreIncrease});
    }else{
      this.setState({awayScore: this.state.awayScore + scoreIncrease});
    }
  }

  handleQuarter(){
    if(this.state.quarter < 4){
      this.setState({quarter: this.state.quarter + 1});
    }
  }

  render(){
    return (
      <div className="container">
        <section className="scoreboard">
          <div className="topRow">
            <Home homeScore={this.state.homeScore}/>
            <div className="timer">00:03</div>
            <Away awayScore={this.state.awayScore}/>
          </div>
          <BottomRow quarter={this.state.quarter}/>
        </section>
        <section className="buttons">
          <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick={this.handleClick.bind(this, "home", 7)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={this.handleClick.bind(this, "home", 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          </div>
          <div className="updateButton">
            <button onClick={this.handleQuarter.bind(this)} className="update_quarter">Update Quarter</button>
          </div>
          <div className="awayButtons">
            <button onClick={this.handleClick.bind(this, "away", 7)} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={this.handleClick.bind(this, "away", 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
