import { Col, Menu, Row } from 'antd';
import enquire from 'enquire.js';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuMode: 'horizontal',
        };
    }

    componentDidMount() {
        enquire.register('screen and (max-width:1200px)', {
            // If supplied, triggered when a media query matches.
            match: () => {
                this.setState({ menuMode: 'inline' });
            },

            // If supplied, triggered when the media query transitions
            // *from a matched state to an unmatched state*.
            unmatch: () => {
                this.setState({ menuMode: 'horizontal' });
            },
        });
    }

    render() {
        const { menuMode } = this.state;

        const menu = (
            <Menu
                mode={menuMode}
                id="nav"
                key="nav"
                style={{ backgroundColor: 'white', color: 'grey' }}
            >
                <Menu.Item key="home">
                    <a>Home</a>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="explore">
                    <a>
                        <span>Explore CentileBrain</span>
                    </a>
                    <Link to="/explore"></Link>
                </Menu.Item>
                <Menu.Item key="model_repository">
                    <a>
                        <span>CentileBrain Model</span>
                    </a>
                    <Link to="/"></Link>
                </Menu.Item>
                <Menu.Item key="tutorial">
                    <a>
                        <span>Tutorial</span>
                    </a>
                    <Link to="/tutorial"></Link>
                </Menu.Item>
                <Menu.Item key="publications">
                    <a>
                        <span>Publications</span>
                    </a>
                    <Link to="/publications"></Link>
                </Menu.Item>
                <Menu.Item key="team">
                    <a>
                        <span>Team</span>
                    </a>
                    <Link to="/team"></Link>
                </Menu.Item>
                <Menu.Item key="contact">
                    <a>
                        <span>Contact</span>
                    </a>
                    <Link to="/contact"></Link>
                </Menu.Item>
                {/*<Menu.Item key="github">*/}
                {/*    <a>*/}
                {/*        <span>GitHub</span>*/}
                {/*    </a>*/}
                {/*</Menu.Item>*/}
            </Menu>
        );

        return (
            <div
                id="header"
                className="header"
                style={{ backgroundColor: 'white' }}
            >
                {menuMode === 'inline' ? (
                    <Menu style={{ backgroundColor: 'white', color: 'grey' }}>
                        <Menu.Item key="home">
                            <a>Home</a>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="explore">
                            <a>
                                <span>Explore CentileBrain</span>
                            </a>
                            <Link to="/explore"></Link>
                        </Menu.Item>
                        <Menu.Item key="model_repository">
                            <a>
                                <span>CentileBrain Model</span>
                            </a>
                            <Link to="/"></Link>
                        </Menu.Item>
                        <Menu.Item key="tutorial">
                            <a>
                                <span>Tutorial</span>
                            </a>
                            <Link to="/tutorial"></Link>
                        </Menu.Item>
                        <Menu.Item key="publications">
                            <a>
                                <span>Publications</span>
                            </a>
                            <Link to="/publications"></Link>
                        </Menu.Item>
                        <Menu.Item key="team">
                            <a>
                                <span>Team</span>
                            </a>
                            <Link to="/team"></Link>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <a>
                                <span>Contact</span>
                            </a>
                            <Link to="/contact"></Link>
                        </Menu.Item>
                        {/*<Menu.Item key="github">*/}
                        {/*    <a>*/}
                        {/*        <span>GitHub</span>*/}
                        {/*    </a>*/}
                        {/*</Menu.Item>*/}
                    </Menu>
                ) : null}
                <Row style={{ backgroundColor: 'white', color: 'grey' }}>
                    <Col xxl={20} xl={20} lg={20} md={16} sm={0} xs={0} >
                        <div className="header-meta" >
                            {menuMode === 'horizontal' ? (
                                <div id="menu">{menu}</div>
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
