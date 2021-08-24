import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

// import GitHubButton from 'react-github-button';

function Banner() {
    return (
        <div className="intro-banner-wrapper">
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row gutter={16}>
                <Col span={12}></Col>
                <Col span={12}>
                    <div className="intro-banner-wrapper-div">
                        <h1>Centile Brain</h1>
                        <h3>This repository offers the opportunity to generate indices of
                            brain regional deviations for research purposes only based
                            on large-scale data and models provided by the ENIGMA
                            Lifespan Working Group,</h3>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

Banner.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    isMobile: PropTypes.bool.isRequired,
};

export default Banner;
