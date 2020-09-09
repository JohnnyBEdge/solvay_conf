import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import temp from './images/temp.jpg';
import data from './data.json'

export default function Profile(props){
    // const person = props.person
    const tempPerson = data[0];
    console.log("temp", tempPerson)
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h2>{tempPerson.name}</h2>
            {/* Can you dynamically change alt to match real name? */}
            <img src={temp} className={classes.image} alt="Image of scientist"/>
    <p>Born: {tempPerson.dob} in {tempPerson.origin}</p>
            <p>Dicipline: {tempPerson.dicipline}</p>
            <p>Notable work: {tempPerson.notable}</p>
            <a href={tempPerson.wiki}>Click here to learn more!</a>

        </div>
    )
}

const useStyles = makeStyles(() => ({
    image: {
        maxWidth: 300,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: 400,
        margin: "0 auto"
    }
  }));