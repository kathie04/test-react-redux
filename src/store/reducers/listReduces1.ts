import {AnyAction} from "redux";
import {types} from "../actions/actionList1";
import ListState from "./type";
import fetchStatuses from "../../interfaces/statuses";

const initialState : ListState = {
    status: fetchStatuses.NOT_STARTED
}

export default function listReducer1(state = initialState, action : AnyAction) {
    switch (action.type) {
        case types.SET_PROCESS : return {...state, status: fetchStatuses.IN_PROCESS};
        case types.SET_SUCCESS : return {...state, status: fetchStatuses.SUCCESS, data: action.payload};
        case types.SET_ERROR : return {...state, status: fetchStatuses.ERROR, error: action.payload};
        default : return state
    }
}