import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    education: [],
    storyOfGlory: '',
    whatIDo: '',
};

const profile = createSlice({
    name: 'introduction',
    initialState: initialState,
    reducers: {
        setProfile(state, action) {
            state.education = action.payload.education;
            state.storyOfGlory = action.payload.storyOfGlory;
            state.whatIDo = action.payload.whatIDo;
            return state
        }
    }
});

const {reducer, actions} = profile;
export const {setProfile} = actions;

export default reducer
