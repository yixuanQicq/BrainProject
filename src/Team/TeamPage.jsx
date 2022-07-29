import 'bootstrap/dist/css/bootstrap.css';
import './team-style.css'

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Header from '../Home/Header';
import Card from './Card';

export default function TeamPage(props) {

    return (
        <section>
            <Header></Header>

            <div className="team-container">
                <div className="team-title">
                    <h1>Our Team</h1>
                </div>

                <div style={{paddingRight: '3rem', paddingLeft: '3rem'}}>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname:'/sophia'}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/sophia.jpg"} name={"Dr. Sophia Frangou"} title={"Neuroscientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/paul`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/Paull.png"} name={"Dr. Paul Thompson"} title={"Data Scientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/ruiyang`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/ruiyang2.jpg"} name={"Dr. Ruiyang Ge"} title={"Data Scientist"}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname: `/shalaila`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/Shalaila.jpg"} name={"Dr. Shalaila Haas"} title={"Neuroscientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/amirhossein`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/Amirhossein.jpeg"} name={"Dr. Amirhossein Modabbernia"} title={"Clinical Neuroscientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/yuetong`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/yuetong.jpg"} name={"Yuetong Yu"} title={"Data Scientist"}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname:`/yixuan`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/yixuan.jpg"} name={"Yi Xuan Qi"} title={"Computer Scientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/vera`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/vera.jpg"} name={"Vera Fan"} title={"Data Scientist "}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname: `/faye`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/Faye.jpg"} name={"Faye New"} title={"Cognitive Neuroscientist "}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname:`/chuntong`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/chuntong.jpg"} name={"Chuntong Gao"} title={"Computer Scientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/shiyu`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/shiyu.jpg"} name={"Shiyu Chen"} title={"Computer Scientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Card style={{display:"none"}}/>
                        </div>
                    </div>
                </div>
                </div>

            </div>

        </section>

    );
}
