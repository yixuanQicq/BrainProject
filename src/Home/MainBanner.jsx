import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

// import GitHubButton from 'react-github-button';

function Banner(props) {
    return (
        <div className="intro-banner-wrapper">
            <Row></Row>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div className="intro-banner-wrapper-div">
                        <h1>CentileBrain</h1>
                    </div>
                </Col>
            </Row>
            <Row></Row>
            <Row></Row>
            <Row gutter={16}>
                <Col span={13} />
                <Col span={8}>
                    <div className="intro-banner-wrapper-div">
                        <h3>{"CentileBrain offers the opportunity to generate"}</h3>
                        <h3>{"indices of brain regional deviations for research"}</h3>
                        <h3>{"purposes only based on models provided by the"}</h3>
                        <h3>{"ENIGMA Lifespan Working Group"}</h3>
                    </div>
                </Col>
            </Row>
            <Row></Row>
        </div>
    );
}

Banner.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    isMobile: PropTypes.bool.isRequired,
};

export default Banner;
