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
            <nav>
                <Link to='/tutorial' className="tutorial1" style={{width: "233px"}}><span>Subcortical Volume</span></Link>
                <Link to='/tutorial2'className="tutorial2" style={{width: "233px"}}><span>Cortical Thickness</span></Link>
                <Link to='/tutorial3'className="tutorial3" style={{width: "233px"}}><span>Surface area</span></Link>
                <div className="animation start-thickness"></div>
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
        </section>
    );
}
