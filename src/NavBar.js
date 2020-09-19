import React from 'react';
import Lists from './Lists';
import ImgMap from './ImgMap';
import { makeStyles } from '@material-ui/core/styles';
import CountriesList from './CountriesList';
import ScientistList from './ScientistList';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import { Link } from 'react-router-dom';





export default function NavBar(props){
    
    const classes = useStyles();
    return (
        
         <div>
             <div className={classes.listTitle}>
                <h3 >Browse By:</h3>
             </div>
             
            <ul className={classes.list}>
                <li className={classes.item}>
                    <Link to={'/image'}>Image</Link>
                </li>
                <li 
                    className={classes.item}>
                    <Link to={'/scientists'}>Scientists</Link>
                </li>
                <li className={classes.item}>
                <Link to={'/countries'}>Countries</Link>
                </li>
            </ul>
         </div>
    )
}

const useStyles = makeStyles(() => ({
    list: {
        listStyle: "none",
        borderRight: 'solid black 1px',
        height: 400,
        
    },
    item: {
        padding: 5
    },
    listTitle: {
        borderBottom: 'solid black 1px',
        width: 125,
        margin: '0 auto'
    }
  }));