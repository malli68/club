<<<<<<< HEAD
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
=======
import { combineReducers } from 'redux';
import ClubsReducers from './ClubsReducers';
import LoginReducers from './LoginReducers'
import ValidationReducers from './ValidationReducers';

export default combineReducers({
    auth: LoginReducers,
    clubs: ClubsReducers,
    validate:ValidationReducers
});
>>>>>>> 03ffa5a12daf10079fd3ff5076f21db4c34fe44e
