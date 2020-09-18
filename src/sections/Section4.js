import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import section4 from '../images/section4.png';
  
  export default function Section4(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>Section 4</h1>
            <map name="map-overlay">
                <area 
                    alt="Scientist: Werner Heisenberg."
                    shape="rect" 
                    href="#"
                    coords="23, 10, 55, 60"/>
                <area 
                    alt="Scientist: Ralph H. Fowler."
                    shape="rect" 
                    href="#"
                    coords="80, 0, 115, 40"/>
                <area 
                    alt="Scientist: Léon Brillouin."
                    shape="rect" 
                    href="#"
                    coords="120, 15, 158, 70"/>
                <area 
                    alt="Scientist: Max Born."
                    shape="rect" 
                    href="#"
                    coords="10, 80, 50, 140"/>
                <area 
                    alt="Scientist: Niels Bohr."
                    shape="rect" 
                    href="#"
                    coords="105, 93, 148, 140"/>
                <area 
                    alt="Scientist: Charles Thomson Rees Wilson."
                    shape="rect" 
                    href="#"
                    coords="70, 118, 110, 175"/>
                <area 
                    alt="Scientist: Owen Willans Richardson."
                    shape="rect" 
                    href="#"
                    coords="150, 125, 190, 180"/>

            </map>
            <div className={classes.imgContainer}>
                <img 
                    src={section4}
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