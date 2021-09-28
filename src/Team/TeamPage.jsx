import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
const useStyles = makeStyles((theme) => ({
}));

export default function TeamPage(props) {
    const classes = useStyles();

    return (
        <sections>
            <Header></Header>
            <p>team page</p>
        </sections>
    );
}
