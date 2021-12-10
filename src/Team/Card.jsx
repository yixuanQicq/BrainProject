import React from 'react'
import "./card-style.css"

export default function Card(props) {
    if (props.imgsrc == null) {
        return(
            <div className="card text-center" >
                <div className="overflow">
                    <img src={props.imgsrc} alt="yixuan" className="card-img-top" style={{display:"none"}}/>
                </div>
                <div className="card-body text-dark" style={{display:"none"}}>
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