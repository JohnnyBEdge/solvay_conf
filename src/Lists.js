import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data.json'

export default function Lists(){
    const classes = useStyles();

    let countries = data.reduce((r, a) => {
        r[a.origin] = [...r[a.origin] || [], a.name];
        return r;
       }, []);

    const scientists = data.map((person,index) => {
        return <li key={index}>{person.name}</li>
    })

    const country = Object.entries(countries).map(([key, values, index]) => {
        return  (<>
            <h3 key={index}>{key}</h3>
                <ul>
                    {values.map(value => <li key={index}>{value}</li>)}
                </ul>
                </>)
        })
    


    return (
        <div>
            <h2>Current View Goes Here</h2>
            <p>By scientists:</p>
            <ul>
                {scientists}
            </ul>
            <p>By country:</p>
                {country}


        </div>
    )
}

const useStyles = makeStyles(() => ({

  }));