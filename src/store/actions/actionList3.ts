import ActionTypes from "./types";

export const types: ActionTypes = {
    SET_SUCCESS: 'SET_SUCCESS_LIST3',
    SET_ERROR : 'SET_ERROR_LIST3',
    SET_PROCESS : 'SET_PROCESS_LIST3',
    REQUEST_LIST : 'REQUEST_LIST3'
}

export function setSuccessList3 (payload: {}) {
    return {type: types.SET_SUCCESS, payload}
}

export function setErrorList3 (payload: {}) {
    return {type: types.SET_ERROR, payload}
}

export function setProcessList3 () {
    return {type: types.SET_PROCESS}
}

export function requestList3 () {
    return {type: types.REQUEST_LIST}
}