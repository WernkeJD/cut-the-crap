import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home'



function App() {
  return (
    <Router>
      <Routes>
        <Route exct path = "/" element = {<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
