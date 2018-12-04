/**
 * Created by za-sumeng on 2018/11/5.
 */
import {
	RECEIVED_MOCK
} from '../constants/index';

export function mockApi(state = {}, action) {
	switch (action.type) {
		case RECEIVED_MOCK:
			return Object.assign({}, state, {json: action.json});
		default:
			return state
	}
}