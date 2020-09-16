import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import section3 from '../images/section3.png';
  
  export default function Section3(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>section3</h1>
            <map name="map-overlay">
                <area 
                    alt="Section one."
                    shape="rect" 
                    href="#"
                    coords="0,0,250,400"/>
                <area 
                    alt="Section two."
                    shape="rect" 
                    href="#"
                    coords="250, 0, 480, 400"/>
                <area 
                    alt="Section three."
                    shape="rect"
                    href="#" 
                    coords="480, 0, 775, 400"/>
                <area 
                    alt="Section four."
                    shape="rect" 
                    href="#"
                    coords="775, 0, 1000,400 "/>
            </map>
            <div className={classes.imgContainer}>
                <img 
                    src={section3}
                    className={classes.solvay}
                    usemap="#map-overlay" 
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