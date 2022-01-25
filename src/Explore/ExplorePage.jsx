import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./explore.css"
import {
    Box,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    Switch
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Graphs from './Graphs';
const useStyles = makeStyles((theme) => ({
}));

export default function ExplorePage(props) {
    const classes = useStyles();
    const [gender, setGender] = React.useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const [morphometric, setMorphometric] = React.useState('');
    const handleMorphometricChange = (event) => {
        setMorphometric(event.target.value);
    };
    const [volumes, setVolumes] = React.useState('');
    const handleVolumesChange = (event) => {
        setVolumes(event.target.value);
    };
    const [thickness, setThickness] = React.useState('');
    const handleThicknessChange = (event) => {
        setThickness(event.target.value);
    };
    const [area, setArea] = React.useState('');
    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };
    const [MFPCurve, setMFPCurve] = React.useState(true);
    const handleCurveChange = (event) => {
        setMFPCurve(!MFPCurve);
    };


    return (
        <sections>
            <Header></Header>
            <nav>
                <Link to='/explore'><span>Visualize Regional Age-Related Curves</span></Link>
                <Link to='/explore2'><span>CentileBrain Data Vault</span></Link>
                <div className="animation start-centileModel"></div>
            </nav>
            <br/>
            <br/>
            <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={12} md={1}> </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="gender-label">Sex</InputLabel>
                            <Select
                                labelId="gender-label"
                                id="gender-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={"female"}>Female</MenuItem>
                                <MenuItem value={"male"}>Male</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="MM-label">Morphometric Measure</InputLabel>
                            <Select
                                labelId="MM-label"
                                id="MM-select"
                                value={morphometric}
                                label="morphometric"
                                onChange={handleMorphometricChange}
                            >
                                <MenuItem value={"volumes"}>Regional Subcortical Volumes</MenuItem>
                                <MenuItem value={"thickness"}>Regional Cortical Thickness</MenuItem>
                                <MenuItem value={"area"}>Regional Cortical Area</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12} md={3}>

                    <Box sx={{ minWidth: 120 }} hidden={morphometric !== "volumes"}>
                        <FormControl fullWidth>
                            <InputLabel id="volumes-label">Regional Subcortical Volumes</InputLabel>
                            <Select
                                labelId="volumes-label"
                                id="volumes-select"
                                value={volumes}
                                label="volumes"
                                onChange={handleVolumesChange}
                            >
                                <MenuItem value={"thalamus"}>Thalamus</MenuItem>
                                <MenuItem value={"caudate"}>Caudate</MenuItem>
                                <MenuItem value={"putamen"}>Putamen</MenuItem>
                                <MenuItem value={"pallidum"}>Pallidum</MenuItem>
                                <MenuItem value={"hippocampus"}>Hippocampus</MenuItem>
                                <MenuItem value={"amygdala"}>Amygdala</MenuItem>
                                <MenuItem value={"nucleusaccumbens"}>Nucleus Accumbens</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120 }} hidden={morphometric !== "thickness"}>
                        <FormControl fullWidth>
                            <InputLabel id="thickness-label">Regional Cortical Thickness</InputLabel>
                            <Select
                                labelId="thickness-label"
                                id="thickness-select"
                                value={thickness}
                                label="thickness"
                                onChange={handleThicknessChange}
                            >
                                <MenuItem value={"1"}>banks of the superior temporal sulcus</MenuItem>
                                <MenuItem value={"2"}>caudal anterior cingulate cortex</MenuItem>
                                <MenuItem value={"3"}>caudal middle frontal cortex</MenuItem>
                                <MenuItem value={"4"}>cuneus</MenuItem>
                                <MenuItem value={"5"}>entorhinal cortex</MenuItem>
                                <MenuItem value={"6"}>fusiform</MenuItem>
                                <MenuItem value={"7"}>inferior parietal cortex</MenuItem>
                                <MenuItem value={"8"}>inferior temporal cortex</MenuItem>
                                <MenuItem value={"9"}>isthmus cingulate cortex</MenuItem>
                                <MenuItem value={"10"}>lateral occipital cortex</MenuItem>
                                <MenuItem value={"11"}>lateral orbitofrontal cortex</MenuItem>
                                <MenuItem value={"12"}>lingual cortex</MenuItem>
                                <MenuItem value={"13"}>medial orbitofrontal cortex</MenuItem>
                                <MenuItem value={"14"}>middle temporal cortex</MenuItem>
                                <MenuItem value={"15"}>parahippocampal cortex</MenuItem>
                                <MenuItem value={"16"}>paracentral cortex</MenuItem>
                                <MenuItem value={"17"}>pars opercularis</MenuItem>
                                <MenuItem value={"18"}>pars orbitalis</MenuItem>
                                <MenuItem value={"19"}>pars triangularis</MenuItem>
                                <MenuItem value={"20"}>pericalcarine cortex</MenuItem>
                                <MenuItem value={"21"}>postcentral cortex</MenuItem>
                                <MenuItem value={"22"}>posterior cingulate cortex</MenuItem>
                                <MenuItem value={"23"}>precentral cortex</MenuItem>
                                <MenuItem value={"24"}>precuneus</MenuItem>
                                <MenuItem value={"25"}>rostral anterior cingulate cortex</MenuItem>
                                <MenuItem value={"26"}>rostral middle frontal cortex</MenuItem>
                                <MenuItem value={"27"}>superior frontal cortex</MenuItem>
                                <MenuItem value={"28"}>superior parietal cortex</MenuItem>
                                <MenuItem value={"29"}>superior temporal cortex</MenuItem>
                                <MenuItem value={"30"}>supramarginal cortex</MenuItem>
                                <MenuItem value={"31"}>frontal pole</MenuItem>
                                <MenuItem value={"32"}>temporal pole</MenuItem>
                                <MenuItem value={"33"}>transverse temporal cortex</MenuItem>
                                <MenuItem value={"34"}>insula</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120 }} hidden={morphometric !== "area"}>
                        <FormControl fullWidth>
                            <InputLabel id="volumes-label">Regional Cortical Area</InputLabel>
                            <Select
                                labelId="area-label"
                                id="area-select"
                                value={area}
                                label="area"
                                onChange={handleAreaChange}
                            >
                                <MenuItem value={"1"}>banks of the superior temporal sulcus</MenuItem>
                                <MenuItem value={"2"}>caudal anterior cingulate cortex</MenuItem>
                                <MenuItem value={"3"}>caudal middle frontal cortex</MenuItem>
                                <MenuItem value={"4"}>cuneus</MenuItem>
                                <MenuItem value={"5"}>entorhinal cortex</MenuItem>
                                <MenuItem value={"6"}>fusiform</MenuItem>
                                <MenuItem value={"7"}>inferior parietal cortex</MenuItem>
                                <MenuItem value={"8"}>inferior temporal cortex</MenuItem>
                                <MenuItem value={"9"}>isthmus cingulate cortex</MenuItem>
                                <MenuItem value={"10"}>lateral occipital cortex</MenuItem>
                                <MenuItem value={"11"}>lateral orbitofrontal cortex</MenuItem>
                                <MenuItem value={"12"}>lingual cortex</MenuItem>
                                <MenuItem value={"13"}>medial orbitofrontal cortex</MenuItem>
                                <MenuItem value={"14"}>middle temporal cortex</MenuItem>
                                <MenuItem value={"15"}>parahippocampal cortex</MenuItem>
                                <MenuItem value={"16"}>paracentral cortex</MenuItem>
                                <MenuItem value={"17"}>pars opercularis</MenuItem>
                                <MenuItem value={"18"}>pars orbitalis</MenuItem>
                                <MenuItem value={"19"}>pars triangularis</MenuItem>
                                <MenuItem value={"20"}>pericalcarine cortex</MenuItem>
                                <MenuItem value={"21"}>postcentral cortex</MenuItem>
                                <MenuItem value={"22"}>posterior cingulate cortex</MenuItem>
                                <MenuItem value={"23"}>precentral cortex</MenuItem>
                                <MenuItem value={"24"}>precuneus</MenuItem>
                                <MenuItem value={"25"}>rostral anterior cingulate cortex</MenuItem>
                                <MenuItem value={"26"}>rostral middle frontal cortex</MenuItem>
                                <MenuItem value={"27"}>superior frontal cortex</MenuItem>
                                <MenuItem value={"28"}>superior parietal cortex</MenuItem>
                                <MenuItem value={"29"}>superior temporal cortex</MenuItem>
                                <MenuItem value={"30"}>supramarginal cortex</MenuItem>
                                <MenuItem value={"31"}>frontal pole</MenuItem>
                                <MenuItem value={"32"}>temporal pole</MenuItem>
                                <MenuItem value={"33"}>transverse temporal cortex</MenuItem>
                                <MenuItem value={"34"}>insula</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12} md={1}>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend">Curves</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch checked={MFPCurve} onChange={handleCurveChange} color="primary" name="mfp" />
                                }
                                label="MFP Regression"
                            />
                            <FormControlLabel
                                control={
                                    <Switch checked={!MFPCurve} onChange={handleCurveChange} color="primary" name="centile" />
                                }
                                label="Centile Curve"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={1}/>
            </Grid>

            {/*Coming Soon Tab*/}
            <Grid container spacing={3} alignContent={"center"} hidden={morphometric === '' || morphometric === "volumes"}>
                <Grid item xs={12} md={12} alignContent={"center"}>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <h2 align={"center"}>Coming Soon</h2>
                    </div>
                </Grid>
            </Grid>

            <Graphs gender={gender} value={volumes} MFPCurve={MFPCurve} hidden={morphometric !== "volumes"}></Graphs>




        </sections>
    );
}