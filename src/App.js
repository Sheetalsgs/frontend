import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://alb-91808397.ap-south-1.elb.amazonaws.com/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  useEffect(() => {
    fetch('http://alb-91808397.ap-south-1.elb.amazonaws.com/api/data2')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  useEffect(() => {
    fetch('http://alb-91808397.ap-south-1.elb.amazonaws.com/api/data3')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Backend API Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
