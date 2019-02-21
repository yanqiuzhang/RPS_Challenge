import React, { Component } from 'react';
import User from './Components/User';
import Computer from './Components/Computer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      computer: this.randomChoice(),
      games: [],
    };
    this.randomChoice = this.randomChoice.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 82) {
        this.play("Rock");
      } else if (e.keyCode === 80) {
        this.play("Paper");
      } else if (e.keyCode === 83) {
        this.play("Scissors");
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', (e) => {
      if (e.keyCode === 82) {
        this.play("Rock");
      } else if (e.keyCode === 80) {
        this.play("Paper");
      } else if (e.keyCode === 83) {
        this.play("Scissors");
      }
    });
  }


  randomChoice(){
    const computerChoice = [ "Rock", "Paper", "Scissors"]
    return computerChoice[Math.floor(Math.random() * 3)];
  }

  play(option) {
    var game = {};

    if(this.state.computer === option) {
      game.result = 1;
    }else if (
      (this.state.computer === "Rock" && option === "Paper") ||
      (this.state.computer === "Paper" && option === "Scissors") ||
      (this.state.computer === "Scissors" && option === "Rock")
    ) {
      game.result = 2;
    } else {
      game.result = 0;
    }
    
    game.computer = this.state.computer;
    game.player = option;

    let games = this.state.games;
    games.push(game);

    let random = this.randomChoice();
    this.setState({games, computer: random})
  }

  render() {
    return (
      <div className="App">
        <div className="games-div">
          <Computer choice={this.state.games}/> 
          <User play={this.play}/>
        </div>
      </div>
    );
  }
}

export default App;
