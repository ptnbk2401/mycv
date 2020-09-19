import HomeReducer from './home';
import ContactReducer from './contact';
import {combineReducers} from "redux";

export default combineReducers({
    home: HomeReducer,
    contact: ContactReducer
});