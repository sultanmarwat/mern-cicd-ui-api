import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data') // This will make a request to the backend API we defined earlier
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching data:', err.message));
  }, []);

  return (
    <div>
      <h1>MERN Stack Application Dockerization.</h1>
      <h2>UI Dashboard</h2>
      <h3>Ropstam Solutions</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
