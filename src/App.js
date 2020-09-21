import React, {useState} from 'react';
import Section from './Section';
import CountriesList from './CountriesList';
import ScientistList from './ScientistList';
import Profile from './Profile';
import ImgMap from './ImgMap';
import NavBar from './NavBar'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  const classes = useStyles();
  const [profile, setProfile] = useState('');
  const [section, setSection] = useState(4);

  return (
    <div className="App">
      <Router>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Paper 
                  className={`${classes.paper} ${classes.header}`}
                  elevation={0}
                  square>The 1927 Solvay Conference
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Paper 
                className={`${classes.paper} ${classes.nav}`}
                elevation={0}
                square>
                    <NavBar/>
                </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper
                className={`${classes.paper} ${classes.main}`}
                elevation={0}
                square>
              
                <Switch>
                  <Route exact path="/" render={() => <ImgMap setSection={setSection}/>} />
                  <Route exact path="/image" render={() => <ImgMap setSection={setSection}/>} />
                  <Route exact path="/scientists" render={() => <ScientistList setProfile={setProfile}/>} />
                  <Route exact path="/countries" render={() => <CountriesList setProfile={setProfile}/>} /> 
                  <Route exact path="/section" render={() => <Section section={section} setProfile={setProfile}/>} />
                  <Route exact path="/profile/:id" render={() => <Profile profile={profile}/>} />
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
    backgroundColor: '#e8ebe9',
  },
  main: {
    height: '100%',
    backgroundColor: '#D8D5D1'

  },
  nav: {
    height: '100%',
    minWidth: 200,
    backgroundColor: '#D8D5D1'

  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '1px solid black',
    backgroundColor: "#988771",
    color: 'whitesmoke',
    fontFamily: 'Great Vibes, cursive',
    fontSize: 40,
    letterSpacing: 1.5,
    padding: 3,
  }
}));

export default App;
