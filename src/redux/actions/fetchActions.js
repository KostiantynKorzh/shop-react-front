import * as Actions from './Actions'

export const fetchBegin = () => ({
    type: Actions.FETCH_BEGIN
});

export const fetchFailure = error => ({
    type: Actions.FETCH_FAILURE,
    payload: {error}
});