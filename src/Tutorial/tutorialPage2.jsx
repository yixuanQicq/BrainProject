import React from 'react';
import Header from '../Home/Header';
import Grid from '@material-ui/core/Grid';
import "./tutorial.css"
import { Link } from 'react-router-dom';
import Tutorial_2_html from './Tutorial_2_html';



export default function TutorialPage2(props) {
    return (
        <section style={{backgroundColor: "white"}}>
            <Header></Header>
            <br/>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} >
                    <Grid container direction="row" justify="center" alignItems="center">
                        <nav aria-label="Page table of contents"><p>Contents</p>
                            <ul>
                                <li><Link to='/tutorial'><span>Tutorial</span></Link></li>
                                <li><Link to='/tutorial2'><span>Tutorial Enigma</span></Link></li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
                        <Grid>
                            <h1>Tutorial Engima</h1>
                            <Tutorial_2_html></Tutorial_2_html>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                </Grid>
            </Grid>
        </section>
    );
}
