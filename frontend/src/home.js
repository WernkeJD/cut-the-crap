import React, { useEffect, useState } from 'react';

function Home() {

  const [data, setData] = useState(null);
  
  const query = window.location.search;
  
  useEffect(() => {
    fetch(`http://localhost:5000/${query}`, { 
      method: 'GET',
      headers: {
        'source': 'website' 
      }
    })
      .then(response => response.text())
      .then(urldata => {
        console.log('Server response:', urldata);
        setData(urldata);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <p>{data}</p>
      <p>Hello, this is home</p>
    </div>
  );
};

export default Home;