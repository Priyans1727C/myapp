import React, { useState, useEffect } from 'react';

const FetchResource = () => {
  const [resourceType, setResourceType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => setItems(data));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType('users')}>Get Users</button>
      <h1>{resourceType}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchResource;