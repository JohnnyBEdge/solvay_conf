import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import section1 from '../images/section1.png';
import section2 from '../images/section2.png';
import section3 from '../images/section3.png';
import section4 from '../images/section4.png';
import data from '../data.json';

  export default function Section(props) {
    const classes = useStyles();
    
    const sectionImage = 
        props.section === 1 ? section1
        : props.section === 2 ? section2
        : props.section === 3 ? section3
        : props.section === 4 ? section4 : '';

    const mapArea = data.filter(person => person.section === props.section).
        map((person) => {
            return (
                <Link to={'/profile'}>
                    <area 
                        alt={`Scientist: ${person.name}".`}
                        shape="rect" 
                        onClick={() => props.setProfile(person.name.split(' ').slice(-1)[0])}
                        coords={person.coords}/>
                </Link>
            )
        } )

    return (
        <div>
            <h1>Section {props.section}</h1>

            <map name="map-overlay">
                {mapArea}
            </map>

            <div className={classes.imgContainer}>
                <img 
                    src={sectionImage}
                    className={classes.solvay}
                    useMap="#map-overlay" 
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