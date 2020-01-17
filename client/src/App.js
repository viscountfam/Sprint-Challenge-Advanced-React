import React from 'react';
import axios from 'axios';
import PlayerCards from './components/PlayerCards'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log("Response", response)
        this.setState({
          players: response.data
        })
      })
      .catch(err => {
        console.log("An error has occurred", err)
      })
  }
  render(){
  return (
    <div className="App">
       <h2>Player Search frequency</h2>
        {this.state.players.map(player => (
          <PlayerCards key={player.id} player={player} />
        ))}
    </div>
  );
}
}

export default App;
