import React from 'react';
import Lists from './Lists';
import ImgMap from './ImgMap';
import { makeStyles } from '@material-ui/core/styles';
import CountriesList from './CountriesList';
import ScientistList from './ScientistList';


export default function NavBar(props){
    const classes = useStyles();
    return (
        <div>
            <h3>Browse</h3>
            <ul className={classes.list}>
                <li 
                    className={classes.item}
                    onClick={() => props.changeView(<ImgMap/>)}>
                    Image</li>
                <li 
                    className={classes.item}
                    onClick={() => {
                        props.changeView(<ScientistList/>)
                        // props.setListView('scientists')
                    }}>
                    Scientists</li>
                <li className={classes.item}
                    onClick={() => {
                        props.changeView(<CountriesList/>)
                        // props.setListView('countries')
                    }}>
                    Countries</li>
            </ul>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    list: {
        listStyle: "none"
    },
    item: {
        padding: 5
    }
  }));