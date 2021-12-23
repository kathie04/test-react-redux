import ActionTypes from "./actionTypesType";

export const types: ActionTypes = {
    SET_SUCCESS: 'SET_SUCCESS_LIST2',
    SET_ERROR : 'SET_ERROR_LIST2',
    SET_PROCESS : 'SET_PROCESS_LIST2',
    REQUEST_LIST : 'REQUEST_LIST2'
}

export function setSuccessList2(payload: {}) {
    return {type: types.SET_SUCCESS, payload}
}

export function setErrorList2 (payload: {}) {
    return {type: types.SET_ERROR, payload}
}

export function setProcessList2 () {
    return {type: types.SET_PROCESS}
}

export function requestList2 () {
    return {type: types.REQUEST_LIST}
}