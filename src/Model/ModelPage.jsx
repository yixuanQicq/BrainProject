import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./model.css"
const useStyles = makeStyles((theme) => ({
}));

export default function ModelPage(props) {
    const classes = useStyles();

    return (
        <sections>
            <Header></Header>
            <nav>
                <Link to='/model'><span>Generate Normative Deviation Values for Your Data</span></Link>
                <Link to='/model2'><span>CentileBrain</span></Link>
                <div className="animation start-centileModel"></div>
            </nav>
            <br/>
            <br/>
        </sections>
    );
}