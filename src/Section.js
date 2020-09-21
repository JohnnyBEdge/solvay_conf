import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import section1 from './images/section1.png';
import section2 from './images/section2.png';
import section3 from './images/section3.png';
import section4 from './images/section4.png';
import data from './data.json';

  export default function Section(props) {
    const classes = useStyles();
    
    const sectionImage = 
        props.section === 1 ? section1
        : props.section === 2 ? section2
        : props.section === 3 ? section3
        : props.section === 4 ? section4 : '';

    const mapArea = data.filter(person => person.section === props.section)
        .map((person) => {
            return (
                <Link to={`${"/profile/"}${person.name.split(' ').slice(-1)[0]}`}>
                    <area
                        alt={`Scientist: ${person.name}".`}
                        shape="rect" 
                        onClick={() => props.setProfile(person.name.split(' ').slice(-1)[0])}
                        coords={person.coords}
                        />
                </Link>
            )
        } )
    const scientists = data.filter(person => person.section === props.section)
        .map(scientist => {
            return (
                scientist.name +", "
            )
        })

    return (
        <div className={classes.sectionContainer}>
            <map name="map-overlay">
                {mapArea}
            </map>
            <h1 className={classes.sectionTitle}>Click a face to discover more.</h1>
            <div className={classes.imgContainer}>
                <figure>
                <img 
                    src={sectionImage}
                    className={classes.solvay}
                    useMap="#map-overlay" 
                    alt="Scientists from the 1927 Solvay Conference."/>
                <figcaption className={classes.caption}>
                    {scientists}
                </figcaption>
                </figure>
            </div>
        </div>
    )
  }

  const useStyles = makeStyles(() => ({
    solvay: {
        height: 500
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 100
    },
    sectionTitle: {
        fontWeight: 300,
        fontSize: 15,
        marginLeft: 90
    },
    titleSubtext: {
        margin: 0,
        marginLeft: 100
    },
    caption: {
        maxWidth: 350,
        fontSize: 14,
        fontStyle: 'italic'
    }
  }));