import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

import TabA from './components/tabA';
import TabB from './components/tabB';
import Hooks from './components/reactHooks';
import {Context} from './components/context';

class App extends Component{
    render() {
        const history = createBrowserHistory({
            forceRefresh: false, // 是否强制刷新整个页面
        });

        return (
            <Router history={history}>
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
                        <li>
                            <Link to="/context">context</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={TabA} />
                    <Route path="/b" component={TabB} />
                    <Route path="/hook" component={Hooks} />
                    <Route path="/context" component={Context} />
                </div>
            </Router>
        );
    }
}

export default App;