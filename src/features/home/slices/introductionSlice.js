import {createSlice} from "@reduxjs/toolkit"
import CONST from "../../../app/const";

const initialState = {
    avatar: '',
    fullname: '',
    description: '',
    socials: [],
};

const introduction = createSlice({
    name: 'introduction',
    initialState: initialState,
    reducers: {
        setIntroduction(state, action) {
            state = action.payload;
            // state.avatar = CONST.APP_URL + action.payload.avatar;
            return state
        }
    }
});

const {reducer, actions} = introduction;
export const {setIntroduction} = actions;

export default reducer
