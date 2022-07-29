import "./brainAge.css";

import { FormControl, FormControlLabel, RadioGroup, Switch } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

import Header from '../Home/Header';

export default function BrainAgeModelPage(props) {
    // true = female
    const [gender, setGender] = React.useState(true);
    const handleGenderChange = (event) => {
        setGender(!gender);
    };

    function renderUrl() {
        if(gender) {
            return "https://brainage.shinyapps.io/female/";
        } else {
            return "https://brainage.shinyapps.io/male/";
        }
    }

    return(
        <sections>
            <Header></Header>
            <nav className="brainAgeModelNav">
                <Link to='/brainAge' className="brainAge" style={{width: "500px"}}><span>Generate Developmental BrainAGE for Your Data</span></Link>
                <div className="animation start-brainAgeModel"></div>
            </nav>

            <Grid container spacing={3} style={{alignItems: 'center', marginTop: "0.2rem"}}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={10}>
                    <FormControl component="fieldset" variant="standard">
                        <RadioGroup>
                            <FormControlLabel
                                control={
                                    <Switch checked={gender} onChange={handleGenderChange} color="primary" name="female" />
                                }
                                label="Female"
                            />
                            <FormControlLabel
                                control={
                                    <Switch checked={!gender} onChange={handleGenderChange} color="primary" name="male" />
                                }
                                label="Male"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>

            <Grid container spacing={3} style={{alignItems: 'center'}}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={10}>
                    <div style={{alignItems: 'center'}}>
                        <Iframe url={renderUrl()} width="100%" height="1000px"></Iframe>
                    </div>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>

        </sections>
    );
}