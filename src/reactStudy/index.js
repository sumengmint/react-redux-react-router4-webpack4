import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import Tab from './tab/tab';
import { getCookie, setCookie, delCookie } from '../utils/cookie';

class ReactStudy extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const expirse = 3*24*60*60*1000;
        setCookie( {name: 'sumeng' }, expirse);
        console.log(getCookie());
        delCookie('undefinedname');
    }

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