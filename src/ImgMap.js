import React, {useState} from 'react';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';

import { makeStyles } from '@material-ui/core/styles';

import solvay from './images/solvay-conf.jpg';
import { getThemeProps } from '@material-ui/styles';
  
  export default function ImgMap(props) {
    

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>The 1927 Solvay Conference</h1>
            <map name="map-overlay">
                <area 
                    alt="Section one."
                    shape="rect" 
                    onClick={() => props.setView(<Section1 />)}
                    coords="0,0,250,400"/>
                <area 
                    alt="Section two."
                    shape="rect" 
                    onClick={() => props.setView(<Section2 />)}
                    coords="250, 0, 480, 400"/>
                <area 
                    alt="Section three."
                    shape="rect"
                    onClick={() => props.setView(<Section3 />)}
                    coords="480, 0, 775, 400"/>
                <area 
                    alt="Section four."
                    shape="rect" 
                    onClick={() => props.setView(<Section4 />)}
                    coords="775, 0, 1000,400 "/>
            </map>
            <figure className={classes.imgContainer}>
                <img 
                    src={solvay}
                    className={classes.solvay}
                    usemap="#map-overlay" 
                    alt="A group photo of scientists from the 1927 Solvay Conference."/>
                <figcaption>Scientists from the 1927 Solvay Conference.</figcaption>
            </figure>
           
        </div>
    )
  }

  const useStyles = makeStyles(() => ({
      imgContainer: {
        alignSelf: 'center'
      },
    solvay: {
        width: 1000,
        height: 400,
    },
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
  }));