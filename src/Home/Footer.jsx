import { Col, Row } from 'antd';
import React from 'react';

function Footer() {
    return (
        <footer id="footer" className="dark">
            <Row className="bottom-bar">
                <Col lg={18} sm={24}>
                    <span
                        style={{
                            lineHeight: '16px',
                            paddingRight: 12,
                            marginRight: 11,
                            borderRight: '1px solid rgba(255, 255, 255, 0.55)',
                        }}
                    >
                        <a
                            href="https://docs.alipay.com/policies/privacy/antfin"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Link1
                        </a>
                    </span>
                    <span style={{ marginRight: 24 }}>
                        <a
                            href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Link2
                        </a>
                    </span>
                    <span style={{ marginRight: 12 }}>Built by Chuntong Gao</span>
                    <span style={{ marginRight: 12 }}>
                        Copyright © Djavad Mowafaghian Centre for Brain Health
                    </span>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
