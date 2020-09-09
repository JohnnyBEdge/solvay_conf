import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data.json'

export default function Lists(){
    const classes = useStyles();

    let countries = data.reduce((r, a) => {
        r[a.origin] = [...r[a.origin] || [], a.name];
        return r;
       }, []);

    const scientist = data.map((person,index) => {
        return <li key={index}>{person.name}</li>
    })

    const country = Object.keys(countries).map((x) => {
return <h3>{x}</h3>
    })

    const items = Object.entries(countries).forEach(([key, [value]]) => {
    return  (<>
        <h3>{key}</h3>
            <ul>
                <li>{value}</li>
            </ul>
            </>)
    })
    




// let countries = data.reduce((r, a) => {
//     r[a.origin] = [...r[a.origin] || [], a.name];
//     return r;
//    }, []);
//    Object.keys(countries).forEach(x => 
//     return <h3>x</h3> 
//     Object.values(countries)))

// let countryList = countries.map(country => 
//     <h3>country</h3>
//     <ul>
//         <li>countrye</li>
//     </ul>
// )


    return (
        <div>
            <h2>Current View Goes Here</h2>
            <ul>
                {scientist}
            </ul>
            COUNTRIES:
            {country}
            ITEMS
            {items}

        </div>
    )
}

const useStyles = makeStyles(() => ({

  }));