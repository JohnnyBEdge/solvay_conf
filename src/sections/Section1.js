import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import section1 from '../images/section1.png';
  
  export default function Section1(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>Section 1</h1>
            {/* now that coordinates are known, future updates should move them to json data and dynamically 
            render this mapping */}
            <map name="map-overlay">
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Auguste Piccard."
                        shape="rect" 
                        onClick={() => props.setProfile('Piccard')}
                        coords="180,0,240,50"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Peter Debye."
                        shape="rect" 
                        onClick={() => props.setProfile('Debye')}
                        coords="72, 80, 115, 135"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Martin Knudsen."
                        shape="rect"
                        onClick={() => props.setProfile('Knudsen')}
                        coords="165, 95, 215, 148"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Irving Langmuir."
                        shape="rect" 
                        onClick={() => props.setProfile('Langmuir')}
                        coords="110, 125, 150, 177"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Max Planck."
                        shape="rect" 
                        onClick={() => props.setProfile('Planck')}
                        coords="210, 120, 255, 200"/>
                </Link>
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