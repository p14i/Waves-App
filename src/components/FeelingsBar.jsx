// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

// function FeelingsBar() {
//   return ( 
    
//     <>
//         <div class="custom-feelsbar">
//         <span>Log Mood: </span>
//         <ButtonGroup class="custom-feelsbar">
//             <Button variant="secondary" size="lg">😭</Button>
//             <Button variant="secondary" size="lg">😔</Button>
//             <Button variant="secondary" size="lg">😐</Button>
//             <Button variant="secondary" size="lg">😌</Button>
//             <Button variant="secondary" size="lg">😃</Button>
//         </ButtonGroup>
//         </div>
//     </>
    
//   );
// }


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { format } from 'date-fns';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Container } from 'react-bootstrap';

const moods = ['😭', '😔', '😐', '😌', '😃'];

export default function FeelingsBar() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [moodLog, setMoodLog] = useState({});
  const [viewWaveGraph, setViewWaveGraph] = useState(false);

  const handleMoodSelect = (mood) => {
    setMoodLog((prev) => ({
      ...prev,
      [selectedDate]: mood,
    }));
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const moodCounts = moods.map((mood) => ({
    mood,
    count: Object.values(moodLog).filter((m) => m === mood).length,
  }));

  const moodWaveData = Object.entries(moodLog)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, mood]) => ({
      date,
      moodIndex: moods.indexOf(mood),
    }));

  return (
    <Container>
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 mood-selector-heading">How are you feeling today?</h1>

      <div className="mb-4">
        <label className="mr-2 font-medium">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="flex space-x-2 mb-4">
      <label className="mr-2 font-medium ">Log Mood:</label>

        {moods.map((mood) => (
            <Button
            key={mood}
            variant={moodLog[selectedDate] === mood ? "primary" : "dark"}
            size="lg"
            onClick={() => handleMoodSelect(mood)}
          >
           {mood}
          </Button>
        ))}
      </div>

      <div className="mt-4">
        <label className="font-semibold">Mood for {selectedDate}:</label>
        <p className="text-2xl">{moodLog[selectedDate] || 'No mood selected 😶'}</p>
      </div>



        
          <div className="mt-4">
            <h2 className="font-semibold mb-2 mood-selector-heading">Mood Waves Over Time</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={moodWaveData}>
                <XAxis dataKey="date" />
                <YAxis dataKey="moodIndex" tickFormatter={(val) => moods[val]} domain={[0, moods.length - 1]} />
                <Tooltip formatter={(value) => moods[value]} />
                <Line type="monotone" dataKey="moodIndex" stroke="#137dc5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        
    </div>
    <hr></hr>
    </Container>
  );
} 

