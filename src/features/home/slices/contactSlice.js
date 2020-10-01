import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    address: '',
    call: '',
    mail: [],
};

const contact = createSlice({
    name: 'introduction',
    initialState: initialState,
    reducers: {
        setContact(state, action) {
            state.address = action.payload.address;
            state.call = action.payload.call;
            state.mail = action.payload.mail;
            return state
        }
    }
});

const {reducer, actions} = contact;
export const {setContact} = actions;

export default reducer
