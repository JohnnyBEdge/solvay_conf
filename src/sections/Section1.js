import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import section1 from '../images/section1.png';
  
  export default function Section1(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>Section 1</h1>
            <map name="map-overlay">
                <area 
                    alt="Scientist: Auguste Piccard."
                    shape="rect" 
                    href="#"
                    coords="180,0,240,50"/>
                <area 
                    alt="Scientist: Peter Debye."
                    shape="rect" 
                    href="#"
                    coords="72, 80, 115, 135"/>
                <area 
                    alt="Scientist: Martin Knudsen."
                    shape="rect"
                    href="#" 
                    coords="165, 95, 215, 148"/>
                <area 
                    alt="Scientist: Irving Langmuir."
                    shape="rect" 
                    href="#"
                    coords="110, 125, 150, 177"/>
                <area 
                    alt="Scientist: Max Planck."
                    shape="rect" 
                    href="#"
                    coords="210, 120, 255, 200"/>
            </map>
            <div className={classes.imgContainer}>
                <img 
                    src={section1}
                    className={classes.solvay}
                    useMap="#map-overlay" 
                    alt="A group photo of scientists from the 1927 Solvay Conference."/>
                {/* <figcaption>Scientists from the 1927 Solvay Conference.</figcaption> */}
            </div>
           
        </div>
    )
  }

  const useStyles = makeStyles(() => ({
    solvay: {
        height: 400
    }
  }));