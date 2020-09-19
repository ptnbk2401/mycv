const PAGE_NAME = 'CONTACT';

const initState = {
    list: [],
    type: PAGE_NAME,
    name: 'Contact',
    page: 'Contact'
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case PAGE_NAME:
            return state;
        default:
            return state
    }
};

export default reducer