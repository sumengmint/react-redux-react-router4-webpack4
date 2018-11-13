import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TabA from './components/tabA';
import TabB from './components/tabB';

class App extends Component{
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">tab A</Link>
                        </li>
                        <li>
                            <Link to="/b">tab B</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={TabA} />
                    <Route path="/b" component={TabB} />
                </div>
            </Router>
        );
    }
}

export default App;