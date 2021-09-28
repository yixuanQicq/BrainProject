import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
const useStyles = makeStyles((theme) => ({
}));

export default function PublicationsPage(props) {
    const classes = useStyles();

    return (
        <sections>
            <Header></Header>
            <p>publications page</p>
        </sections>
    );
}
