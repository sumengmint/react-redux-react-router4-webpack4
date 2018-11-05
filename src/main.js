import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { selectSubreddit, fetchPosts, fetchPostsIfNeeded } from './actions/asyncAciton';
import appReducer from './reducers/index';
import App from "./containers/App.js";
import './app.less';

const loggerMiddleware = createLogger();
const store = createStore(
  appReducer,
	applyMiddleware(
		thunkMiddleware, // 允许我们 dispatch() 函数
		loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
	)
);

store.dispatch(selectSubreddit('sumeng'));
store.dispatch(fetchPostsIfNeeded('reactjs'))
	.then(() => console.log(store.getState()));

if(module.hot) {
	// 实现热更新
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index');
		store.replaceReducer(nextRootReducer);
	});
}

ReactDOM.render(
  <Provider store={store} myStore={store}>
      <App />
  </Provider>,
    document.getElementById('root')
);