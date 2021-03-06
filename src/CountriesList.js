import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data.json'
import {Link} from 'react-router-dom';

export default function CountriesList(props){
    const classes = useStyles();

    let countries = data.reduce((r, a) => {
        r[a.origin] = [...r[a.origin] || [], a.name];
        return r;
       }, []);

    const country = Object.entries(countries).map(([key, values, index]) => {
        return  (<div className={classes.listContainer}>
            <h4 key={index}>{key}</h4>
                <ul className={classes.list}>
                    {values.map(value =>
                     
                        <li 
                            className={classes.item} 
                            key={index}
                            onClick={() => props.setProfile(value.split(' ').slice(-1)[0])}>
                            <Link 
                                to={`${/profile/}${value.split(' ').slice(-1)[0]}`}
                                className={classes.link}
                                > {value}
                            </Link>

                        </li>)}
                </ul>
                </div>)
        })
    
    return (
        <div className={classes.container}>
            <h2>Scientists By Countries</h2>
            <div className={classes.countries}>
                {country}
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    item: {
        lineHeight: 1.5,
        fontSize: 20,
        listStyle: 'none',
        width: '100%',
        display: 'inline-block',
    },
    countries: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        padding: 0
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    container: {
        height: '100vh'
    },
    list: {
        paddingLeft: 0
    }
  }));