import React from "react";
import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";

interface TeamProperties {
  school: string;
  name: string;
  city: string;
  state: string;
}

const teams = teamsData.teams;

function Heading() {
  return <h1>March Madness Teams</h1>;
}

class TeamCard extends React.Component<TeamProperties> {
  render() {
    const team = this.props;
    return (
      <div className="card-container">
        <div className="card">
          <p>
            <strong>School Name</strong>
          </p>
          <p>
            <strong>Mascot</strong>
          </p>
          <p>
            <strong>Location</strong>
          </p>
          <p>{team.school}</p>
          <p>{team.name}</p>
          <p>
            {team.city}, {team.state}
          </p>
        </div>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {teams.map((teamNum) => (
        <TeamCard {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <BandList />
    </div>
  );
}

export default App;
