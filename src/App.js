import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ContactPage from './Contact/ContactPage';
import Privacy from './Contact/PrivacyPage';


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