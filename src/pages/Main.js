import React from 'react';
import ImgMap from '../ImgMap';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
  
  export default function Main() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper 
                className={classes.paper}
                elevation={0}
                variant="outlined"
                square>Header</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper 
                className={classes.paper}
                elevation={0}
                variant="outlined"
                square>Search</Paper>
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