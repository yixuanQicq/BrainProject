import React, { Component } from "react";
const __html = require('./model2.html.js');
const template = { __html: __html };

class Model_2_html extends Component {
    render() {
        return (
            <div className="screen-share">
                <span dangerouslySetInnerHTML={template} />
            </div>
        );
    }
}
export default Model_2_html;