import "./tutorial.css"

import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Home/Header';
import Tutorial_4_html from './Tutorial_4_html';

export default function TutorialPage4(props) {
    return (
        <section style={{backgroundColor: "white"}}>
            <Header></Header>
            <nav className="tutorialNav">
                <Link to='/tutorial' className="tutorial1" style={{width: "200px"}}><span>Subcortical Volume</span></Link>
                <Link to='/tutorial2'className="tutorial2" style={{width: "200px"}}><span>Cortical Thickness</span></Link>
                <Link to='/tutorial3'className="tutorial3" style={{width: "200px"}}><span>Surface area</span></Link>
                <Link to='/tutorial4'className="tutorial4" style={{width: "200px"}}><span>brainAge</span></Link>
                <div className="animation start-brainAge"></div>
            </nav>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={3} direction="row" justify="center" alignContent={"center"}>
                        <Grid>
                            <br/>
                            <h1 align="center">BrainAGE Prediction Model Generation and Application</h1>
                            <br/>
                            <Tutorial_4_html></Tutorial_4_html>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}
