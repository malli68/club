import { combineReducers } from 'redux';
import ClubsReducers from './ClubsReducers';
import LoginReducers from './LoginReducers'
import ValidationReducers from './ValidationReducers';
import ClubPlayersReducers from './ClubPlayersReducers';


export default combineReducers({
    auth: LoginReducers,
    clubs: ClubsReducers,
    validate:ValidationReducers,
    users:ClubPlayersReducers,
});