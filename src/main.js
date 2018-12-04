import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { selectSubreddit } from './actions/asyncAciton';
import appReducer from './reducers/index';
import App from "./router";
import TabA from './module/home/tabA';
import TabB from './module/home/tabB';
import './app.less';
import { dispatchAddLog, crashReporter, thunk } from './middleware/dispatchAddLog';

const loggerMiddleware = createLogger();
const store = createStore(
  appReducer,
	applyMiddleware(
		thunkMiddleware, // 允许我们 dispatch() 函数
		crashReporter, // 一个很便捷的 middleware，用来打印 action 日志
		loggerMiddleware,
	)
);

store.dispatch(selectSubreddit('myActions'));

ReactDOM.render(
  <Provider store={store}>
	<App/>
  </Provider>,
    document.getElementById('root')
);

if(module.hot) {
    // 实现热更新
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}