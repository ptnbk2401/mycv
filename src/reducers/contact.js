const PAGE_NAME = 'CONTACT';

export const actionGetName = page => ({
    name: PAGE_NAME,
    url: page.url,
});

export const reducer = (state = [], action) => {
    return action.name === PAGE_NAME ? state : false;
};