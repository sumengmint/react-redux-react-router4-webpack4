/**
 * Created by za-sumeng on 2018/11/5.
 */
import {
	SELECT_SUBREDDIT
} from '../constants/index';

export function selectedsubreddit(state = 'reactjs', action) {
	switch (action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit
		default:
			return state
	}
}