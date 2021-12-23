import {createSelector} from "reselect";
import {State} from "../store/reducers/rootReducer";


interface ListItem {
    title: string
}

const allData = (state: State) => {
    return [...state?.list1?.data, ...state?.list2?.data, ...state?.list3?.data]
    console.log(state)
};

export const selectUnionList = createSelector(
    allData,
    unionList => unionList.sort((a: ListItem, b: ListItem) => {
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0;
        return -1;
    })
)