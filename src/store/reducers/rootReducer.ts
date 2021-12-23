import {combineReducers} from "redux";
import listReducer1 from "./listReduces1";
import listReducer2 from "./listReduces2";
import listReducer3 from "./listReduces3";

const rootReducer = combineReducers({
    list1 : listReducer1,
    list2: listReducer2,
    list3: listReducer3
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>