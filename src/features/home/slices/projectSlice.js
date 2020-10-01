import {createSlice} from "@reduxjs/toolkit"
import CONST from "../../../app/const";

const initialState = {
    list: []
};

const project = createSlice({
    name: 'introduction',
    initialState: initialState,
    reducers: {
        setProject(state, action) {
            state.list = action.payload.map(item => {
                // item.image = CONST.APP_URL + item.image;
                return item;
            });
            return state
        }
    }
});

const {reducer, actions} = project;
export const {setProject} = actions;

export default reducer
