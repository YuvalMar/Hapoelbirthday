import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerCard = ({ id, name, birthDay }) => {
  
  return (
    <div className="col-md-2 mb-4">
      <div className="card">
        
          <img src={`https://static.football.co.il/wp-content/themes/kingclub-theme/images/players/30-1037-${id}.png`} className="card-img-top" alt={name} />
        
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Birthday: {birthDay}</p>
        </div>
      </div>
    </div>
  );
};

const PlayerList = ({ players }) => {
  return (
    <div className="row">
      {players.map(player => (
        <PlayerCard
          key={player.id}
          id={player.id}
          name={player.name}
          birthDay={player.birthDay}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    let data = [

  { id: 7600, name: 'Denis Polyakov', birthDay: '17.04.91' },
  { id: 26011, name: 'Dino Štiglec', birthDay: '03.10.90' },
  { id: 19516, name: 'Dor Malul', birthDay: '30.04.89' },
  { id: 21156, name: 'Alon Turgeman', birthDay: '09.06.91' },
  { id: 68020, name: 'Loai Taha', birthDay: '26.11.89' },
  { id: 28334, name: 'Gal Arel', birthDay: '09.07.89' },
  { id: 28331, name: 'Hanan Maman', birthDay: '28.08.89' },
  { id: 9189, name: 'Ohad Levita', birthDay: '17.02.86' },
  { id: 16827, name: 'Arvydas Novikovas', birthDay: '18.12.90' },
  { id: 28317, name: 'Hatem Elhamid', birthDay: '18.03.91' },
  { id: 100930, name: 'Shoval Gozlan', birthDay: '25.04.94' },
  { id: 97542, name: 'Gidi Kanuk', birthDay: '11.02.93' },
  { id: 163328, name: 'Carnejy Antoine', birthDay: '27.07.91' },
  { id: 235938, name: 'Dudu Twitto', birthDay: '06.02.94' },
  { id: 194272, name: 'Liran Sardal', birthDay: '02.07.94' },
  { id: 232915, name: 'Oren Bitton', birthDay: '16.06.94' },
  { id: 52920, name: 'Aleksandar Šćekić', birthDay: '12.12.91' },
  { id: 386778, name: 'Eliel Peretz', birthDay: '18.11.96' },
  { id: 28342, name: 'Ran Kadosh', birthDay: '04.10.85' },
  { id: 167519, name: 'Costas Soteriou', birthDay: '21.06.96' },
  { id: 1111945, name: 'Tomer Yossefi', birthDay: '02.02.99' },
  { id: 854721, name: 'Dudu Altrovich', birthDay: '12.07.99' },
  { id: 460389, name: 'Glezer Tamir Itzhak', birthDay: '30.05.00' },
  { id: 1249841, name: 'Yarin Serdal', birthDay: '13.02.01' },
  { id: 1249457, name: 'Amit Suari', birthDay: '20.04.01' },
  { id: 1165348, name: 'Guy Mizrahi', birthDay: '30.03.01' },
  { id: 1260263, name: 'Itay Buganim', birthDay: '29.05.01' },
  { id: 1111299, name: 'Mohammed Kamara', birthDay: '31.10.97' },
  { id: 1331575, name: 'Jabier Boshank', birthDay: '01.05.03' }
    ];
const today = new Date();
const currentMonth = today.toLocaleDateString("en-US", {month: "2-digit"});
const currentDay = today.toLocaleDateString("en-US", {day: "2-digit"});

data.sort((a, b) => {
  const [dayA, monthA, yearA] = a.birthDay.split(".");
  const [dayB, monthB, yearB] = b.birthDay.split(".");

  if (monthA === currentMonth) {
    if (monthB === currentMonth) {
      return dayA - dayB;
    }
    return -1;
  } else if (monthB === currentMonth) {
    return 1;
  }
  return monthA - monthB;
});









    setPlayers(data);
  }, []);

  

  return (
    <div className="container my-5">
      <h1 className="text-center">Players List</h1>
      <PlayerList players={players} />
    </div>
  );
};

export default App;
