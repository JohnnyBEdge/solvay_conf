import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import section2 from '../images/section2.png';
  
  export default function Section2(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>Section 2</h1>
            <map name="map-overlay">
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Emile Henriot"
                        shape="rect" 
                        onClick={() => props.setProfile('henriot')}
                        coords="8,14,50,70"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Paul Ehrenfest."
                        shape="rect" 
                        onClick={() => props.setProfile('ehrenfest')}
                        coords="60, 35, 110, 90"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Edouard Herzen."
                        shape="rect"
                        onClick={() => props.setProfile('herzen')}
                        coords="145, 20, 195, 74"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Lawrence Bragg."
                        shape="rect" 
                        onClick={() => props.setProfile('bragg')}
                        coords="8, 87, 54, 140"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Hendrik Kramers."
                        shape="rect" 
                        onClick={() => props.setProfile('kramers')}
                        coords="121, 90, 165, 140"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Marie Curie."
                        shape="rect" 
                        onClick={() => props.setProfile('curie')}
                        coords="57, 120, 103, 180"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Hendrik Lorentz."
                        shape="rect" 
                        onClick={() => props.setProfile('lorentz')}
                        coords="180, 120, 220, 180"/>
                </Link>
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