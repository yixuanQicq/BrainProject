import React, { Component } from "react";
const __html = require('./tutorial1.html.js');
const template = { __html: __html };

class Tutorial_1_html extends Component {
    render() {
        return (
            <div className="screen-share">
                <span dangerouslySetInnerHTML={template} />
            </div>
        );
    }
}
export default Tutorial_1_html;