import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { actions, types } from '../Actions/actions';

const baseUrl = 'https://api.github.com/search/users?q=location%3A';

function* loadData(action) {
    const response = yield axios.get(`${baseUrl}${action.city}`);
    yield put(actions.loadDataSuccess(response.data.items))
}

export function* watchLoadData() {
    yield takeEvery(types.LOAD_DATA, loadData)
}