import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';
import "./explore.css"
const useStyles = makeStyles((theme) => ({
}));

export default function ExplorePage2(props) {
    const classes = useStyles();

    return (
        <sections>
            <Header></Header>
            <br/>
            <nav>
                <Link to='/explore'><span>Visualize Regional Age-Related Curves</span></Link>
                <Link to='/explore2'><span>CentileBrain Data Vault</span></Link>
                <div className="animation start-ownData"></div>
            </nav>
            <br/>
            <br/>
        </sections>
    );
}