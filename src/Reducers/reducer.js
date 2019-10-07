import { types } from '../Actions/actions';

const initState = {
    users: []
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_DATA_SUCCESS:
            return {
                ...state,
                users: action.data
            };
            default:
                return state;
    }
};