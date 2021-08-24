import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';
import React from 'react';

import UploadDataForm from './UploadDataForm';

// eslint-disable-next-line react/prefer-stateless-function
class Page2 extends React.Component {
    render() {
        return (
            <div className="home-page page2">
                <div className="home-page-wrapper">
                    <h2>
                        Let’s <span>upload data</span>
                    </h2>
                    <div className="title-line-wrapper page1-line">
                        <div className="title-line" />
                    </div>
                    <OverPack>
                        <QueueAnim
                            key="queue"
                            type="bottom"
                            leaveReverse
                            className="page2-content"
                        >
                            <Row>
                                <Col span={12} offset={6}>
                                    <UploadDataForm />
                                </Col>
                            </Row>
                        </QueueAnim>
                    </OverPack>
                </div>
            </div>
        );
    }
}

export default Page2;
