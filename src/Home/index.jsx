import './static/style';

import React from 'react';
import DocumentTitle from 'react-document-title';

import FeaturesPage from './FeaturesPage';
import Footer from './Footer';
import Header from './Header';
import MainBanner from './MainBanner';

class Home extends React.PureComponent {
    scrollToUploadData(ref) {
        console.log(ref);
        ref.current.scrollIntoView();
    }

    render() {
        return (
            <DocumentTitle title="CentileBrain">
                <div>
                    <Header/>
                    <div className="home-wrapper">
                        <MainBanner/>
                        <FeaturesPage/>
                    </div>
                    <Footer></Footer>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;
