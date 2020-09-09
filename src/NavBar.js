import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function NavBar(props){
    const classes = useStyles();
    return (
        <div>
            <h3>Browse</h3>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <a onClick={props.changeView('image')}>
                        Image</a></li>
                <li className={classes.item}>
                    <a onClick={props.changeView('scientists')}>
                        Scientists</a></li>
                <li className={classes.item}>
                    <a onClick={props.changeView('country')}>
                        Countries</a></li>
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