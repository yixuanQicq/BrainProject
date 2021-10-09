import React, {useState} from 'react';
import Header from '../Home/Header';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import './team-style.css'

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
                            <Card imgsrc={"src/Team/photos/sophia.jpg"} name={"Dr. Sophia Frangou"}/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={"src/Team/photos/ruiyang.jpg"} name={"Dr. Ruiyang Ge"}/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={"src/Team/photos/yuetong.jpg"} name={"Yuetong Yu"}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={"src/Team/photos/yixuan.jpg"} name={"Yi Xuan Qi"}/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={"src/Team/photos/vera.jpg"} name={"Vera Fan"}/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={"src/Team/photos/chuntong.jpg"} name={"Chuntong Gao"}/>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
}
