import React from 'react';
import Main from './pages/Main';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Main from './pages/Main';
import ImgMap from './ImgMap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/section1" render={(props) => <Section1 {...props}/>} />
          <Route exact path="/section1" render={(props) => <Section2 {...props}/>} />
          <Route exact path="/section1" render={(props) => <Section3 {...props}/>} />
          <Route exact path="/section1" render={(props) => <Section4 {...props}/>} />
          <Route exact path="/image" render={(props) => <ImgMap {...props}/>} />
          <Route exact path="/main" render={(props) => <Main {...props}/>} />
        </Switch>
      </Router>
      <Main />
    </div>
  );
}

export default App;
