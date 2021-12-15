import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./explore.css"
import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="gender-label">Gender</InputLabel>
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
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="MM-label">Morphometric Modality</InputLabel>
                    <Select
                        labelId="MM-label"
                        id="MM-select"
                        value={morphometric}
                        label="morphometric"
                        onChange={handleMorphometricChange}
                    >
                        <MenuItem value={"volumes"}>Regional Subcortical volumes</MenuItem>
                        <MenuItem value={"Thickness"}>Regional Cortical Thickness</MenuItem>
                        <MenuItem value={"Area"}>Regional Cortical Area</MenuItem>
                    </Select>
                </FormControl>
            </Box>


        </sections>
    );
}