import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data.json'

export default function ScientistList(){
    const classes = useStyles();

    const scientists = data.map((person,index) => {
        return <li key={index}>{person.name}</li>
    })

    return (
        <div>
            <h2>Scientists</h2>
            <p>By scientists:</p>
            <ul>
                {scientists}
            </ul>
        </div>
    )
}

const useStyles = makeStyles(() => ({

  }));