import React, { Component } from "react";
const __html = require('./tutorial_draft_ENIGMA_model.html');
const template = { __html: __html };

class Tutorial_2_html extends Component {
    render() {
        return (
            <div className="screen-share">
                <span dangerouslySetInnerHTML={template} />
            </div>
        );
    }
}
export default Tutorial_2_html;