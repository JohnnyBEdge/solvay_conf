// import React, {useState} from 'react';
// import ImgMap from '../ImgMap';
// import NavBar from '../NavBar';
// import Section from '../sections/Section1';
// import Lists from '../Lists';
// import Profile from '../Profile';
// import { makeStyles } from '@material-ui/core/styles';

// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
  
//   export default function Main() {
//     const [view, setView] = useState('')
//     const [listView, setListView] = useState('ImgMap');
//     const [section, setSection] = useState(0)
//     const classes = useStyles();

//     const viewProps = {
//       setView: setView, 
//       setSection: setSection,
//       section: section
//     }

//     // const currentView = <listView viewProps = {viewProps}/>

//     return (
//       <div className={classes.root}>
//         {/* <Grid container spacing={0}>
//           <Grid item xs={12}>
//             <Paper 
//                 className={`${classes.paper} ${classes.header}`}
//                 elevation={0}
//                 variant="outlined"
//                 square>The 1927 Solvay Conference</Paper>
//           </Grid>
//           <Grid item xs={2}>
//             <Paper 
//                 className={`${classes.paper} ${classes.nav}`}
//                 elevation={0}
//                 variant="outlined"
//                 square>
//                     <NavBar
//                         changeView={setView}
//                             />
//                 </Paper>
//           </Grid>
//           <Grid item xs={10}>
//             <Paper
//                 className={`${classes.paper} ${classes.main}`}
//                 elevation={0}
//                 variant="outlined"
//                 square>
//                     <ImgMap 
//                       setView={setView} 
//                       setSection={setSection}
//                       section={section} />
//             </Paper>
//           </Grid>
//         </Grid> */}
//       </div>
//     );
//   }

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       color: theme.palette.text.secondary,
//     },
//     main: {
//       height: '100%'
//     },
//     nav: {
//       height: '100%'
//     }
//   }));