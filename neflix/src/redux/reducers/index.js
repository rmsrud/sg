import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import peopleReducer from './peopleReducer';

export default combineReducers({
    movie: movieReducer,
    people: peopleReducer
})