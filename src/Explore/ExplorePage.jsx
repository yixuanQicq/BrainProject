import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./explore.css"
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
}));

export default function ExplorePage(props) {

    return (
        <sections>
            <Header></Header>
            <nav>
                <Link to='/explore'><span>CentileBrain Data Vault</span></Link>
                <Link to='/explore2'><span>Visualize Regional Age-Related Curves</span></Link>
                <div className="animation start-centileModel"></div>
            </nav>
            <br/>
            <br/>
            <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <img src="https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Explore/data/age_distribution.jpg" width="100%"/>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src="https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Explore/data/CentileBrain_Map.jpg" width="100%" />
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>
            <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <h5 >Age and Sex of the CentileBrain Data Vault</h5>
                </Grid>
                <Grid item xs={12} md={5}>
                    <h5 >Geographical Distribution of the Datasets Contribution to the CentileBrain DataVault</h5>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
        </sections>
    );
}