import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import data from './data/teamData.json';
// const data = require('./data/teamData.json');
const data = require('./data/teamData.json');
const teamData = data.teams;

class Team extends React.Component<{
  school: string;
  name: string;
  city: string;
  state: string;
}> {
  render() {
    const team = this.props;

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

function TeamList() {
  return (
    <div className="card-container">
      {teamData.map((team: any) => (
        <Team {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TeamList />
    </div>
  );
}

export default App;
