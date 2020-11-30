import { combineReducers } from 'redux';
import auth from './authReducer';
import chat from './ChatReducer';

export default combineReducers ({
    auth,
    chat
})