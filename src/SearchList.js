import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function SearchList(){
    const classes = useStyles();
    return (
        <div>
            <h3>Browse</h3>
            <ul className={classes.list}>
                <li className={classes.item}>Image</li>
                <li className={classes.item}>Scientists</li>
                <li className={classes.item}>Subjects</li>
                <li className={classes.item}>Countries</li>
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