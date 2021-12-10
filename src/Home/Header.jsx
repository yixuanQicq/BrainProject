import { Button, Col, Icon, Menu, Popover, Row } from 'antd';
import { enquireScreen } from 'enquire-js';
import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL =
    'https://pbs.twimg.com/profile_images/510183712554635264/nO1xJR0U_400x400.jpeg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false,
            menuMode: 'horizontal',
        };
    }

    componentDidMount() {
        enquireScreen(b => {
            this.setState({ menuMode: b ? 'inline' : 'horizontal' });
        });
    }

    render() {
        const { menuMode, menuVisible } = this.state;

        const menu = (
            <Menu mode={menuMode} id="nav" key="nav">
                <Menu.Item key="home">
                    <a>Home</a>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key="explore">
                    <a>
                        <span>Explore CentileBrain</span>
                    </a>
                    <Link to='/explore'></Link>
                </Menu.Item>
                <Menu.Item key="model_repository">
                    <a>
                        <span>CentileBrain Model</span>
                    </a>
                    <Link to='/'></Link>
                </Menu.Item>
                <Menu.Item key="tutorial">
                    <a>
                        <span>Tutorial</span>
                    </a>
                    <Link to='/tutorial'></Link>
                </Menu.Item>
                <Menu.Item key="pulications">
                    <a>
                        <span>Publications</span>
                    </a>
                    <Link to='/publications'></Link>
                </Menu.Item>
                <Menu.Item key="team">
                    <a>
                        <span>Team</span>
                    </a>
                    <Link to='/team'></Link>
                </Menu.Item>
                <Menu.Item key="contact">
                    <a>
                        <span>Contact</span>
                    </a>
                    <Link to='/contact'></Link>
                </Menu.Item>

                {menuMode === 'inline' && (
                    <Menu.Item key="preview">
                        <a
                            target="_blank"
                            href="http://preview.pro.ant.design/"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Menu.Item>
                )}
            </Menu>
        );

        return (
            <div id="header" className="header">
                {menuMode === 'inline' ? (
                    <Popover
                        overlayClassName="popover-menu"
                        placement="bottomRight"
                        content={menu}
                        trigger="click"
                        visible={menuVisible}
                        arrowPointAtCenter
                        onVisibleChange={this.onMenuVisibleChange}
                    >
                        <Icon
                            className="nav-phone-icon"
                            type="menu"
                            onClick={this.handleShowMenu}
                        />
                    </Popover>
                ) : null}
                <Row>
                    <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                        {/*<div id="logo" to="/">*/}
                        {/*    <img src={LOGO_URL} alt="logo" />*/}
                        {/*</div>*/}
                    </Col>
                    {/*<Col></Col>*/}
                    <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                        <div className="header-meta">
                            <div id="preview">
                                <a
                                    id="preview-button"
                                    target="_blank"
                                    href="http://preview.pro.ant.design"
                                    rel="noopener noreferrer"
                                >
                                    <Button icon="github">GitHub</Button>
                                </a>
                            </div>
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
