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
                            <Link to={{ pathname:`https://www.centreforbrainhealth.ca/frangou-sophia`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/sophia.jpg"} name={"Dr. Sophia Frangou"} title={"Neuroscientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`https://keck.usc.edu/faculty-search/paul-m-thompson/`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/Paull.png"} name={"Paul Thompson"} title={"Data Scientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`https://www.researchgate.net/profile/Ruiyang-Ge`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/ruiyang2.jpg"} name={"Dr. Ruiyang Ge"} title={"Biomedical Engineer"}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname:`https://linkedin.com/in/yuetong-jordan-yu`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/yuetong.jpg"} name={"Yuetong Yu"} title={"Data Scientist"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`https://www.linkedIn.com/in/VeraFanYunan`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/vera.jpg"} name={"Vera Fan"} title={"Data Scientist "}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname:`https://cgao.info`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/chuntong.jpg"} name={"Chuntong Gao"} title={"Web Developer"}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={{ pathname:`https://www.linkedin.com/in/yi-xuan-qi`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/yixuan.jpg"} name={"Yi Xuan Qi"} title={"Full Stack Developer"}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={{ pathname: `https://www.linkedin.com/in/faye-new`}}  style={{ textDecoration: `none` }} target="_blank">
                                <Card imgsrc={"./src/Team/photos/Faye.jpg"} name={"Faye New"} title={"Cognitive Neuroscientist "}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                        <Card style={{display:"none"}}/>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
}
