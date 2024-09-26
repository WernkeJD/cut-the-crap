import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    fetch('http://localhost:5000/', { 
      method: 'GET',
      headers: {
        'source': 'website' 
      }
    })
      .then(response => response.text())
      .then(data => {
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <p>Hello, this is home</p>
    </div>
  );
};

export default Home;