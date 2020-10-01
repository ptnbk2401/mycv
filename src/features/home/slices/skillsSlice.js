import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    skills: [],
    workExperience: []
};

const skill = createSlice({
    name: 'introduction',
    initialState: initialState,
    reducers: {
        setSkills(state, action) {
            state.skills = action.payload.skills;
            state.workExperience = action.payload.workExperience;
            return state
        }
    }
});

const {reducer, actions} = skill;
export const {setSkills} = actions;

export default reducer
