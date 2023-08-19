import React from 'react';

const CardComponent = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default CardComponent;
