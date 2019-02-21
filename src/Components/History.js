import React from 'react';


export default class extends React.Component {
  constructor() {
    super()
  }

  render() {

    var choice = this.props.choice.map((game, i)=>{
      var roundResult, gameResultClass;
      if (game.result === 0) {
        roundResult = 'Lost';
      } else if (game.result === 2) {
        roundResult = 'Won';
      } else {
        roundResult = 'Tie';
      }

      return (
        <tr className="text-right" key={i}>
          <td className={gameResultClass}><b>{game.gameResult}</b></td>
          <td>{game.player}</td>
          <td>{game.computer}</td>
          <td>{roundResult}</td>
        </tr>
      )
    }).reverse();

    return (
      <table className="table table-striped history">
        <thead>
          <tr>
            <th></th>
            <th className="score text-right">Player</th>
            <th className="date text-right">Computer</th>
            <th className="text-right">Result</th>
          </tr>
        </thead>
        <tbody>
          {choice}
        </tbody>
      </table>
    )
  }
}