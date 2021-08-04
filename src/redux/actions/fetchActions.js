import * as Actions from './Actions'

export const fetchBegin = () => ({
    type: Actions.FETCH_BEGIN
});

export const fetchFailure = () => ({
    type: Actions.FETCH_FAILURE
});