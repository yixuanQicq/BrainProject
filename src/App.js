import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ContactPage from './Contact/ContactPage';
import Privacy from './Contact/PrivacyPage';
import ExplorePage from './Explore/ExplorePage';
import PublicationsPage from './Publications/PublicationsPage';
import TeamPage from './Team/TeamPage';
import Home from './Home';
import TutorialPage from './Tutorial/TutorialPage';
import TutorialPage2 from './Tutorial/tutorialPage2';
import ExplorePage2 from './Explore/ExplorePage2';
import ModelPage from './Model/ModelPage';
import ModelPage2 from './Model/ModelPage2';
import TutorialPage3 from './Tutorial/TutorialPage3';


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/csv">
                        <h2>hey</h2>
                    </Route>
                    <Route path="/explore">
                        <ExplorePage/>
                    </Route>
                    <Route path="/explore2">
                        <ExplorePage2/>
                    </Route>
                    <Route path="/publications">
                        <PublicationsPage/>
                    </Route>
                    <Route path="/tutorial">
                        <TutorialPage/>
                    </Route>
                    <Route path="/tutorial2">
                        <TutorialPage2/>
                    </Route>
                    <Route path="/tutorial3">
                        <TutorialPage3/>
                    </Route>
                    <Route path="/model">
                        <ModelPage/>
                    </Route>
                    <Route path="/model2">
                        <ModelPage2/>
                    </Route>
                    <Route path="/team">
                        <TeamPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/privacy">
                        <Privacy/>
                    </Route>
                    <Route path='/engima' component={() => {
                        window.location.href = 'https://enigma.ini.usc.edu/';
                        return null;
                    }}/>
                    <Route path='/sophia' component={() => {
                        window.location.href = 'https://www.centreforbrainhealth.ca/frangou-sophia';
                        return null;
                    }}/>
                    <Route path='/paul' component={() => {
                        window.location.href = 'https://keck.usc.edu/faculty-search/paul-m-thompson/';
                        return null;
                    }}/>
                    <Route path='/ruiyang' component={() => {
                        window.location.href = 'https://www.researchgate.net/profile/Ruiyang-Ge';
                        return null;
                    }}/>
                    <Route path='/yuetong' component={() => {
                        window.location.href = 'https://linkedin.com/in/yuetong-jordan-yu';
                        return null;
                    }}/>
                    <Route path='/vera' component={() => {
                        window.location.href = 'https://www.linkedIn.com/in/VeraFanYunan';
                        return null;
                    }}/>
                    <Route path='/chuntong' component={() => {
                        window.location.href = 'https://cgao.info';
                        return null;
                    }}/>
                    <Route path='/yixuan' component={() => {
                        window.location.href = 'https://www.linkedin.com/in/yi-xuan-qi';
                        return null;
                    }}/>
                    <Route path='/faye' component={() => {
                        window.location.href = 'https://www.linkedin.com/in/faye-new';
                        return null;
                    }}/>
                    <Route path='/shalaila' component={() => {
                        window.location.href = 'https://www.ncbi.nlm.nih.gov/myncbi/shalaila.haas.1/bibliography/public/';
                        return null;
                    }}/>

                </Switch>
            </div>
        </Router>
    );
}

export default App;