import React from 'react';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe';

export default function Graphs(props) {

    function renderWidth() {
        if (props.hidden) {
            return "0px";
        }
        return "100%";
    }

    function renderSwitchLeft() {
        let filePath = "./";
        if (props.gender === ``) {
            return "";
        }
        if (props.gender === "female" && props.MFPCurve) {
            filePath = filePath + "src/Explore/femaleMFP";
        } if (props.gender === "female" && !props.MFPCurve) {
            filePath = filePath + "src/Explore/femaleCentile";
        } if (props.gender === "male" && props.MFPCurve) {
            filePath = filePath + "src/Explore/maleMFP";
        } if (props.gender === "male" && !props.MFPCurve){
            filePath =  filePath + "src/Explore/maleCentile";
        }
        switch(props.value) {
            case 'thalamus':
                return filePath + '/1.html';
            case 'caudate':
                return filePath + '/3.html';
            case 'putamen':
                return filePath + '/5.html';
            case 'pallidum':
                return filePath + '/7.html';
            case 'hippocampus':
                return filePath + '/9.html';
            case 'amygdala':
                return filePath + '/11.html';
            case 'nucleusaccumbens':
                return filePath + '/13.html';
            default:
                return "";
        }
    }

    function renderSwitchRight() {
        let filePath = "./";
        if (props.gender === ``) {
            return "";
        }
        if (props.gender === "female" && props.MFPCurve) {
            filePath = filePath + "src/Explore/femaleMFP";
        } if (props.gender === "female" && !props.MFPCurve) {
            filePath = filePath + "src/Explore/femaleCentile";
        } if (props.gender === "male" && props.MFPCurve) {
            filePath = filePath + "src/Explore/maleMFP";
        } if (props.gender === "male" && !props.MFPCurve){
            filePath =  filePath + "src/Explore/maleCentile";
        }
        switch(props.value) {
            case 'thalamus':
                return filePath + '/2.html';
            case 'caudate':
                return filePath + '/4.html';
            case 'putamen':
                return filePath + '/6.html';
            case 'pallidum':
                return filePath + '/8.html';
            case 'hippocampus':
                return filePath + '/10.html';
            case 'amygdala':
                return filePath + '/12.html';
            case 'nucleusaccumbens':
                return filePath + '/14.html';
            default:
                return "";
        }
    }


    return(
        <Grid container spacing={3} style={{alignItems: 'center', marginTop: "2rem"}}>
            <Grid item xs={12} md={1}></Grid>

            <Grid item xs={12} md={5}>
                <div style={{alignItems: 'center'}}>
                    <Iframe url={renderSwitchLeft()} width={renderWidth()} height="300px"></Iframe>
                </div>
            </Grid>
            <Grid item xs={12} md={5}>
                <div style={{alignItems: 'center'}}>
                    <Iframe url={renderSwitchRight()} width={renderWidth()} height="300px"></Iframe>
                </div>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
        </Grid>
    );
}