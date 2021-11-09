import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ContactPage from './Contact/ContactPage';
import Privacy from './Contact/PrivacyPage';
import ExplorePage from './Explore/ExplorePage';
import PublicationsPage from './Publications/PublicationsPage';
import TeamPage from './Team/TeamPage';
import Home from './Home';
import TutorialPage from './Tutorial/TutorialPage';


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        {/*<Home />*/}
                        <TutorialPage></TutorialPage>
                    </Route>
                    <Route path="/csv">
                        <h2>hey</h2>
                    </Route>
                    <Route path="/explore">
                        <ExplorePage/>
                    </Route>
                    <Route path="/publications">
                        <PublicationsPage/>
                    </Route>
                    <Route path="/tutorial">
                        <TutorialPage/>
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