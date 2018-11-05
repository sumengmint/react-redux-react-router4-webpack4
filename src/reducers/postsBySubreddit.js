/**
 * Created by za-sumeng on 2018/11/5.
 */
import {
	INVALIDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from '../constants/index';

function posts(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: []
	},
	action
) {
	switch (action.type) {
		case INVALIDATE_SUBREDDIT:
			return Object.assign({}, state, {
				didInvalidate: true
			});
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			});
		default:
			return state
	}
}

export function postsBySubreddit(state = {}, action) {
	switch (action.type) {
		case INVALIDATE_SUBREDDIT:
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				[action.subreddit]: posts(state[action.subreddit], action)
			});
		default:
			return state
	}
}