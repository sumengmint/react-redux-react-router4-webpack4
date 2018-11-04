import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./containers/App.js";
import './app.less';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

if(module.hot) {
    // 实现热更新
    module.hot.accept();
}