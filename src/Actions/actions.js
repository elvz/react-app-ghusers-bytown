export const types = {
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS'
};

export const actions = ({
    loadData: city => ({
        type: types.LOAD_DATA,
        city
    }),

    loadDataSuccess: data => ({
        type: types.LOAD_DATA_SUCCESS,
        data
    })
});