const PAGE_NAME = 'HOME';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const initState = {
    list: [{name: 'A'}, {name: 'B'}],
    type: PAGE_NAME,
    name: 'Home',
    page: 'Home'
};

export const addItem = (item) => {
  return {
      type: ADD_ITEM,
      payload: item
  }
};

export const removeItem = () => {
  return {
      type: REMOVE_ITEM
  }
};

const reducer = (state = initState, action) => {
    let newList = [];
    switch (action.type) {
        case ADD_ITEM:
            newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            };
        case REMOVE_ITEM:
            newList = [...state.list];
            newList.splice(-1, 1);
            return {
                ...state,
                list: newList
            };
        default:
            return state
    }
};

export default reducer