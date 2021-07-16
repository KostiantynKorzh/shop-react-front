import * as Actions from "./Actions";

export const storeUser = () => ({
    type: Actions.STORE_USER,
});

export const unstoreUser = () => ({
    type: Actions.UNSTORE_USER
});