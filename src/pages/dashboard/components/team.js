import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Input } from 'antd';
import Players from 'pages/dashboard/components/player';

const Teams = ({ teams, setTournamentData }) => {
  const [newPlayerDetails, setNewPlayerDetails] = useState({});

  const handleAdd = (teamName) => {
    setTournamentData((prevData) => {
      const updatedData = prevData.map((tournament) => {
        if (tournament.teams) {
          tournament.teams = tournament.teams.map((team) => {
            if (team.team_name === teamName) {
              const teamDetails = newPlayerDetails[teamName] || { name: '', age: '' };
              team.players = [{ name: teamDetails.name, age: teamDetails.age }, ...team.players,];
            }
            return team;
          });
        }
        return tournament;
      });
      setNewPlayerDetails({ name: '', age: '' });
      toast.success("Successfully Add Player")
      return updatedData;
    })
  }
  return (
    teams.map(({ team_name, players }) => (
      <div className='!mb-4'>
        <h2 className='font-bold mb-4'>{team_name}({players.length})</h2>
        <div className='flex gap-2 mb-2'>
          <Input value={newPlayerDetails[team_name]?.name || ''} onChange={(e) => setNewPlayerDetails((prevDetails) => ({ ...prevDetails, [team_name]: { ...prevDetails[team_name], name: e.target.value } }))} />
          <Input value={newPlayerDetails[team_name]?.age || ''} onChange={(e) => setNewPlayerDetails((prevDetails) => ({ ...prevDetails, [team_name]: { ...prevDetails[team_name], age: e.target.value } }))} />
          <Button className='!bg-blue-500 !text-white' onClick={() => handleAdd(team_name)}>Add</Button>
        </div>
        <Players {...{ players, team_name, setTournamentData }} />
      </div>
    ))
  );
};

export default Teams;
