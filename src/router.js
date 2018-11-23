import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

import TabA from './components/tabA';
import TabB from './components/tabB';
import TabC from './components/tabC';
import Hooks from './components/reactHooks';
import {Context} from './components/context';
import ReactStudy from './reactStudy/index';

class App extends Component{
    render() {
        const history = createBrowserHistory({
            forceRefresh: false, // 是否强制刷新整个页面
        });

        return (
            <Router history={history}>
                <div className="container">
                    <ul className='menu-tree'>
                        <li>
                            <Link to="/">tab A</Link>
                        </li>
                        <li>
                            <Link to="/b">tab B</Link>
                        </li>
                        <li>
                            <Link to="/c">tab C</Link>
                        </li>
                        <li>
                            <Link to="/hook">tab hook</Link>
                        </li>
                        <li>
                            <Link to="/context">context</Link>
                        </li>
                        <li>
                            <Link to="/react">react</Link>
                        </li>
                    </ul>


                    <div className="main-content">
                        <Route exact path="/" component={TabA} />
                        <Route path="/b" component={TabB} />
                        <Route path="/hook" component={Hooks} />
                        <Route path="/context" component={Context} />
                        <Route path="/react"><ReactStudy/></Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;