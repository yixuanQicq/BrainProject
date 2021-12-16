import { Col, Icon,Menu, Row } from 'antd';
import enquire from 'enquire.js';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuMode: 'horizontal',
            showMobileMenu: false,
        };
        this.expandMobileMenu = this.expandMobileMenu.bind(this);
        this.collapseMobileMenu = this.collapseMobileMenu.bind(this);
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

    expandMobileMenu() {
        this.setState({ showMobileMenu: true });
    }

    collapseMobileMenu() {
        this.setState({ showMobileMenu: false });
    }

    render() {
        const { menuMode, showMobileMenu } = this.state;

        const menu = (
            <Menu mode={menuMode} id="nav" key="nav" onClick={this.collapseMobileMenu}>
                <Menu.Item key="home">
                    <a>Home</a>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="explore">
                    <a>
                        <span>Explore CentileBrain</span>
                    </a>
                    <Link to="/explore" />
                </Menu.Item>
                <Menu.Item key="model_repository">
                    <a>
                        <span>CentileBrain Model</span>
                    </a>
                    <Link to="/model" />
                </Menu.Item>
                <Menu.Item key="tutorial">
                    <a>
                        <span>Tutorial</span>
                    </a>
                    <Link to="/tutorial" />
                </Menu.Item>
                <Menu.Item key="publications">
                    <a>
                        <span>Publications</span>
                    </a>
                    <Link to="/publications" />
                </Menu.Item>
                <Menu.Item key="team">
                    <a>
                        <span>Team</span>
                    </a>
                    <Link to="/team" />
                </Menu.Item>
                <Menu.Item key="contact">
                    <a>
                        <span>Contact</span>
                    </a>
                    <Link to="/contact" />
                </Menu.Item>
            </Menu>
        );

        return (
            <div id="header" className="header">
                {menuMode === 'inline' &&
                !showMobileMenu && (
                    <Icon
                        type="bars"
                        className="nav-phone-icon"
                        onClick={this.expandMobileMenu}
                    />
                )}
                {menuMode === 'inline' && showMobileMenu && menu}
                <Row>
                    <Col xxl={20} xl={20} lg={20} md={16} sm={0} xs={0}>
                        <div className="header-meta">
                            {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
