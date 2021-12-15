/* eslint-disable max-lines */
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import TweenOne from 'rc-tween-one';
import React from 'react';
import { Link } from 'react-router-dom';

const { TweenOneGroup } = TweenOne;

const featuresCN = [
    {
        title: 'Explore the CentileBrain Dataset',
        src: 'src/Home/data/explore2.svg',
        color: '#13C2C2',
        link: "/explore",
        shadowColor: 'rgba(19,194,194,.12)',
    },
    {
        title: "Use CentileBrain to Generate Estimates",
        src: 'src/Home/data/iStock-1251018502 Upload.svg',
        color: '#2F54EB',
        link: "",
        shadowColor: 'rgba(47,84,235,.12)',
    },
    {
        title: 'The CentileBrain Model',
        src: 'src/Home/data/iStock-1155106799_Model.svg',
        color: '#F5222D',
        link: "",
        shadowColor: 'rgba(245,34,45,.12)',
    },
    {
        title: 'CentileBrain Development Team',
        src: 'src/Home/data/iStock-966858736_Team.svg',
        color: '#1AC44D',
        link: "/team",
        shadowColor: 'rgba(26,196,77,.12)',
    },
    {
        title: 'CentileBrain Publications',
        src: 'src/Home/data/iStock-1323841513 publications.svg',
        color: '#FAAD14',
        link: "/publications",
        shadowColor: 'rgba(250,173,20,.12)',
    },
    {
        title: 'Learn More About ENIGMA Consortium',
        src: 'src/Home/data/enigma.jpeg',
        color: '#722ED1',
        link: 'https://enigma.ini.usc.edu/',
        shadowColor: 'rgba(114,46,209,.12)',
    }
];

const pointPos = [
    { x: -30*3, y: -10*3 },
    { x: 20*3, y: -20*3 },
    { x: -65*3, y: 15*3 },
    { x: -45*3, y: 80*3 },
    { x: 35*3, y: 5*3 },
    { x: 50*3, y: 50*3, opacity: 0.2 },
];

class FeaturesPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hoverNum: null,
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.getEnter = this.getEnter.bind(this);
    }

    onMouseOver(i) {
        this.setState({
            hoverNum: i,
        });
    }

    onMouseOut() {
        this.setState({
            hoverNum: null,
        });
    }

    getEnter(e) {
        const i = e.index;
        const r = Math.random() * 2 - 1;
        const y = Math.random() * 10 + 5;
        const delay = Math.round(Math.random() * (i * 50));
        return [
            {
                delay,
                opacity: 0.4,
                ...pointPos[e.index],
                ease: 'easeOutBack',
                duration: 300,
            },
            {
                y: r > 0 ? `+=${y}` : `-=${y}`,
                duration: Math.random() * 1000 + 2000,
                yoyo: true,
                repeat: -1,
            },
        ];
    }

    render() {
        const { hoverNum } = this.state;
        let children = [[], [], []];
        featuresCN.forEach((item, i) => {
            const isHover = hoverNum === i;
            const pointChild = [
                'point-0 left',
                'point-0 right',
                'point-ring',
                'point-1',
                'point-2',
                'point-3',
            ].map(className => (
                <TweenOne
                    component="i"
                    className={className}
                    key={className}
                    style={{
                        background: item.color,
                        borderColor: item.color,
                    }}
                />
            ));
            const child = (
                <li key={i.toString()}>
                    <div
                        className="page1-box"
                        onMouseEnter={() => {
                            this.onMouseOver(i);
                        }}
                        onMouseLeave={this.onMouseOut}
                    >
                        <TweenOneGroup
                            className="page1-point-wrapper"
                            enter={this.getEnter}
                            leave={{
                                x: 0,
                                y: 50,
                                opacity: 0,
                                duration: 300,
                                ease: 'easeInBack',
                            }}
                            resetStyleBool={false}
                        >
                            {(this.props.isMobile || isHover) && pointChild}
                        </TweenOneGroup>
                        <div
                            className="page1-image"
                            style={{
                                boxShadow: `${
                                    isHover ? '0 12px 24px' : '0 6px 12px'
                                } ${item.shadowColor}`,
                            }}
                        >
                            <Link to={item.link}><img className="page1-image-img"
                                src={item.src}
                                alt="img"
                                style={i === 4 ? { marginLeft: -15 } : {}}
                            /></Link>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </li>
            );
            children[Math.floor(i / 3)].push(child);
        });

        children = children.map((item, i) => (
            <QueueAnim
                className="page1-box-wrapper"
                key={i.toString()}
                type="bottom"
                leaveReverse
                delay={[i * 100, (children.length - 1 - i) * 100]}
                component="ul"
            >
                {item}
            </QueueAnim>
        ));
        return (
            <div className="home-page page1">
                <div className="home-page-wrapper" id="page1-wrapper">
                    {!this.props.isMobile && (
                        <Parallax
                            className="page1-bg"
                            animation={{
                                translateY: 200,
                                ease: 'linear',
                                playScale: [0, 1.65],
                            }}
                            location="page1-wrapper"
                        >
                            Features
                        </Parallax>
                    )}

                    <div className="title-line-wrapper page1-line">
                        <div className="title-line" />
                    </div>
                    <OverPack>{children}</OverPack>
                </div>
            </div>
        );
    }
}

export default FeaturesPage;
