import React, { Component } from 'react'

  class User extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

  render() {
    return (
      <div className="User-choose-div">
        <div className="Rock_div">
          <button onClick={() =>this.props.player.bind(this, 'Rock')}>Rock</button>
        </div>
        <div className="Paper_div">
          <button onClick={() => this.props.player.bind(this, 'Paper')}>Paper</button>
        </div>
        <div className="Scissors_div">
          <button onClick={() =>this.props.player.bind(this, 'Scissors')}>Scissors</button>
        </div>
      </div>
    )
  }
}

export default User
