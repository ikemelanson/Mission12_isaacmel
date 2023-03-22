// Ike MElanson

import React from 'react';
import './App.css';
// imoprt data
const data = require('./data/teamData.json');
const teamData = data.teams;

// make a Team class that implements one card of team data
class Team extends React.Component<{
  school: string;
  name: string;
  city: string;
  state: string;
}> {
  render() {
    const team = this.props;

    // return the DOM node
    return (
      <div className="card">
        <h2>{team.school}</h2>
        <h3>{team.name}</h3>
        <h3>
          {team.city}, {team.state}
        </h3>
      </div>
    );
  }
}

// a function to make a list of the teams
function TeamList() {
  return (
    <div className="card-container">
      {teamData.map((team: any) => (
        <Team {...team} />
      ))}
    </div>
  );
}

// make the whole app
function App() {
  return (
    <div className="App">
      <TeamList />
    </div>
  );
}

export default App;
