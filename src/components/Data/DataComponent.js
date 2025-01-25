import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';

function DataComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>Data</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;
