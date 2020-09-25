import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    avatar: '',
    fullname: '',
    description: '',
    socials: [],
}

const introduction = createSlice({
    name: 'introduction',
    initialState: initialState,
    reducers: {
      setIntroduction(state, action) {
        // state = action.payload
        return action.payload
      }
    }
  })
  
  const { reducer, actions } = introduction;
  export const { setIntroduction } = actions
  
  export default reducer