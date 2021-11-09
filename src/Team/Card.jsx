import React from 'react'
import "./card-style.css"

export default function Card(props) {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="yixuan" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.name}
                </h4>
                <p className="card-text text-secondary">
                    {props.title}
                </p>
            </div>
        </div>
    );
}