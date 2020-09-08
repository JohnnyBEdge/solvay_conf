import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import solvay from './images/solvay-conf.jpg';
  
  export default function ImgMap() {
    const classes = useStyles();
    return (
        <div>
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
            {/* <figure> */}
                <img 
                    src={solvay}
                    className={classes.solvay}
                    usemap="#map-overlay" 
                    alt="A group photo of scientists from the 1927 Solvay Conference."/>
                {/* <figcaption>Scientists from the 1927 Solvay Conference.</figcaption>
            </figure> */}
           
        </div>
    )
  }

  const useStyles = makeStyles(() => ({
    solvay: {
        width: 1000,
        height: 400
    }
  }));