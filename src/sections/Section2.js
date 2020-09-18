import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import section2 from '../images/section2.png';
  
  export default function Section2(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>Section2</h1>
            <map name="map-overlay">
                <area 
                    alt="Scientist: Emile Henriot"
                    shape="rect" 
                    href="#"
                    coords="8,14,50,70"/>
                <area 
                    alt="Scientist: Paul Ehrenfest."
                    shape="rect" 
                    href="#"
                    coords="60, 35, 110, 90"/>
                <area 
                    alt="Scientist: Edouard Herzen."
                    shape="rect"
                    href="#" 
                    coords="145, 20, 195, 74"/>
                <area 
                    alt="Scientist: Lawrence Bragg."
                    shape="rect" 
                    href="#"
                    coords="8, 87, 54, 140"/>
                <area 
                    alt="Scientist: Hendrik Kramers."
                    shape="rect" 
                    href="#"
                    coords="121, 90, 165, 140"/>
                <area 
                    alt="Scientist: Marie Curie."
                    shape="rect" 
                    href="#"
                    coords="57, 120, 103, 180"/>
                <area 
                    alt="Scientist: Hendrik Lorentz."
                    shape="rect" 
                    href="#"
                    coords="180, 120, 220, 180"/>
            </map>
            <div className={classes.imgContainer}>
                <img 
                    src={section2}
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