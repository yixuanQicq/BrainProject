import React from 'react';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe';

export default function Graphs(props) {
    let html1;
    let html2;

    function renderWidth() {
        if (props.hidden) {
            return "0px";
        }
        return "100%";
    }

    function renderSwitchLeft() {
        let filePath = "https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/";
        //let filePath = "";
        if (props.gender === ``) {
            return "";
        }
        if (props.morphometric === "volumes") {
            if (props.value === '') {
                return "";
            }
            if (props.gender === "female" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/sv/femaleMFP";
            } if (props.gender === "female" && !props.MFPCurve) {
                filePath = filePath + "src/Explore/data/sv/femaleCentile";
            } if (props.gender === "male" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/sv/maleMFP";
            } if (props.gender === "male" && !props.MFPCurve){
                filePath =  filePath + "src/Explore/data/sv/maleCentile";
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

        if (props.morphometric === "thickness") {
            if (props.thickness === '') {
                return "";
            }
            if (props.gender === "female" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ct/femaleMFP";
            } if (props.gender === "female" && !props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ct/femaleCentile";
            } if (props.gender === "male" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ct/maleMFP";
            } if (props.gender === "male" && !props.MFPCurve){
                filePath =  filePath + "src/Explore/data/ct/maleCentile";
            }
            console.log(filePath + "/" + props.thickness + ".html");
            return filePath + "/" + props.thickness + ".html";
        } else {
            if (props.area === '') {
                return "";
            }
            if (props.gender === "female" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ca/femaleMFP";
            } if (props.gender === "female" && !props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ca/femaleCentile";
            } if (props.gender === "male" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ca/maleMFP";
            } if (props.gender === "male" && !props.MFPCurve){
                filePath =  filePath + "src/Explore/data/ca/maleCentile";
            }
            return filePath + "/" + props.area + ".html";
        }
    }

    function renderSwitchRight() {
        let filePath = "https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/";
        if (props.gender === ``) {
            return "";
        }
        if (props.morphometric === "volumes") {
            if (props.value === '') {
                return "";
            }
            if (props.gender === "female" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/sv/femaleMFP";
            } if (props.gender === "female" && !props.MFPCurve) {
                filePath = filePath + "src/Explore/data/sv/femaleCentile";
            } if (props.gender === "male" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/sv/maleMFP";
            } if (props.gender === "male" && !props.MFPCurve){
                filePath =  filePath + "src/Explore/data/sv/maleCentile";
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
        if (props.morphometric === "thickness") {
            if (props.thickness === '') {
                return "";
            }
            if (props.gender === "female" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ct/femaleMFP";
            } if (props.gender === "female" && !props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ct/femaleCentile";
            } if (props.gender === "male" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ct/maleMFP";
            } if (props.gender === "male" && !props.MFPCurve){
                filePath =  filePath + "src/Explore/data/ct/maleCentile";
            }
            let value = 34 + parseInt(props.thickness);
            console.log(filePath + "/" + value.toString() + ".html")
            return filePath + "/" + value + ".html";
        } else {
            if (props.area === '') {
                return "";
            }
            if (props.gender === "female" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ca/femaleMFP";
            } if (props.gender === "female" && !props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ca/femaleCentile";
            } if (props.gender === "male" && props.MFPCurve) {
                filePath = filePath + "src/Explore/data/ca/maleMFP";
            } if (props.gender === "male" && !props.MFPCurve){
                filePath =  filePath + "src/Explore/data/ca/maleCentile";
            }
            let value = String.valueOf(34 + parseInt(props.area));
            return filePath + "/" + value + ".html";
        }

    }

    function renderHtmlLeft(url) {
        if(url) {
            fetch(url).then(async fileText => html1 = await fileText.text()).then(() => {
                    document.getElementsByTagName('iframe')[0].src=URL.createObjectURL(new Blob([html1], {type :'text/html'}));
                }
            );
        }
    }

    function renderHtmlRight(url) {
        if(url) {
            fetch(url).then(async fileText => html2 = await fileText.text()).then(() => {
                    document.getElementsByTagName('iframe')[1].src=URL.createObjectURL(new Blob([html2], {type :'text/html'}));
                }
            );
        }
    }

    return(
        <Grid container spacing={3} style={{alignItems: 'center', marginTop: "2rem"}} hidden={props.value === ''}>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={5}>
                <div style={{alignItems: 'center'}}>
                    <Iframe url={renderHtmlLeft(renderSwitchLeft())} width={renderWidth()} height="300px"></Iframe>
                </div>
            </Grid>
            <Grid item xs={12} md={5}>
                <div style={{alignItems: 'center'}}>
                    <Iframe url={renderHtmlRight(renderSwitchRight())} width={renderWidth()} height="300px"></Iframe>
                </div>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
        </Grid>
    );
}