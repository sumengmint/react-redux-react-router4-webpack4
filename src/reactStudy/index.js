import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";

import Tab from './tab/tab';

class ReactStudy extends Component{
    render() {
        return (
            <div>
                <ul className='menu-tab'>
                    <li>
                        <Link to="/react/tab">tab</Link>
                    </li>
                </ul>

                <Route exact path="/react/tab"><Tab activeIndex="1" defaultActiveIndex="0"/></Route>
            </div>
        );
    }
}

export default ReactStudy;