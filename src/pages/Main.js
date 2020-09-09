import React, {useState} from 'react';
import ImgMap from '../ImgMap';
import NavBar from '../NavBar';
import Lists from '../Lists';
import Profile from '../Profile';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
  
  export default function Main() {
      const [view, setView] = useState('image')
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper 
                className={classes.paper}
                elevation={0}
                variant="outlined"
                square>The 1927 Solvay Conference</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper 
                className={classes.paper}
                elevation={0}
                variant="outlined"
                square>
                    <NavBar
                        changeView={setView}
                            />
                </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper
                className={classes.paper}
                elevation={0}
                variant="outlined"
                square>
                    <ImgMap/>
                </Paper>
          </Grid>
        </Grid>
        <Lists/>
        <Profile/>
      </div>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));