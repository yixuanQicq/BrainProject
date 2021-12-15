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
            <nav>
                <Link to='/tutorial'><span>Use the CentileBrain Model </span></Link>
                <Link to='/tutorial2'><span>Applying CentileBrain Model to Your Own Data </span></Link>
                <div className="animation start-ownData"></div>
            </nav>
            <br/>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={12} md={2} >
                </Grid>
                <Grid item xs={12} md={8}>
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
