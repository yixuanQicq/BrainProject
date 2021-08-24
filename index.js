import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './src/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/csv">
                    <h2>hey</h2>
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
