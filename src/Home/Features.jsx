import Grid from '@material-ui/core/Grid';
import React from 'react';
import './feature.css';
import { Link } from 'react-router-dom';

export default function Features() {

    return (
        <div style={{ paddingLeft: '8rem', paddingRight: '8rem' }}>
            <Grid container spacing={10} alignItems={'stretch'}>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/explore">
                            <img
                                src='https://raw.githubusercontent.com/yixuanQicq/BrainProject/50add014ad94a08a6412abce038c75e098482865/src/Home/data/explore2.svg'
                                width='100%' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '1rem' }}>
                        <h5>Explore the CentileBrain Dataset</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/model">
                            <img
                                src='https://raw.githubusercontent.com/yixuanQicq/BrainProject/50add014ad94a08a6412abce038c75e098482865/src/Home/data/iStock-1251018502%20Upload.svg'
                                width='100%' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '1rem' }}>
                        <h5>Use CentileBrain to Generate Estimates</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/model2">
                            <img
                                src='https://raw.githubusercontent.com/yixuanQicq/BrainProject/50add014ad94a08a6412abce038c75e098482865/src/Home/data/iStock-1155106799_Model.svg'
                                width='100%' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '1rem' }}>
                        <h5>The CentileBrain Model</h5>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={10} alignItems={'stretch'}>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/team">
                            <img
                                src='https://raw.githubusercontent.com/yixuanQicq/BrainProject/50add014ad94a08a6412abce038c75e098482865/src/Home/data/iStock-966858736_Team.svg'
                                width='100%' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '1rem' }}>
                        <h5>CentileBrain Development Team</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/publications">
                            <img
                                src='https://raw.githubusercontent.com/yixuanQicq/BrainProject/50add014ad94a08a6412abce038c75e098482865/src/Home/data/iStock-1323841513%20publications.svg'
                                width='100%' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '1rem' }}>
                        <h5>CentileBrain Publications</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to='/engima'>
                            <img
                                src='https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Home/data/enigma.jpeg'
                                width='100%' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '1rem' }}>
                        <h5>Learn More About ENIGMA Consortium</h5>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}