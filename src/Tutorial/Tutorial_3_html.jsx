import React, { Component } from "react";
const __html = require('./tutorial3.html.js');
const template = { __html: __html };

class Tutorial_3_html extends Component {
    render() {
        return (
            <div className="screen-share">
                <span dangerouslySetInnerHTML={template} />
            </div>
        );
    }
}
export default Tutorial_3_html;