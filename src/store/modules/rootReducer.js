import { combineReducers } from 'redux';
import worker from './worker/reducer';
import user from './user/reducer';

export default combineReducers({worker, user});
