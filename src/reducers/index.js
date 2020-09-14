import * as home from './home';
import * as contact from './contact';
import {combineReducers} from "redux";

export default combineReducers({
    home,
    contact
});