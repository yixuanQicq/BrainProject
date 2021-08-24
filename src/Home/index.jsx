import './static/style';

import { enquireScreen } from 'enquire-js';
import React from 'react';
import DocumentTitle from 'react-document-title';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Page1 from './Page1';
import Page2 from './Page2';
import MainBanner from './static/MainBanner';

let isMobile;

enquireScreen(b => {
    isMobile = b;
});

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };

        this.scrollToUploadData = this.scrollToUploadData.bind(this);
    }

    componentDidMount() {
        enquireScreen(b => {
            this.setState({
                isMobile: !!b,
            });
        });
    }

    scrollToUploadData(ref) {
        console.log(ref);
        ref.current.scrollIntoView();
        // window.scrollTo(0, ref.current.offsetTop);
    }

    render() {
        const page2Ref = React.createRef();
        return (
            <DocumentTitle title="Ant Design - pro">
                <div>
                    <Header isMobile={this.state.isMobile} />
                    <div className="home-wrapper">
                        <MainBanner />
                        <Banner
                            scrollToUploadData={this.scrollToUploadData}
                            page2Ref={page2Ref}
                            isMobile={this.state.isMobile}
                        />
                        <Page2 ref={page2Ref} />
                        <Page1 isMobile={this.state.isMobile} />
                    </div>
                    <Footer></Footer>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;
