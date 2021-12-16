import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./model.css"
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
}));

export default function ModelPage(props) {
    const classes = useStyles();

    return (
        <sections>
            <Header></Header>
            <nav>
                <Link to='/model2'><span>CentileBrain</span></Link>
                <Link to='/model'><span>Generate Normative Deviation Values for Your Data</span></Link>
                <div className="animation start-ownData"></div>
            </nav>
            <Grid container spacing={3} alignContent={"center"}>
                <Grid item xs={12} md={12} alignContent={"center"}>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <h2 align={"center"}>Coming Soon</h2>
                    </div>
                </Grid>
            </Grid>
        </sections>
    );
}