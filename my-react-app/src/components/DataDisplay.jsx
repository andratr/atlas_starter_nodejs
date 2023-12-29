// DataDisplay.jsx

import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div>
      <h2>Data Display Component</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
