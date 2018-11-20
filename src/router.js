import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TabA from './components/tabA';
import TabB from './components/tabB';
import Hooks from './components/reactHooks';

class App extends Component{
    render() {
        return (
            <Router>
                <div>
                    <ul className='menu-tab'>
                        <li>
                            <Link to="/">tab A</Link>
                        </li>
                        <li>
                            <Link to="/b">tab B</Link>
                        </li>
                        <li>
                            <Link to="/hook">tab hook</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={TabA} />
                    <Route path="/b" component={TabB} />
                    <Route path="/hook" component={Hooks} />
                </div>
            </Router>
        );
    }
}

export default App;