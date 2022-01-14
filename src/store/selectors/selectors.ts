import {createSelector} from "reselect";
import {State} from "../reducers/rootReducer";
import fetchStatuses from "../../interfaces/statuses";


interface ListItem {
    title: string
}

const allData = (state: State) => {
    return [...state?.list1?.data, ...state?.list2?.data, ...state?.list3?.data]
};

const statuses = (state: State) => {
    return [state?.list1?.status, state?.list2?.status, state?.list3?.status]
}

const errors = (state: State) => {
    return [
        state?.list1?.error ? state?.list1?.error : null,
        state?.list2?.error ? state?.list2?.error : null,
        state?.list3?.error ? state?.list3?.error : null]
}



export const selectUnionList = createSelector(
    allData,
    unionList => unionList.sort((a: ListItem, b: ListItem) => {
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0;
        return -1;
    })
)

export const selectIsLoading = createSelector(
    statuses,
    list => !list.every(item => item === fetchStatuses.SUCCESS || item === fetchStatuses.ERROR)
)


export const selectIsError = createSelector(
    statuses,
    list => list.some(item => item === fetchStatuses.ERROR)
)

export const selectErrors = createSelector(
    errors,
    list => list
)
