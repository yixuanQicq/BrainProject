import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./model.css"
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe';
import Button from '@material-ui/core/Button';
import {
    ButtonGroup,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    MenuItem,
    RadioGroup,
    Switch
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
}));

export default function ModelPage(props) {
    const classes = useStyles();
    const [morphometric, setMorphometric] = React.useState('');
    // true = female
    const [gender, setGender] = React.useState(false);
    const handleGenderChange = (event) => {
        setGender(!gender);
    };

    function renderUrl() {
        if(morphometric === "" || morphometric === "volumes") {
            if (gender) {
                return "";
            } else {
                // return "";
                return "https://centilebrain-subcortical-volume.shinyapps.io/583e8447ea96482c9ed9bb6b26e74c0c/";
            }
        } else if (morphometric === "thickness") {
            if (gender) {
                return "";
            } else {
                return "";
            }
        } else {
            if (gender) {
                return "";
            } else {
                return "";
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
                        {/*<h1 hidden={(morphometric !== "volumes" && morphometric !== "")|| !gender}>1.1</h1>*/}
                        {/*<h1 hidden={morphometric !== "volumes" || gender}>1.2</h1>*/}
                        {/*<h1 hidden={morphometric !== "thickness" || !gender}>2.1</h1>*/}
                        {/*<h1 hidden={morphometric !== "thickness" || gender}>2.2</h1>*/}
                        {/*<h1 hidden={morphometric !== "area" || !gender}>3.1</h1>*/}
                        {/*<h1 hidden={morphometric !== "area" || gender}>3.2</h1>*/}
                        <Iframe url={renderUrl()} width="100%" height="1000px"></Iframe>
                    </div>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>
        </sections>
    );
}