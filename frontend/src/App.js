import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './landing'
import RecipiePage from './RecipePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Landing/>}/>
        <Route path = "/recipe" element = {<RecipiePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
