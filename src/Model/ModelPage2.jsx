import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./model.css"
import Grid from '@material-ui/core/Grid';
import Model_2_html from './model_2_html';
const useStyles = makeStyles((theme) => ({
}));

export default function ModelPage2(props) {
    const classes = useStyles();

    return (
        <sections>
            <Header></Header>
            <nav>
                <Link to='/model2'><span>CentileBrain</span></Link>
                <Link to='/model'><span>Generate Normative Deviation Values for Your Data</span></Link>
                <div className="animation start-centileModel"></div>
            </nav>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                        <Grid>
                            <br/>
                            <h1>CentileBrain Model</h1>
                            <br/>
                            <Model_2_html></Model_2_html>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                </Grid>
            </Grid>
        </sections>
    );
}