import React, {useState} from 'react';
import Main from './pages/Main';
// import Section1 from './sections/Section1';
// import Section2 from './sections/Section2';
// import Section3 from './sections/Section3';
// import Section4 from './sections/Section4';
import Section from './sections/Section';
import CountriesList from './CountriesList';
import ScientistList from './ScientistList';
import Profile from './Profile';
import ImgMap from './ImgMap';
import NavBar from './NavBar'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  const classes = useStyles();
  const [profile, setProfile] = useState('');
  const [section, setSection] = useState(1);

  return (
    <div className="App">
      <Router>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper 
                className={`${classes.paper} ${classes.header}`}
                elevation={0}
                variant="outlined"
                square>The 1927 Solvay Conference</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper 
                className={`${classes.paper} ${classes.nav}`}
                elevation={0}
                variant="outlined"
                square>
                    <NavBar/>
                </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper
                className={`${classes.paper} ${classes.main}`}
                elevation={0}
                variant="outlined"
                square>
              
                <Switch>
                  <Route exact path="/" render={(props) => <ImgMap setSection={setSection}/>} />
                  <Route exact path="/image" render={(props) => <ImgMap setSection={setSection}/>} />
                  <Route exact path="/scientists" render={(props) => <ScientistList setProfile={setProfile}/>} />
                  <Route exact path="/countries" render={(props) => <CountriesList setProfile={setProfile}/>} /> 
                  <Route exact path="/section" render={(props) => <Section section={section} setProfile={setProfile}/>} />
                  {/* <Route exact path="/section1" render={(props) => <Section1 setProfile={setProfile}/>} />
                  <Route exact path="/section2" render={(props) => <Section2 setProfile={setProfile}/>} />
                  <Route exact path="/section3" render={(props) => <Section3 setProfile={setProfile}/>} />
                  <Route exact path="/section4" render={(props) => <Section4 setProfile={setProfile}/>} /> */}
                  <Route exact path="/profile/:id" render={(props) => <Profile profile={profile}/>} />
                </Switch>
                
            </Paper>
          </Grid>
        </Grid>
      </Router>
      
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  main: {
    height: '100%'
  },
  nav: {
    height: '100%',
  }
}));

export default App;
