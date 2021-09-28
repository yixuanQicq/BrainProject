import './static/style';

import { enquireScreen } from 'enquire-js';
import React from 'react';
import DocumentTitle from 'react-document-title';

import Banner from './Banner';
import FeaturesPage from './FeaturesPage';
import Footer from './Footer';
import FormPage from './FormPage';
import Header from './Header';
import MainBanner from './MainBanner';

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
            <DocumentTitle title="Brain Project">
                <div>
                    <Header isMobile={this.state.isMobile} />
                    <div className="home-wrapper">
                        <MainBanner />
                        {/*<FormPage ref={page2Ref} />*/}
                        <FeaturesPage isMobile={this.state.isMobile} />
                    </div>
                    <Footer></Footer>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;
