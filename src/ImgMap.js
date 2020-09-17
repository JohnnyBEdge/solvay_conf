import React, {useState} from 'react';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';

import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import solvay from './images/solvay-conf.jpg';
import { getThemeProps } from '@material-ui/styles';
  
  export default function ImgMap(props) {
    

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>The 1927 Solvay Conference</h1>
            <map name="map-overlay">
                <Link to={'/section1'}>
                    <area 
                        alt="Section one."
                        shape="rect" 
                        coords="0,0,250,400"/>
                </Link>
                <Link to={'/section2'}>
                    <area 
                        alt="Section two."
                        shape="rect" 
                        coords="250, 0, 480, 400"/>
                </Link>
                <Link to={'/section3'}>
                    <area 
                        alt="Section three."
                        shape="rect"
                        coords="480, 0, 775, 400"/>
                </Link>
                
                <Link to={'/section4'}>
                    <area 
                        alt="Section four."
                        shape="rect" 
                        coords="775, 0, 1000,400 "/>
                </Link>
            </map>
            <figure className={classes.imgContainer}>
                <img 
                    src={solvay}
                    className={classes.solvay}
                    useMap="#map-overlay" 
                    alt="A group photo of scientists from the 1927 Solvay Conference."/>
                <figcaption>Scientists from the 1927 Solvay Conference.</figcaption>
            </figure>
           
        </div>
    )
  }

  const useStyles = makeStyles(() => ({
      imgContainer: {
        alignSelf: 'center'
      },
    solvay: {
        width: 1000,
        height: 400,
    },
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
  }));