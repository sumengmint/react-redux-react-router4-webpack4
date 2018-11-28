/**
 * Created by za-sumeng on 2018/11/22.
 */
import React, { Component } from 'react';
import Loadable from "react-loadable";
import Testloading from './components/testLoading';

const TestLoadabale = Loadable({
    loader: () => import('./components/tabLoading'),
    loading: Testloading
});

export default class TestLoadDashboard extends Component{
    render() {
        return <TestLoadabale></TestLoadabale>
    }
};