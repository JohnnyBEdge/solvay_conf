import React, {useState} from 'react';
// import Section1 from './sections/Section1';
// import Section2 from './sections/Section2';
// import Section3 from './sections/Section3';
// import Section4 from './sections/Section4';
import Section from './sections/Section';

import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import solvay from './images/solvay-conf.jpg';
// import { getThemeProps } from '@material-ui/styles';
  
  export default function ImgMap(props) {
    

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>The 1927 Solvay Conference</h1>
            <p className={classes.instructions}>(Click the image to discover more)</p>

            <map name="map-overlay">
                <Link to={'/section'}>
                {/* <Link to={'/section1'}> */}
                    <area 
                        alt="Section one."
                        shape="rect" 
                        coords="0,0,250,400"
                        onClick={() => props.setSection(1)}/>
                </Link>
                <Link to={'/section'}>
                {/* <Link to={'/section2'}> */}
                    <area 
                        alt="Section two."
                        shape="rect" 
                        coords="250, 0, 480, 400"
                        onClick={() => props.setSection(2)}/>
                </Link>
                {/* <Link to={'/section3'}> */}
                <Link to={'/section'}>
                    <area 
                        alt="Section three."
                        shape="rect"
                        coords="480, 0, 775, 400"
                        onClick={() => props.setSection(3)}/>
                </Link>
                
                <Link to={'/section'}>
                {/* <Link to={'/section4'}> */}
                    <area 
                        alt="Section four."
                        shape="rect" 
                        coords="775, 0, 1000,400 "
                        onClick={() => props.setSection(4)}/>
                </Link>
            </map>
            <figure className={classes.imgContainer}>
                <img 
                    src={solvay}
                    className={classes.solvay}
                    useMap="#map-overlay" 
                    alt="A group photo of scientists from the 1927 Solvay Conference."/>
                <figcaption className={classes.caption}>
                    Scientists from left to right: 
                    <br/>
                        <b>Back row:</b> A. Piccard, E. Henriot, P. Ehrenfest, E. Herzen, Th. de Donder, E. Schrödinger, J. E. Verschaffelt,
                        W. Pauli, W. Heisenberg, R. H. Fowler, L. Brillouin;
                    <br/> 
                        <b>Middle row:</b> P. Debye, M. Knudsen, W.L. Bragg, H. A. Kramers, P. A. M. Dirac, A. H. Compton, L. de Broglie, M. Born, N. Bohr;
                    <br/> 
                        <b>Front row:</b> I. Langmuir, M. Planck, M. Curie, H.A . Lorentz, A. Einstein, P. Langevin, Ch.-E. Guye, C. T. R. Wilson, O. W. Richardson
                </figcaption>
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
    },
    caption: {
        fontSize: 14
    },
    title: {
        alignSelf: 'center',
        margin: 0,
        padding: 5
    },
    instructions: {
        alignSelf: 'center',
        fontSize: 15,
        padding: 0,
        margin: 0
    }
  }));