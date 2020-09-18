import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import section4 from '../images/section4.png';
  
  export default function Section4(props) {
    const classes = useStyles();

    return (
        <div>
            <h1>Section 4</h1>
            <map name="map-overlay">
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Werner Heisenberg."
                        shape="rect" 
                        onClick={() => props.setProfile('heisenberg')}
                        coords="23, 10, 55, 60"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Ralph H. Fowler."
                        shape="rect" 
                        onClick={() => props.setProfile('fowler')}
                        coords="80, 0, 115, 40"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Léon Brillouin."
                        shape="rect" 
                        onClick={() => props.setProfile('brillouin')}
                        coords="120, 15, 158, 70"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Max Born."
                        shape="rect" 
                        onClick={() => props.setProfile('born')}
                        coords="10, 80, 50, 140"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Niels Bohr."
                        shape="rect" 
                        onClick={() => props.setProfile('bohr')}
                        coords="105, 93, 148, 140"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Charles Thomson Rees Wilson."
                        shape="rect" 
                        onClick={() => props.setProfile('wilson')}
                        coords="70, 118, 110, 175"/>
                </Link>
                <Link to={'/profile'}>
                    <area 
                        alt="Scientist: Owen Willans Richardson."
                        shape="rect" 
                        onClick={() => props.setProfile('richardson')}
                        coords="150, 125, 190, 180"/>
                </Link>

            </map>
            <div className={classes.imgContainer}>
                <img 
                    src={section4}
                    className={classes.solvay}
                    usemap="#map-overlay" 
                    alt="A group photo of scientists from the 1927 Solvay Conference."/>
            </div>
           
        </div>
    )
  }

  const useStyles = makeStyles(() => ({
    solvay: {
        height: 400
    }
  }));