import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import temp from './images/profilePics/temp.jpg';
import data from './data.json'

export default function Profile(props){
    const personData = data.find(person => person.name.includes(props.profile));
    const classes = useStyles();

    console.log("PersonData", personData)

    return (
        <div className={classes.container}>
            
            <img src={personData.profilePic ||temp} className={classes.image} alt={`Scientist: ${personData.name}`}/>
            <div className={classes.info}>
                <h2>{personData.name}</h2>
                <p><b>Born: </b>{personData.dob} in {personData.origin}</p>
                <p><b>Dicipline:</b> {personData.dicipline}</p>
                <p><b>Notable work:</b> {personData.notable}</p>
                <a href={personData.wiki}>Click here to learn more!</a>
            </div>

        </div>
    )
}

const useStyles = makeStyles(() => ({
    image: {
        maxWidth: 300,
        maxHeight: 400,
        margin: 20,
    },
    container: {
        display: "flex",
        width: 800,
        margin: "0 auto",
        height: '100vh',
        marginTop: 38
    }
  }));