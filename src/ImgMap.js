import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import solvay from './images/solvay-conf.jpg';
  
  export default function ImgMap() {
    const classes = useStyles();
    return (
        <div>
            <figure>
                <img 
                    src={solvay}
                    className={classes.solvay} 
                    alt="A group photo of scientists from the 1927 Solvay Conference"/>
                <figcaption>Scientists from the 1927 Solvay Conference.</figcaption>
            </figure>
           
        </div>
    )
  }

  const useStyles = makeStyles(() => ({
    solvay: {
        width: "100%"
    }
  }));