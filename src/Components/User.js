import React, { Component } from 'react'

  class User extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

  render() {
    console.log(this.props.play)
    return (
      <div className="User-choose-div">
        <div className="Rock_div">
          <button onClick={this.props.play.bind(this, 'Rock')} className="Rock-div">Rock</button>
        </div>
        <div className="Paper_div">
          <button onClick={this.props.play.bind(this, 'Paper')} className="Paper-div">Paper</button>
        </div>
        <div className="Scissors_div">
          <button onClick={this.props.play.bind(this, 'Scissors')} className="Scissors-div">Scissors</button>
        </div>
      </div>
    )
  }
}

export default User
