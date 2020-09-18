import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import section3 from '../images/section3.png';
  
  export default function Section3(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>Section 3</h1>
            <map name="map-overlay">
                <area 
                    alt="Scientist: Theophile de Donder."
                    shape="rect" 
                    href="#"
                    coords="5, 35, 40, 80"/>
                <area 
                    alt="Scientist: Erwin Schrödinger."
                    shape="rect" 
                    href="#"
                    coords="85, 10, 125, 65"/>
                <area 
                    alt="Scientist: Jules-Émile Verschaffelt."
                    shape="rect" 
                    href="#"
                    coords="160, 20, 200, 75"/>
                <area 
                    alt="Scientist: Wolfgang Pauli."
                    shape="rect" 
                    href="#"
                    coords="230, 10, 277, 65"/>
                <area 
                    alt="Scientist: Paul Dirac."
                    shape="rect" 
                    href="#"
                    coords="8, 78, 52, 125"/>
                <area 
                    alt="Scientist: Arthur Compton."
                    shape="rect" 
                    href="#"
                    coords="100, 78, 140, 115"/>
                <area 
                    alt="Scientist: Louis de Broglie."
                    shape="rect" 
                    href="#"
                    coords="206, 83, 240, 130 "/>
                <area 
                    alt="Scientist: Albert Einstein."
                    shape="rect" 
                    href="#"
                    coords="68, 112, 112, 165"/>
                <area 
                    alt="Scientist: Paul Langevin."
                    shape="rect" 
                    href="#"
                    coords="180, 115, 215, 170"/>
                <area 
                    alt="Scientist: Charles-Eugène Guye."
                    shape="rect" 
                    href="#"
                    coords="253, 115, 290, 170"/>
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