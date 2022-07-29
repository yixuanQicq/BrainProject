import "./model.css"

import {
    ButtonGroup,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Switch
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

import Header from '../Home/Header';
const useStyles = makeStyles((theme) => ({
}));

export default function ModelPage(props) {
    const classes = useStyles();
    const [morphometric, setMorphometric] = React.useState('');
    // true = female
    const [gender, setGender] = React.useState(true);
    const handleGenderChange = (event) => {
        setGender(!gender);
    };

    function renderUrl() {
        if(morphometric === "" || morphometric === "volumes") {
            if (gender) {
                return "https://centilebrain-app.shinyapps.io/SV-FEMALE/";
            } else {
                // return "";
                return "https://centilebrain-app.shinyapps.io/SV-MALE/";
            }
        } else if (morphometric === "thickness") {
            if (gender) {
                return "https://centilebrain-applications.shinyapps.io/CT-FEMALE/";
            } else {
                return "https://centilebrain-applications.shinyapps.io/CT-MALE/";
            }
        } else {
            if (gender) {
                return "https://centilebrain-app.shinyapps.io/SA-FEMALE/";
            } else {
                return "https://centilebrain-app.shinyapps.io/SA-MALE/";
            }
        }
    }

    return (
        <sections>
            <Header></Header>
            <nav>
                <Link to='/model2'><span>CentileBrain</span></Link>
                <Link to='/model'><span>Generate Normative Deviation Values for Your Data</span></Link>
                <div className="animation start-ownData"></div>
            </nav>

            <Grid container spacing={3} style={{alignItems: 'center', marginTop: "2rem"}}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={10}>
                    <ButtonGroup variant="contained" aria-label="outlined button group" style={{width: "100%"}}>
                        {(morphometric === "volumes" || morphometric === "")&&
                        <Button style={{width: "33.3333%", backgroundColor: "#659bdf", borderRadius: 5}} onClick={() => {
                            setMorphometric("volumes");
                            }}>Subcortical Volume
                        </Button>}
                        {(morphometric !== "volumes" && morphometric !== "") &&
                        <Button style={{width: "33.3333%", backgroundColor: "#fafafa", borderRadius: 5}} onClick={() => {
                            setMorphometric("volumes");
                            }}>Subcortical Volume
                        </Button>}

                        {(morphometric === "thickness") &&
                        <Button style={{width: "33.3333%", backgroundColor: "#659bdf", borderRadius: 5}} onClick={() => {
                            setMorphometric("thickness");
                            }}>Cortical Thickness
                        </Button>}
                        {(morphometric !== "thickness") &&
                        <Button style={{width: "33.3333%", backgroundColor: "#fafafa", borderRadius: 5}} onClick={() => {
                            setMorphometric("thickness");
                        }}>Cortical Thickness
                        </Button>}

                        {(morphometric === "area") &&
                        <Button style={{width: "33.3333%", backgroundColor: "#659bdf", borderRadius: 5}} onClick={() => {
                            setMorphometric("area");
                        }}>Surface Area</Button>}
                        {(morphometric !== "area") &&
                        <Button style={{width: "33.3333%", backgroundColor: "#fafafa", borderRadius: 5}} onClick={() => {
                            setMorphometric("area");
                        }}>Surface Area</Button>}
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>

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