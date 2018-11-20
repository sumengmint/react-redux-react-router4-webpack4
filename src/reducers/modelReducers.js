/**
 * Created by za-sumeng on 2018/11/19.
 */
import { OPEN_MODEL } from '../constants/index';

const initState = {
    isOpen: false
};

export function openTheModel( state = initState, action ) {
    console.log(action);
    switch (action.type) {
        case OPEN_MODEL: {
            return Object.assign({}, state, { isOpen: action.isOpen });
        }
        default: return state
    }
}