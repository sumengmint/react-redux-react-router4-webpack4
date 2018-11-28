/**
 * Created by za-sumeng on 2018/11/28.
 */
import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";

class Menu extends Component{
    render() {
        return (
            <ul className='menu-tree'>
                <li>
                    <Link to="/">tab A</Link>
                </li>
                <li>
                    <Link to="/b">tab B</Link>
                </li>
                <li>
                    <Link to="/hoc">HOC</Link>
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
        );
    }
}

export default Menu;