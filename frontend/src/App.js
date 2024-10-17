import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Recipie from './recipie'
import Landing from './landing'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Landing/>}/>
        <Route path = "/recipe" element = {<Recipie/>}/>
      </Routes>
    </Router>
  );
};

export default App;
