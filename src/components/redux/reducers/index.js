import { combineReducers } from 'redux';
import ClubsReducers from './ClubsReducers';
import LoginReducers from './LoginReducers'

export default combineReducers({
    auth: LoginReducers,
    clubs: ClubsReducers
});