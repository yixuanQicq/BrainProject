import React, { Component } from "react";
const __html = require('./2.html.js');
const template = { __html: __html };

class MFP_Female_2 extends Component {
    render() {
        return (
            <div className="screen-share">
                <span dangerouslySetInnerHTML={template} />
            </div>
        );
    }
}
export default MFP_Female_2;