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
                    <Route path="/team">
                        <TeamPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/privacy">
                        <Privacy/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;