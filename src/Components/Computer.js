import React, { Component } from 'react'

class Computer extends Component {
  render() {
    var stats = this.props.choice.reduce((stats, game) => {
      if (game.result === 2) {
        stats.won++;
      }else if (game.result === 1) {
        stats.tie++;
      } else if (game.result === 0) {
        stats.lost++
      }
      return stats
    }, {won:0, lost: 0, tie: 0});

    var message = "";
    var alertClass = '';
    if(this.props.choice.length) {
      let game = this.props.choice[this.props.choice.length -1];
      if (game.result === 1) {
        message = "Tie! Play Again...";
      } else if(game.result === 2) {
        message = 'You Won: '+ game.player + ' beat ' + game.computer + '!';
        alertClass = 'won';
      }  else {
        message = 'You Won: '+ game.computer + ' beat ' + game.player + '!';
        alertClass = 'lost'
      }
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid gameInfo">
          <div className="row">
           <h1 style={{color:'#61b6e4', fontStyle:'italic', fontFamily: 'Times New Roman, Times, serif',fontSize: '40px',}}>Rock Paper Scissors</h1>
            <div className="col-sm-6">
              <h3 className={alertClass}><span><strong>{message}</strong></span> </h3>
              <div className="col-sm-2 text-right">
                <h3>Won: <span><strong>{stats.won}</strong></span></h3>
              </div>
              <div className="col-sm-2 text-right">
                <h3>Lost: <span><strong>{stats.lost}</strong></span></h3>
              </div>
              <div className="col-sm-2 text-right">
                <h3>Tie: <span><strong>{stats.tie}</strong></span></h3>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Computer