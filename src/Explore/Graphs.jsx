import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Graphs(props) {
    function renderSwitchLeft() {
        let filePath = "https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/";
        if (props.gender === ``) {
            return "";
        }
        if (props.gender === "female" && props.MFPCurve) {
            filePath = filePath + "src/Explore/femaleMFP";
        } if (props.gender === "female" && !props.MFPCurve) {
            filePath = filePath + "src/Explore/maleMFP";
        } if (props.gender === "male" && props.MFPCurve) {
            filePath = "male MFPCurve";
        } if (props.gender === "male" && !props.MFPCurve){
            filePath = "male CentileCurve";
        }
        switch(props.value) {
            case 'thalamus':
                return filePath + '/1.png';
            case 'caudate':
                return filePath + '/3.png';
            case 'putamen':
                return filePath + '/5.png';
            case 'pallidum':
                return filePath + '/7.png';
            case 'hippocampus':
                return filePath + '/9.png';
            case 'amygdala':
                return filePath + '/11.png';
            case 'nucleusaccumbens':
                return filePath + '/13.png';
            default:
                return "";
        }
    }

    function renderSwitchRight() {
        let filePath = "https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/";
        if (props.gender === ``) {
            return "";
        }
        if (props.gender === "female" && props.MFPCurve) {
            filePath = filePath + "src/Explore/femaleMFP";
        } if (props.gender === "female" && !props.MFPCurve) {
            filePath = filePath + "src/Explore/maleMFP";
        } if (props.gender === "male" && props.MFPCurve) {
            filePath = "male MFPCurve";
        } if (props.gender === "male" && !props.MFPCurve){
            filePath = "male CentileCurve";
        }
        switch(props.value) {
            case 'thalamus':
                return filePath + '/2.png';
            case 'caudate':
                return filePath + '/4.png';
            case 'putamen':
                return filePath + '/6.png';
            case 'pallidum':
                return filePath + '/8.png';
            case 'hippocampus':
                return filePath + '/10.png';
            case 'amygdala':
                return filePath + '/12.png';
            case 'nucleusaccumbens':
                return filePath + '/14.png';
            default:
                return "";
        }
    }


    return(
        <Grid container spacing={3} style={{alignItems: 'center', marginTop: "2rem"}}>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={5}>
                <div style={{alignItems: 'center'}}>
                    <img hidden={props.isHidden} style={{width: '100%'}} src={renderSwitchLeft()}></img>
                </div>
            </Grid>
            <Grid item xs={12} md={5}>
                <div style={{alignItems: 'center'}}>
                    <img hidden={props.isHidden} style={{width: '100%'}} src={renderSwitchRight()}></img>
                </div>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
        </Grid>
    );
}