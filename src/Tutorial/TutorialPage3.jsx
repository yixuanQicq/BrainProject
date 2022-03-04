import React from 'react';
import Header from '../Home/Header';
import Grid from '@material-ui/core/Grid';
import "./tutorial.css"
import { Link } from 'react-router-dom';
import Tutorial_3_html from './Tutorial_3_html';

export default function TutorialPage3(props) {
    return (
        <section style={{backgroundColor: "white"}}>
            <Header></Header>
            <nav>
                <Link to='/tutorial' className="tutorial1" style={{width: "233px"}}><span>Subcortical Volume</span></Link>
                <Link to='/tutorial2'className="tutorial2" style={{width: "233px"}}><span>Cortical Thickness</span></Link>
                <Link to='/tutorial3'className="tutorial3" style={{width: "233px"}}><span>Surface area</span></Link>
                <div className="animation start-area"></div>
            </nav>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={3} direction="row" justify="center" alignContent={"center"}>
                        <Grid>
                            <br/>
                            <h1 align="center">Model Generation and Application for Surface area</h1>
                            <br/>
                            <Tutorial_3_html></Tutorial_3_html>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}
