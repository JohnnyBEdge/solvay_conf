import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data.json'

export default function ScientistList(){
    const classes = useStyles();

    const scientists = 
        data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        .map((person,index) => {
        return <li 
                className={classes.item}
                key={index}>{person.name}</li>
    })

    return (
        <div className={classes.scientists}>
            <h2>Scientists</h2>
            <ul className={classes.list}>
                {scientists}
            </ul>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    item: {
        lineHeight: 1.5,
        fontSize: 20,
        listStyle: 'none',
        width: '100%'
    },
    list: {
        columns: '100px 3',
    },
    scientists: {
        height: '100vh'
    }
  }));