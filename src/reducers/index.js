/**
 * Created by za-sumeng on 2018/11/5.
 */
import { combineReducers } from 'redux';
import { selectedsubreddit } from './selectedsubreddit';
import { postsBySubreddit } from './postsBySubreddit';
import { openTheModel } from './modelReducers';
import { mockApi } from './mockApiReducers';

//使用redux的combineReducers方法将所有reducer打包起来
const appReducer = combineReducers({
	selectedsubreddit,
	postsBySubreddit,
    openTheModel,
    mockApi
});

export default appReducer;