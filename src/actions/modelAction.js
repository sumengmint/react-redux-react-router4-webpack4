/**
 * Created by za-sumeng on 2018/11/19.
 */
import { OPEN_MODEL } from '../constants/index';

export function openModel() {
    return {
        type: OPEN_MODEL,
        isOpen: true
    }
}