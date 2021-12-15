import React from 'react';
import Header from '../Home/Header';
import Grid from '@material-ui/core/Grid';
import Tutorial_1_html from './Tutorial_1_html';
import "./tutorial.css"
import { Link } from 'react-router-dom';



export default function TutorialPage(props) {
    return (
        <section style={{backgroundColor: "white"}}>
            <Header></Header>
            <br/>
            <nav>
                <Link to='/tutorial'><span>Use the CentileBrain Model </span></Link>
                <Link to='/tutorial2'><span>Applying CentileBrain Model to Your Own Data </span></Link>
                <div className="animation start-centileModel"></div>
            </nav>
            <br/>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={12} md={2} >
                    {/*<Grid container direction="row" justify="center" alignItems="center">*/}
                    {/*    <nav aria-label="Page table of contents"><p>Contents</p>*/}
                    {/*        <ul>*/}
                    {/*            <li><Link to='/tutorial'><span>Tutorial</span></Link></li>*/}
                    {/*            <li><Link to='/tutorial2'><span>Tutorial Enigma</span></Link></li>*/}
                    {/*        </ul>*/}
                    {/*    </nav>*/}
                    {/*</Grid>*/}
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
                        <Grid>
                            <h1>Tutorial</h1>
                            <Tutorial_1_html></Tutorial_1_html>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                </Grid>
            </Grid>
        </section>
    );
}
