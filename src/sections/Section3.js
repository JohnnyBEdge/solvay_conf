// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import {Link} from 'react-router-dom';

// import section3 from '../images/section3.png';
  
//   export default function Section3(props) {
//     const classes = useStyles();

//     return (
//         <div>
//             <h1>Section 3</h1>
//             <map name="map-overlay">
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Theophile de Donder."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Donder')}
//                         coords="5, 35, 40, 80"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Erwin Schrödinger."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Schrodinger')}
//                         coords="85, 10, 125, 65"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Jules-Émile Verschaffelt."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Verschaffelt')}
//                         coords="160, 20, 200, 75"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Wolfgang Pauli."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Pauli')}
//                         coords="230, 10, 277, 65"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Paul Dirac."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Dirac')}
//                         coords="8, 78, 52, 125"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Arthur Compton."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Compton')}
//                         coords="100, 78, 140, 115"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Louis de Broglie."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Broglie')}
//                         coords="206, 83, 240, 130 "/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Albert Einstein."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Einstein')}
//                         coords="68, 112, 112, 165"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Paul Langevin."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Langevin')}
//                         coords="180, 115, 215, 170"/>
//                 </Link>
//                 <Link to={'/profile'}>
//                     <area 
//                         alt="Scientist: Charles-Eugène Guye."
//                         shape="rect" 
//                         onClick={() => props.setProfile('Guye')}
//                         coords="253, 115, 290, 170"/>
//                 </Link>
//             </map>
//             <div className={classes.imgContainer}>
//                 <img 
//                     src={section3}
//                     className={classes.solvay}
//                     usemap="#map-overlay" 
//                     alt="A group photo of scientists from the 1927 Solvay Conference."/>
//                 {/* <figcaption>Scientists from the 1927 Solvay Conference.</figcaption> */}
//             </div>
           
//         </div>
//     )
//   }

//   const useStyles = makeStyles(() => ({
//     solvay: {
//         height: 400
//     }
//   }));