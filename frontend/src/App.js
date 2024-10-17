import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Recipie from './recipie'
import Landing from './landing'



function App() {
  return (
    <Router>
      <Routes>
        <Route exct path = "/recipe" element = {<Recipie/>}/>
        <Route exct path = "/" element = {<Landing/>}/>
      </Routes>
    </Router>
  );
};

export default App;
