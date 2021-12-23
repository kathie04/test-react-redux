import ActionTypes from "./actionTypesType";

export const types: ActionTypes = {
    SET_SUCCESS: 'SET_SUCCESS_LIST1',
    SET_ERROR : 'SET_ERROR_LIST1',
    SET_PROCESS : 'SET_PROCESS_LIST1',
    REQUEST_LIST : 'REQUEST_LIST1'
}

export function setSuccessList1(payload: {}) {
    return {type: types.SET_SUCCESS, payload}
}

export function setErrorList1 (payload: {}) {
    return {type: types.SET_ERROR, payload}
}

export function setProcessList1 () {
    return {type: types.SET_PROCESS}
}

export function requestList1 () {
    return {type: types.REQUEST_LIST}
}