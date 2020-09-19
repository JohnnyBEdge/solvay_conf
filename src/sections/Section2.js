import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import section2 from '../images/section2.png';
  
  export default function Section2(props) {
    const classes = useStyles();

    return (
        <div className={classes.sectionContainer}>
            <h1>Section 2</h1>
            <map name="map-overlay">
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Emile Henriot"
                        shape="rect" 
                        onClick={() => props.setProfile('Henriot')}
                        coords="8,14,50,70"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Paul Ehrenfest."
                        shape="rect" 
                        onClick={() => props.setProfile('Ehrenfest')}
                        coords="60, 35, 110, 90"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Edouard Herzen."
                        shape="rect"
                        onClick={() => props.setProfile('Herzen')}
                        coords="145, 20, 195, 74"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Lawrence Bragg."
                        shape="rect" 
                        onClick={() => props.setProfile('Bragg')}
                        coords="8, 87, 54, 140"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Hendrik Kramers."
                        shape="rect" 
                        onClick={() => props.setProfile('Kramers')}
                        coords="121, 90, 165, 140"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Marie Curie."
                        shape="rect" 
                        // href="#"
                        onClick={() => props.setProfile('Curie')}
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
        //change height to 500 later, requires remapping
        // height: 500
        height: 400
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
  }));