import React, {useState} from 'react';
import Header from '../Home/Header';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import './team-style.css'
import { Link } from 'react-router-dom';

export default function TeamPage(props) {

    return (
        <section>
            <Header></Header>

            <div className="team-container">
                <div className="team-title">
                    <h1>Our Team</h1>
                </div>

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
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/ruiyang2.jpg"} name={"Dr. Ruiyang Ge"} title={"Biomedical Engineer"}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname:`/yixuan`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/yixuan.jpg"} name={"Yi Xuan Qi"} title={"Full Stack Developer"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/yuetong`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/yuetong.jpg"} name={"Yuetong Yu"} title={"Data Scientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`/shalaila`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/vera.jpg"} name={"Vera Fan"} title={"Data Scientist "}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname:`/chuntong`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/chuntong.jpg"} name={"Chuntong Gao"} title={"Web Developer"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname: `/faye`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/Faye.jpg"} name={"Faye New"} title={"Cognitive Neuroscientist "}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname: `/faye`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"https://raw.githubusercontent.com/yixuanQicq/BrainProject/main/src/Team/photos/Shalaila .jpg"} name={"Shalaila Hass"} title={"Neuroscientist"}/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
}
