import React from 'react';
import Main from './pages/Main';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import CountriesList from './CountriesList';
import ScientistList from './ScientistList';
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
                  <Route exact path="/" render={(props) => <ImgMap {...props}/>} />
                  <Route exact path="/image" render={(props) => <ImgMap {...props}/>} />
                  <Route exact path="/scientists" render={(props) => <ScientistList {...props}/>} />
                  <Route exact path="/countries" render={(props) => <CountriesList {...props}/>} /> 
                  <Route exact path="/section1" render={(props) => <Section1 {...props}/>} />
                  <Route exact path="/section1" render={(props) => <Section2 {...props}/>} />
                  <Route exact path="/section1" render={(props) => <Section3 {...props}/>} />
                  <Route exact path="/section1" render={(props) => <Section4 {...props}/>} />
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
    height: '100%'
  }
}));

export default App;
