import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import temp from './images/profilePics/temp.jpg';
import data from './data.json'
import images from './images/images'



export default function Profile(props){
    const personData = data.find(person => person.name.toLowerCase().includes(props.profile));

    const classes = useStyles();
    const image = images.map(image => <img src={image.src} /> );


    return (
        <div className={classes.container}>
            <h2>{personData.name}</h2>
            <img src={temp} className={classes.image} alt={`Scientist: ${personData.name}`}/>

            {image}

    <p>Born: {personData.dob} in {personData.origin}</p>
            <p>Dicipline: {personData.dicipline}</p>
            <p>Notable work: {personData.notable}</p>
            <a href={personData.wiki}>Click here to learn more!</a>

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