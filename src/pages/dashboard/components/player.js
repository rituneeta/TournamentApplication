import React from 'react';
import { Button, Input } from 'antd';

const Players = ({ players, team_name, setTournamentData }) => {

  const handleEdit = (teamName, playerIndex, fieldName, value) => {
    setTournamentData((prevData) => {
      const updatedData = prevData.map((tournament) => {
        if (tournament.teams) {
          tournament.teams = tournament.teams.map((team) => {
            if (team.team_name === teamName) {
              team.players = team.players.map((player, index) => {
                if (index === playerIndex) {
                  return { ...player, [fieldName]: value };
                }
                return player;
              });
            }
            return team;
          });
        }
        return tournament;
      });
      return updatedData;
    });
  };

  return (
    players.map(({ name, age }, playerIndex) => <div className='flex gap-2 mb-2'>
      <Input value={name} onChange={(e) => handleEdit(team_name, playerIndex, 'name', e.target.value)} />
      <Input value={age} onChange={(e) => handleEdit(team_name, playerIndex, 'age', e.target.value)} />
      <Button className='!text-white bg-[#1677ff]'>Save</Button>
    </div>
    ));
};

export default Players;