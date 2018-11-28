import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

import Menu from './module/layout/menu';
import TabA from './module/home/tabA';
import TabB from './module/home/tabB';
import Hoc from './module/home/tabC';
import Hooks from './module/home/reactHooks';
import {Context} from './module/home/context';
import ReactStudy from './reactStudy/index';

class App extends Component{
    render() {
        const history = createBrowserHistory({
            forceRefresh: false, // 是否强制刷新整个页面
        });

        return (
            <Router history={history}>
                <div className="container">
                    <Menu/>

                    <div className="main-content">
                        <Route exact path="/" component={TabA} />
                        <Route path="/b" component={TabB} />
                        <Route path="/hoc" component={Hoc} />
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